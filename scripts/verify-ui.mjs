import assert from 'node:assert/strict'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { chromium } from '@playwright/test'

const origin = process.env.PORTFOLIO_TEST_URL || 'http://127.0.0.1:5173'
const output = new URL('../verification/', import.meta.url)
await mkdir(output, { recursive: true })
const browser = await chromium.launch({
  channel: 'chrome',
  headless: true,
  args: ['--disable-background-networking'],
})
const errors = []
const checks = []
const capture = process.env.PORTFOLIO_CAPTURE !== '0'
const reference = await readFile(new URL('../reference/code.html', import.meta.url), 'utf8')

try {
  const context = await browser.newContext({ reducedMotion: 'reduce', permissions: ['clipboard-read', 'clipboard-write'] })
  const page = await context.newPage()
  page.on('pageerror', error => errors.push(error.message))
  page.on('console', message => { if (message.type() === 'error') errors.push(message.text()) })
  await page.goto(origin, { waitUntil: 'networkidle' })
  await page.evaluate(() => document.fonts.ready)
  const content = await page.evaluate(html => {
    const source = new DOMParser().parseFromString(html, 'text/html')
    const text = node => {
      const clone = node.cloneNode(true)
      clone.querySelectorAll('.material-symbols-outlined, .clipboard-feedback').forEach(icon => icon.remove())
      const walker = document.createTreeWalker(clone, NodeFilter.SHOW_TEXT)
      const parts = []
      while (walker.nextNode()) {
        const part = walker.currentNode.textContent.replace(/\s+/g, ' ').trim()
        if (part) parts.push(part)
      }
      return parts.join(' ')
    }
    return [...document.querySelectorAll('main section')].map(section => ({
      id: section.id,
      exact: text(section) === text(source.getElementById(section.id)),
    }))
  }, reference)
  assert(content.every(section => section.exact), `El copy difiere del export: ${JSON.stringify(content)}`)
  checks.push({ check: 'Copy de las siete secciones idéntico al export', pass: true })
  assert(await page.evaluate(() => [...document.querySelectorAll('.material-symbols-outlined')].every(icon => icon.querySelector('svg path'))))
  checks.push({ check: 'Todos los iconos renderizan como Material Symbols SVG locales', pass: true })

  for (const width of [320, 375, 390, 768, 1024, 1280, 1440, 1920]) {
    await page.setViewportSize({ width, height: width === 1280 ? 1024 : 900 })
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }))
    const geometry = await page.evaluate(() => {
      const overflow = [...document.querySelectorAll('main *, header *, footer *')].flatMap(el => {
        const style = getComputedStyle(el)
        if (style.display === 'none' || style.visibility === 'hidden' || style.position === 'absolute' || style.position === 'fixed' || style.pointerEvents === 'none') return []
        const box = el.getBoundingClientRect()
        if (!box.width || !box.height) return []
        return box.right > innerWidth + 1 || box.left < -1
          ? [{ tag: el.tagName, text: el.textContent.trim().slice(0, 70), left: box.left, right: box.right }] : []
      })
      return { viewport: innerWidth, scroll: document.documentElement.scrollWidth, overflow }
    })
    checks.push({ width, ...geometry })
    assert.equal(geometry.scroll, width, `Overflow horizontal en ${width}: ${geometry.scroll}`)
    assert.equal(geometry.overflow.length, 0, `Elementos desbordados en ${width}: ${JSON.stringify(geometry.overflow)}`)
    if (width < 1280) {
      const menu = page.locator('.menu-toggle')
      await menu.click()
      assert.equal(await menu.getAttribute('aria-expanded'), 'true')
      await page.keyboard.press('Escape')
      assert.equal(await menu.getAttribute('aria-expanded'), 'false')
      assert(await menu.evaluate(el => el === document.activeElement))
      await menu.click()
      await page.getByRole('navigation', { name: 'Navegación móvil' }).getByRole('link', { name: 'Sistema de reservas de canchas', exact: true }).click()
      assert.equal(await menu.getAttribute('aria-expanded'), 'false')
      assert.equal(new URL(page.url()).hash, '#megaestadio')
      await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }))
    } else {
      assert(await page.getByRole('navigation', { name: 'Navegación principal', exact: true }).isVisible())
    }
    if (capture) {
      await page.screenshot({ path: fileURLToPath(new URL(`width-${width}.png`, output)), fullPage: true })
      if (width === 1280) await page.screenshot({ path: fileURLToPath(new URL('desktop-reference.png', output)) })
      if (width === 390 || width === 1280) {
        for (const section of ['hero', 'servicios', 'megaestadio', 'proyectos', 'proceso', 'sobre-mi', 'contacto']) {
          await page.locator(`#${section}`).screenshot({
            path: fileURLToPath(new URL(`${width}-${section}.png`, output)),
            style: 'header { visibility: hidden !important; } .skip-link { visibility: hidden !important; }',
          })
        }
        await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }))
        if (width === 390) await page.screenshot({ path: fileURLToPath(new URL('mobile-viewport.png', output)) })
      }
    }
    console.log(`Viewport ${width}: sin overflow; navegación correcta`)
  }

  await page.getByRole('button', { name: 'Copiar email' }).click()
  await page.getByRole('status').filter({ hasText: 'Email copiado' }).waitFor()
  assert.equal(await page.evaluate(() => navigator.clipboard.readText()), 'lautaromendezportela@gmail.com')
  await page.waitForFunction(() => document.querySelector('[role="status"]').textContent === '')
  await page.evaluate(() => { navigator.clipboard.writeText = () => Promise.reject(new Error('Denied')) })
  await page.getByRole('button', { name: 'Copiar email' }).click()
  await page.getByRole('status').filter({ hasText: 'No se pudo copiar' }).waitFor()
  checks.push({ check: 'Clipboard: éxito, duración y recuperación ante permiso denegado', pass: true })

  const semantics = await page.evaluate(() => ({
    h1: document.querySelectorAll('h1').length,
    sections: document.querySelectorAll('main section[aria-labelledby]').length,
    externalLinks: [...document.querySelectorAll('a[href^="https://"]')].every(a => a.target === '_blank' && a.rel.includes('noopener') && a.rel.includes('noreferrer')),
    anchors: [...document.querySelectorAll('a[href^="#"]')].every(a => document.getElementById(a.hash.slice(1))),
    footerYear: document.querySelector('footer').textContent.includes(String(new Date().getFullYear())),
    noHiddenReveals: [...document.querySelectorAll('.reveal')].every(el => getComputedStyle(el).opacity === '1'),
    spotlightHidden: getComputedStyle(document.getElementById('cursor-spotlight')).display === 'none',
    noMotion: [...document.querySelectorAll('.float-badge-1, .radar-ring, .shimmer-underline')].every(el => parseFloat(getComputedStyle(el).animationDuration) < .001),
  }))
  assert.equal(semantics.h1, 1)
  assert.equal(semantics.sections, 7)
  assert(Object.entries(semantics).filter(([key]) => !['h1', 'sections'].includes(key)).every(([, value]) => value))
  checks.push({ check: 'Semántica, enlaces, año y prefers-reduced-motion', ...semantics })

  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto(origin)
  await page.keyboard.press('Tab')
  assert.equal(await page.locator(':focus').textContent(), 'Saltar al contenido')
  const menu = page.locator('.menu-toggle')
  await menu.focus()
  await page.keyboard.press('Enter')
  assert.equal(await menu.getAttribute('aria-expanded'), 'true')
  await page.keyboard.press('Tab')
  assert.equal(await page.locator(':focus').textContent(), 'Inicio')
  if (capture) await page.screenshot({ path: fileURLToPath(new URL('mobile-menu.png', output)) })
  await page.keyboard.press('Escape')
  checks.push({ check: 'Skip-link, menú Enter/Tab/Escape y retorno de foco', pass: true })

  const touch = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true })
  const touchPage = await touch.newPage()
  await touchPage.goto(origin)
  const touchState = await touchPage.evaluate(() => ({ precise: matchMedia('(pointer: fine)').matches, spotlight: getComputedStyle(document.getElementById('cursor-spotlight')).display }))
  assert.equal(touchState.precise, false)
  assert.equal(touchState.spotlight, 'none')
  checks.push({ check: 'Spotlight desactivado en dispositivos touch', pass: true })
  await touch.close()

  const animated = await browser.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: 'no-preference' })
  const animatedPage = await animated.newPage()
  await animatedPage.goto(origin)
  await animatedPage.mouse.move(300, 220)
  await animatedPage.waitForFunction(() => document.getElementById('cursor-spotlight').style.opacity === '1')
  await animatedPage.locator('#sobre-mi').scrollIntoViewIfNeeded()
  await animatedPage.waitForFunction(() => [...document.querySelectorAll('#sobre-mi .reveal')].every(el => el.classList.contains('active')))
  await animatedPage.emulateMedia({ reducedMotion: 'reduce' })
  await animatedPage.waitForFunction(() => [...document.querySelectorAll('.reveal')].every(el => !el.classList.contains('reveal-pending')))
  checks.push({ check: 'Spotlight mouse, reveal en scroll y cambio dinámico de reduced-motion', pass: true })
  await animated.close()

  if (capture) {
    await page.setViewportSize({ width: 1200, height: 630 })
    await page.goto(origin)
    await page.evaluate(() => document.fonts.ready)
    const svg = await readFile(new URL('../public/social-preview.svg', import.meta.url), 'utf8')
    await page.evaluate(svgMarkup => { document.body.innerHTML = svgMarkup; document.body.style.margin = '0' }, svg)
    await page.screenshot({ path: fileURLToPath(new URL('../public/social-preview.png', import.meta.url)) })
  }
  assert.equal(errors.length, 0, `Errores del navegador: ${errors.join('\n')}`)
  await writeFile(new URL('report.json', output), JSON.stringify({ origin, checks, errors }, null, 2))
  console.log(JSON.stringify({ result: 'PASS', checks: checks.length, widths: 8, errors }, null, 2))
} finally {
  await browser.close()
}
