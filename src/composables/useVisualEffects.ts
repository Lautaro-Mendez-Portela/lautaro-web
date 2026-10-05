import { onBeforeUnmount, onMounted } from 'vue'
import type { Ref } from 'vue'

export function useVisualEffects(root: Ref<HTMLElement | null>) {
  let teardown = () => {}

  onMounted(() => {
    const host = root.value
    if (!host) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    const precise = window.matchMedia('(hover: hover) and (pointer: fine)')
    const spotlight = host.querySelector<HTMLElement>('#cursor-spotlight')
    const reveals = [...host.querySelectorAll<HTMLElement>('.reveal')]
    let observer: IntersectionObserver | undefined
    let frame = 0
    let pointerCleanup = () => {}

    function configure() {
      observer?.disconnect()
      pointerCleanup()
      cancelAnimationFrame(frame)
      frame = 0
      if (spotlight) spotlight.style.opacity = '0'
      if (!reduced.matches && 'IntersectionObserver' in window) {
        observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active')
              entry.target.classList.remove('reveal-pending')
              observer?.unobserve(entry.target)
            }
          })
        }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' })
        reveals.forEach(el => {
          if (el.getBoundingClientRect().top < window.innerHeight || el.classList.contains('active')) {
            el.classList.add('active')
            el.classList.remove('reveal-pending')
          } else {
            el.classList.add('reveal-pending')
            observer?.observe(el)
          }
        })
      } else {
        reveals.forEach(el => { el.classList.add('active'); el.classList.remove('reveal-pending') })
      }
      if (reduced.matches || !precise.matches || !spotlight || !host) return

      let targetX = window.innerWidth / 2
      let targetY = window.innerHeight / 2
      let currentX = targetX
      let currentY = targetY
      let visible = false
      let card: HTMLElement | null = null
      const update = () => {
        currentX += (targetX - currentX) * 0.12
        currentY += (targetY - currentY) * 0.12
        spotlight.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`
        if (card) {
          const rect = card.getBoundingClientRect()
          card.style.setProperty('--card-x', `${targetX - rect.left}px`)
          card.style.setProperty('--card-y', `${targetY - rect.top}px`)
        }
        frame = visible && Math.hypot(targetX - currentX, targetY - currentY) > 0.1
          ? requestAnimationFrame(update) : 0
      }
      const move = (event: PointerEvent) => {
        if (event.pointerType !== 'mouse') return
        targetX = event.clientX
        targetY = event.clientY
        visible = true
        spotlight.style.opacity = '1'
        card = event.target instanceof Element ? event.target.closest<HTMLElement>('.spotlight-card') : null
        if (!frame) frame = requestAnimationFrame(update)
      }
      const leave = () => {
        visible = false
        card = null
        spotlight.style.opacity = '0'
        cancelAnimationFrame(frame)
        frame = 0
      }
      host.addEventListener('pointermove', move, { passive: true })
      document.documentElement.addEventListener('pointerleave', leave)
      window.addEventListener('blur', leave)
      pointerCleanup = () => {
        host.removeEventListener('pointermove', move)
        document.documentElement.removeEventListener('pointerleave', leave)
        window.removeEventListener('blur', leave)
      }
    }
    configure()
    reduced.addEventListener('change', configure)
    precise.addEventListener('change', configure)
    teardown = () => {
      observer?.disconnect()
      pointerCleanup()
      cancelAnimationFrame(frame)
      reduced.removeEventListener('change', configure)
      precise.removeEventListener('change', configure)
    }
  })
  onBeforeUnmount(() => teardown())
}
