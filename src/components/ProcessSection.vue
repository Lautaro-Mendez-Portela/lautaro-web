<script setup lang="ts">
import MaterialIcon from './MaterialIcon.vue'
</script>

<template>
<section aria-labelledby="proceso-title" class="py-24 max-w-7xl mx-auto px-6 relative" id="proceso">
<div class="max-w-3xl mb-14 reveal">
<div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container border border-surface-border text-indigo-400 mb-3">
<MaterialIcon class="text-base" name="checklist" />
<span class="text-[11px] font-mono uppercase tracking-wider font-semibold">PASO A PASO</span>
</div>
<h2 id="proceso-title" class="text-3xl sm:text-4xl font-bold text-white mb-2 relative inline-block">
  De tu idea a una solución funcionando
  <span class="block h-[2px] w-full my-3 shimmer-underline"></span>
</h2>
<p class="text-base text-on-surface-variant mt-2">
  Un proceso claro, transparente y sin complicaciones técnicas en 4 pasos:
</p>
</div>
<div class="relative my-10 reveal">
<div class="hidden lg:block absolute top-7 left-14 right-14 h-[2px] bg-gradient-to-r from-primary/40 via-secondary/40 to-emerald-400/40 z-0"></div>
<div class="lg:hidden absolute top-7 bottom-7 left-7 w-[2px] bg-gradient-to-b from-primary/40 via-secondary/40 to-emerald-400/40 z-0"></div>
<div class="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-8 relative z-10">
<div class="flex lg:flex-col items-start gap-5 lg:gap-6">
<div class="relative shrink-0">
<div class="w-14 h-14 rounded-2xl bg-surface-container border border-primary/40 flex items-center justify-center shadow-lg ring-4 ring-background">
<span class="font-mono text-2xl font-bold gradient-num">01</span>
</div>
</div>
<div>
<h3 class="text-lg font-bold text-white mb-2">Me contás qué necesitás</h3>
<p class="text-sm text-on-surface-variant leading-relaxed">Hablamos sobre tu negocio, el problema que querés resolver o la idea que tenés.</p>
</div>
</div>
<div class="flex lg:flex-col items-start gap-5 lg:gap-6">
<div class="relative shrink-0">
<div class="w-14 h-14 rounded-2xl bg-surface-container border border-secondary/40 flex items-center justify-center shadow-lg ring-4 ring-background">
<span class="font-mono text-2xl font-bold gradient-num">02</span>
</div>
</div>
<div>
<h3 class="text-lg font-bold text-white mb-2">Definimos la solución</h3>
<p class="text-sm text-on-surface-variant leading-relaxed">Analizo tus necesidades y te propongo una solución clara, tiempos y presupuesto antes de comenzar.</p>
</div>
</div>
<div class="flex lg:flex-col items-start gap-5 lg:gap-6">
<div class="relative shrink-0">
<div class="w-14 h-14 rounded-2xl bg-surface-container border border-primary/40 flex items-center justify-center shadow-lg ring-4 ring-background">
<span class="font-mono text-2xl font-bold gradient-num">03</span>
</div>
</div>
<div>
<h3 class="text-lg font-bold text-white mb-2">Desarrollo el proyecto</h3>
<p class="text-sm text-on-surface-variant leading-relaxed">Diseño y construyo la solución manteniéndote al tanto del avance.</p>
</div>
</div>
<div class="flex lg:flex-col items-start gap-5 lg:gap-6">
<div class="relative shrink-0">
<div class="w-14 h-14 rounded-2xl bg-surface-container border border-emerald-400/40 flex items-center justify-center shadow-lg ring-4 ring-background">
<span class="font-mono text-2xl font-bold gradient-num">04</span>
</div>
</div>
<div>
<h3 class="text-lg font-bold text-white mb-2">Lo ponemos online</h3>
<p class="text-sm text-on-surface-variant leading-relaxed">Publicamos el proyecto, te explico cómo utilizarlo y queda listo para empezar a trabajar.</p>
</div>
</div>
</div>
</div>
<div class="mt-14 p-4 rounded-xl bg-surface-container/60 border border-surface-border/50 text-center text-xs text-gray-400 flex flex-col sm:flex-row items-center justify-center gap-3 reveal">
<span class="">Desarrollo soluciones con tecnologías modernas, seguras y preparadas para crecer:</span>
<span class="font-mono text-gray-300 font-medium tracking-wide">Vue · Node.js · NestJS · PostgreSQL · Docker</span>
</div>
</section>
</template>
