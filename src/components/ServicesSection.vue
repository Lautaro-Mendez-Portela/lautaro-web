<script setup lang="ts">
import MaterialIcon from './MaterialIcon.vue'
</script>

<template>
<section aria-labelledby="servicios-title" class="py-20 bg-surface-dim border-t border-surface-border/60 relative" id="servicios">
<div class="max-w-7xl mx-auto px-6">
<div class="max-w-3xl mb-14 reveal">
<div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container border border-surface-border text-indigo-400 mb-3">
<MaterialIcon class="text-base" name="business_center" />
<span class="text-[11px] font-mono uppercase tracking-wider font-semibold">SERVICIOS PARA TU NEGOCIO</span>
</div>
<h2 id="servicios-title" class="text-3xl sm:text-4xl font-bold text-white mb-2 relative inline-block">
  ¿Qué puedo hacer por tu negocio?
  <span class="block h-[2px] w-full my-3 shimmer-underline"></span>
</h2>
<p class="text-base text-on-surface-variant mt-2">
  Soluciones pensadas para ahorrarte tiempo, mostrarte profesional y hacer crecer tu actividad.
</p>
</div>
<div class="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
<div class="spotlight-card p-7 rounded-2xl bg-surface-container border border-surface-border shadow-sm flex flex-col justify-between hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-500/5 min-h-[300px] duration-200 reveal">
<div>
<div class="flex items-start justify-between gap-4 mb-4">
<div class="h-10 w-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary shrink-0">
<MaterialIcon class="text-xl" name="language" />
</div>
<span class="text-xs px-2.5 py-1 rounded-full bg-surface-container-high border border-surface-border text-gray-300 font-medium">Presencia Digital</span>
</div>
<h3 class="text-xl font-bold text-white mb-2.5">
  Mostrá tu negocio de forma profesional
</h3>
<p class="text-sm text-on-surface-variant leading-relaxed mb-6">
  Tus clientes pueden conocer tus servicios, encontrarte fácilmente y contactarte desde una página moderna adaptada a celulares y computadoras.
</p>
</div>
<div class="pt-5 border-t border-surface-border/60">
<div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs text-gray-300 font-medium">
<div class="flex items-center gap-1.5">
<MaterialIcon class="text-primary text-base" name="check_circle" />
<span class="">Diseño a medida</span>
</div>
<div class="flex items-center gap-1.5">
<MaterialIcon class="text-primary text-base" name="check_circle" />
<span class="">Rápida y clara</span>
</div>
<div class="flex items-center gap-1.5">
<MaterialIcon class="text-emerald-400 text-base" name="chat" />
<span class="">Directo a WhatsApp</span>
</div>
</div>
</div>
</div>
<div class="spotlight-card p-7 rounded-2xl bg-surface-container border border-surface-border shadow-sm flex flex-col justify-between hover:border-indigo-500/40 hover:shadow-xl hover:shadow-secondary/5 min-h-[300px] duration-200 reveal">
<div>
<div class="flex items-start justify-between gap-4 mb-4">
<div class="h-10 w-10 rounded-xl bg-secondary/10 border border-secondary/30 flex items-center justify-center text-secondary shrink-0">
<MaterialIcon class="text-xl" name="shopping_bag" />
</div>
<span class="text-xs px-2.5 py-1 rounded-full bg-surface-container-high border border-surface-border text-gray-300 font-medium">Venta online</span>
</div>
<h3 class="text-xl font-bold text-white mb-2.5">
  Vendé tus productos online
</h3>
<p class="text-sm text-on-surface-variant leading-relaxed mb-6">
  Mostrá tu catálogo, recibí pedidos y permití que tus clientes compren directamente desde tu página las 24 horas sin depender de responder mensajes uno por uno.
</p>
</div>
<div class="pt-5 border-t border-surface-border/60">
<div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs text-gray-300 font-medium">
<div class="flex items-center gap-1.5">
<MaterialIcon class="text-secondary text-base" name="check_circle" />
<span class="">Catálogo fácil</span>
</div>
<div class="flex items-center gap-1.5">
<MaterialIcon class="text-secondary text-base" name="check_circle" />
<span class="">Cobros seguros</span>
</div>
<div class="flex items-center gap-1.5">
<MaterialIcon class="text-secondary text-base" name="notifications" />
<span class="">Aviso al instante</span>
</div>
</div>
</div>
</div>
<div class="spotlight-card p-7 rounded-2xl bg-surface-container border border-surface-border shadow-sm flex flex-col justify-between hover:border-indigo-500/40 hover:shadow-xl hover:shadow-emerald-500/5 min-h-[300px] duration-200 reveal">
<div>
<div class="flex items-start justify-between gap-4 mb-4">
<div class="h-10 w-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
<MaterialIcon class="text-xl" name="event_available" />
</div>
<span class="text-xs px-2.5 py-1 rounded-full bg-surface-container-high border border-surface-border text-gray-300 font-medium">Sin Fricción</span>
</div>
<h3 class="text-xl font-bold text-white mb-2.5">
  Dejá de organizar turnos por mensajes
</h3>
<p class="text-sm text-on-surface-variant leading-relaxed mb-6">
  Tus clientes pueden consultar horarios disponibles, reservar y recibir confirmaciones sin depender de intercambiar diez mensajes de WhatsApp para coordinar un horario.
</p>
</div>
<div class="pt-5 border-t border-surface-border/60">
<div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs text-gray-300 font-medium">
<div class="flex items-center gap-1.5">
<MaterialIcon class="text-emerald-400 text-base" name="check_circle" />
<span class="">Turnero en vivo</span>
</div>
<div class="flex items-center gap-1.5">
<MaterialIcon class="text-emerald-400 text-base" name="check_circle" />
<span class="">Cobro de señas</span>
</div>
<div class="flex items-center gap-1.5">
<MaterialIcon class="text-emerald-400 text-base" name="chat_bubble_outline" />
<span class="">Menos mensajes</span>
</div>
</div>
</div>
</div>
<div class="spotlight-card p-7 rounded-2xl bg-surface-container border border-surface-border shadow-sm flex flex-col justify-between hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-500/5 min-h-[300px] duration-200 reveal">
<div>
<div class="flex items-start justify-between gap-4 mb-4">
<div class="h-10 w-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
<MaterialIcon class="text-xl" name="dashboard_customize" />
</div>
<span class="text-xs px-2.5 py-1 rounded-full bg-surface-container-high border border-surface-border text-gray-300 font-medium">Ahorro de Tiempo</span>
</div>
<h3 class="text-xl font-bold text-white mb-2.5">
  Organizá mejor tu negocio
</h3>
<p class="text-sm text-on-surface-variant leading-relaxed mb-6">
  Reemplazá planillas de cálculo, anotaciones en papel y procesos manuales por una herramienta creada específicamente para la forma real en que funciona tu negocio.
</p>
</div>
<div class="pt-5 border-t border-surface-border/60">
<div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs text-gray-300 font-medium">
<div class="flex items-center gap-1.5">
<MaterialIcon class="text-indigo-400 text-base" name="check_circle" />
<span class="">Clientes y cobros</span>
</div>
<div class="flex items-center gap-1.5">
<MaterialIcon class="text-indigo-400 text-base" name="check_circle" />
<span class="">Panel centralizado</span>
</div>
<div class="flex items-center gap-1.5">
<MaterialIcon class="text-indigo-400 text-base" name="folder_shared" />
<span class="">Todo ordenado</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</template>
