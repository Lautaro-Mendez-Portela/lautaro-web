<script setup lang="ts">
import MaterialIcon from './MaterialIcon.vue'
</script>

<template>
<section aria-labelledby="sobre-mi-title" class="py-20 bg-surface-dim border-t border-surface-border/60 relative" id="sobre-mi">
<div class="max-w-7xl mx-auto px-6">
<div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
<div class="lg:col-span-7 reveal">
<div class="mb-3">
<div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container border border-surface-border text-indigo-400">
<MaterialIcon class="text-base" name="person" />
<span class="text-[11px] font-mono uppercase tracking-wider font-semibold">PERFIL Y ENFOQUE</span>
</div>
</div>
<h2 id="sobre-mi-title" class="text-3xl sm:text-4xl font-bold text-white mb-2 relative inline-block">
  Detrás de cada proyecto
  <span class="block h-[2px] w-full my-3 shimmer-underline"></span>
</h2>
<p class="text-lg font-medium text-emerald-400 mb-5">
  “Me gusta transformar ideas y problemas reales de un negocio en herramientas simples de usar.”
</p>
<div class="space-y-4 text-base text-on-surface-variant leading-relaxed">
<p class="">Soy <strong class="text-white">Lautaro Méndez Portela</strong>, desarrollador web de La Plata y estudiante de Licenciatura en Sistemas en la Universidad Nacional de La Plata.</p>
<p class="">Busco que cada proyecto termine siendo una herramienta que realmente simplifique el día a día del negocio.</p>
<p class="">Me ocupo de todo el proceso: desde entender lo que necesitás hasta dejar la solución funcionando online.</p>
<p class="">Trabajo de forma directa y clara, manteniéndote al tanto durante todo el desarrollo.</p>
</div>
</div>
<div class="lg:col-span-5 space-y-4 reveal">
<div class="spotlight-card p-4 rounded-xl bg-surface-container border border-surface-border shadow-sm flex items-start gap-3.5 hover:border-primary/40 duration-200">
<div class="h-10 w-10 rounded-lg bg-surface-container-high border border-surface-border flex items-center justify-center text-primary shrink-0">
<MaterialIcon class="text-xl" name="school" />
</div>
<div>
<h3 class="text-sm font-bold text-white">Universidad Nacional de La Plata</h3>
<p class="text-xs text-on-surface-variant">Licenciatura en Sistemas · Estudiante avanzado</p>
</div>
</div>
<div class="spotlight-card p-4 rounded-xl bg-surface-container border border-surface-border shadow-sm flex items-start gap-3.5 hover:border-emerald-400/40 duration-200">
<div class="h-10 w-10 rounded-lg bg-surface-container-high border border-surface-border flex items-center justify-center text-emerald-400 shrink-0">
<MaterialIcon class="text-xl" name="translate" />
</div>
<div>
<h3 class="text-sm font-bold text-white">Inglés Avanzado</h3>
<p class="text-xs text-on-surface-variant">Para documentación técnica y proyectos internacionales</p>
</div>
</div>
<div class="spotlight-card p-4 rounded-xl bg-surface-container border border-surface-border shadow-sm flex items-start gap-3.5 hover:border-secondary/40 duration-200">
<div class="h-10 w-10 rounded-lg bg-surface-container-high border border-surface-border flex items-center justify-center text-secondary shrink-0">
<MaterialIcon class="text-xl" name="location_on" />
</div>
<div>
<h3 class="text-sm font-bold text-white">La Plata, Buenos Aires, Argentina</h3>
<p class="text-xs text-on-surface-variant">Disponible para proyectos locales y remotos en todo el país</p>
</div>
</div>
</div>
</div>
</div>
</section>
</template>
