<script setup lang="ts">
import MaterialIcon from './MaterialIcon.vue'
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
const menuOpen = ref(false)
const toggle = ref<HTMLButtonElement | null>(null)
const header = ref<HTMLElement | null>(null)
const navigation = [
  { href: '#hero', label: 'Inicio' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#sistema-reservas', label: 'Reservas de Canchas' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#proceso', label: 'Cómo trabajo' },
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#contacto', label: 'Contacto' },
]
function closeMenu(restoreFocus = false) {
  menuOpen.value = false
  if (restoreFocus) void nextTick(() => toggle.value?.focus({ preventScroll: true }))
}
function onFocusOut(event: FocusEvent) {
  if (event.relatedTarget instanceof Node && !header.value?.contains(event.relatedTarget)) closeMenu()
}
function onEscape(event: KeyboardEvent) {
  if (event.key === 'Escape' && menuOpen.value) closeMenu(true)
}
function onOutside(event: PointerEvent) {
  if (event.target instanceof Node && !header.value?.contains(event.target)) closeMenu()
}
let desktop: MediaQueryList | undefined
const onDesktop = () => { if (desktop?.matches) closeMenu() }
onMounted(() => {
  document.addEventListener('keydown', onEscape)
  document.addEventListener('pointerdown', onOutside, { passive: true })
  desktop = window.matchMedia('(min-width: 1280px)')
  desktop.addEventListener('change', onDesktop)
})
onBeforeUnmount(() => {
  document.removeEventListener('keydown', onEscape)
  document.removeEventListener('pointerdown', onOutside)
  desktop?.removeEventListener('change', onDesktop)
})
</script>

<template>
<header ref="header" @focusout="onFocusOut" class="docked full-width top-0 sticky z-50 bg-[#0c0c14]/85 backdrop-blur-md border-b border-surface-border/60 shadow-lg shadow-black/25">
<div class="max-w-7xl mx-auto px-6 h-16 nav-bar flex items-center justify-between w-full">
<a class="flex items-center gap-2.5 group transition-transform active:scale-[0.98]" href="#hero">
<div class="h-8 w-8 rounded-lg bg-surface-container border border-surface-border flex items-center justify-center text-primary group-hover:border-primary/60 group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(129,140,248,0.35)] transition-all shadow-sm">
<MaterialIcon class="text-lg group-hover:rotate-6 transition-transform" name="devices" />
</div>
<div class="flex flex-col">
<div class="flex items-center gap-1.5">
<span class="font-bold text-sm tracking-tight text-white group-hover:text-primary transition-colors">lautaro.dev</span>
<span class="relative flex h-2 w-2">
<span class="radar-ring"></span>
<span class="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
</span>
</div>
<span class="text-[11px] text-emerald-400 font-medium hidden sm:inline">Disponible para proyectos</span>
</div>
</a>
<nav aria-label="Navegación principal" class="hidden xl:flex items-center space-x-6 text-sm font-medium">
<a class="text-on-surface-variant hover:text-white transition-colors py-1" href="#hero">Inicio</a>
<a class="text-on-surface-variant hover:text-white transition-colors py-1" href="#servicios">Servicios</a>
<a class="text-on-surface-variant hover:text-white transition-colors py-1" href="#sistema-reservas">Reservas de Canchas</a>
<a class="text-on-surface-variant hover:text-white transition-colors py-1" href="#proyectos">Proyectos</a>
<a class="text-on-surface-variant hover:text-white transition-colors py-1" href="#proceso">Cómo trabajo</a>
<a class="text-on-surface-variant hover:text-white transition-colors py-1" href="#sobre-mi">Sobre mí</a>
<a class="text-on-surface-variant hover:text-white transition-colors py-1" href="#contacto">Contacto</a>
</nav>
<div class="flex items-center gap-3">
<div class="hidden xl:flex items-center gap-1 border-r border-surface-border/60 pr-3 mr-1">
<a class="p-2 text-on-surface-variant hover:text-white hover:bg-surface-container rounded-lg transition-all" href="https://github.com/Lautaro-Mendez-Portela" rel="noopener noreferrer" target="_blank" title="GitHub" aria-label="GitHub">
<MaterialIcon class="text-lg" name="code" />
</a>
<a class="p-2 text-on-surface-variant hover:text-white hover:bg-surface-container rounded-lg transition-all" href="https://www.linkedin.com/in/lautaro-mendez-portela-6374432a8/" rel="noopener noreferrer" target="_blank" title="LinkedIn" aria-label="LinkedIn">
<MaterialIcon class="text-lg" name="badge" />
</a>
</div>
<a class="inline-flex items-center gap-2 px-4 py-2 min-h-[44px] rounded-lg bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-500 shadow-md shadow-emerald-700/25 hover:-translate-y-0.5 active:scale-[0.98] transition-all" aria-label="Hablar por WhatsApp" href="https://wa.me/5492213524236?text=Hola%20Lautaro,%20tengo%20una%20idea%20para%20mi%20negocio" rel="noopener noreferrer" target="_blank">
<MaterialIcon class="text-base" name="chat" />
<span class="hidden sm:inline">WhatsApp</span>
</a>
<button ref="toggle" type="button" class="xl:hidden menu-toggle" :aria-expanded="menuOpen" aria-controls="mobile-navigation" :aria-label="menuOpen ? 'Cerrar menú' : 'Abrir menú'" @click="menuOpen = !menuOpen"><MaterialIcon class="" :name="menuOpen ? 'close' : 'menu'" /></button>
</div>
</div>
<nav v-if="menuOpen" id="mobile-navigation" class="mobile-navigation xl:hidden" aria-label="Navegación móvil">
<a v-for="link in navigation" :key="link.href" :href="link.href" @click="closeMenu(true)">{{ link.label }}</a>
<div class="mobile-socials"><a href="https://github.com/Lautaro-Mendez-Portela" target="_blank" rel="noopener noreferrer">GitHub</a><a href="https://www.linkedin.com/in/lautaro-mendez-portela-6374432a8/" target="_blank" rel="noopener noreferrer">LinkedIn</a></div>
</nav>
</header>
</template>
