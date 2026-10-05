import { readFileSync, writeFileSync, readdirSync } from 'node:fs'
const components = readdirSync('src/components').filter(name => name.endsWith('.vue'))
const icons = new Set(['menu', 'close', 'check', 'content_copy'])
for (const file of components) {
  let html = readFileSync(`src/components/${file}`, 'utf8')
  for (const match of html.matchAll(/<MaterialIcon[^>]*?\sname="([a-z_0-9]+)"/g)) icons.add(match[1])
  html = html.replace(/<span aria-hidden="true" class="(material-symbols-outlined[^"]*)"([^>]*)>([^]*?)<\/span>/g, (_, classes, attrs, content) => {
    const trimmed = content.trim()
    const binding = trimmed.startsWith('{{')
      ? `:name="${trimmed.slice(2, -2).trim()}"`
      : `name="${trimmed}"`
    if (!trimmed.startsWith('{{')) icons.add(trimmed)
    return `<MaterialIcon class="${classes.replace('material-symbols-outlined', '').trim()}" ${binding} />`
  })
  if (html.includes('<MaterialIcon') && !html.includes("import MaterialIcon from")) {
    if (html.startsWith('<script setup')) html = html.replace(/(<script setup lang="ts">\n)/, `$1import MaterialIcon from './MaterialIcon.vue'\n`)
    else html = `<script setup lang="ts">\nimport MaterialIcon from './MaterialIcon.vue'\n</script>\n\n${html}`
  }
  writeFileSync(`src/components/${file}`, html)
}
const definitions = {}
for (const name of [...icons].sort()) {
  const sourceName = name === 'chat_bubble_outline' ? 'chat_bubble' : name
  const svg = readFileSync(`node_modules/@material-symbols/svg-400/outlined/${sourceName}.svg`, 'utf8')
  definitions[name] = {
    viewBox: svg.match(/viewBox="([^"]+)"/)[1],
    paths: [...svg.matchAll(/<path\b([^]*?)\/>/g)].map(match => ({
      d: match[1].match(/d="([^"]+)"/)[1],
      fillRule: match[1].match(/fill-rule="([^"]+)"/)?.[1] || 'nonzero',
    })),
  }
}
writeFileSync('src/assets/material-icons.ts', `// Original Material Symbols Outlined, weight 400. Apache-2.0; see public/licenses.\n// Only the ${icons.size} symbols used by this portfolio are included.\nexport const materialIcons: Record<string, { viewBox: string; paths: { d: string; fillRule: 'nonzero' | 'evenodd' }[] }> = ${JSON.stringify(definitions, null, 2)}\n`)
