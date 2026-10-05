<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
<footer class="docked full-width bottom bg-[#09090e] border-t border-surface-border/60 relative z-10">
<div class="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6 w-full">
<div class="flex flex-col items-center md:items-start gap-1">
<div class="flex items-center gap-2">
<span class="text-base font-bold text-white">lautaro.dev</span>
<span class="text-xs px-2 py-0.5 rounded bg-surface-container border border-surface-border text-emerald-400 font-mono flex items-center gap-1">
<span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> listo para tu proyecto
</span>
</div>
<p class="text-xs text-on-surface-variant">
  © {{ currentYear }} Lautaro Méndez Portela · Páginas web y sistemas a medida para negocios.
</p>
</div>
<div class="flex flex-wrap justify-center items-center gap-5 text-xs text-on-surface-variant">
<a class="hover:text-primary transition-colors py-1" href="#hero">Inicio</a>
<a class="hover:text-primary transition-colors py-1" href="#servicios">Servicios</a>
<a class="hover:text-primary transition-colors py-1" href="#sistema-reservas">Reservas de Canchas</a>
<a class="hover:text-primary transition-colors py-1" href="#proyectos">Proyectos</a>
<a class="hover:text-primary transition-colors py-1" href="#proceso">Cómo trabajo</a>
<a class="hover:text-primary transition-colors py-1" href="#sobre-mi">Sobre mí</a>
<a class="hover:text-primary transition-colors py-1" href="#contacto">Contacto</a>
</div>
</div>
</footer>
</template>
