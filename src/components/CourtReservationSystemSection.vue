<script setup lang="ts">
import MaterialIcon from './MaterialIcon.vue'
</script>

<template>
<section aria-labelledby="sistema-reservas-title" class="py-24 max-w-7xl mx-auto px-6 relative" id="sistema-reservas">
<div class="spotlight-card rounded-3xl bg-gradient-to-b from-[#14141f] via-[#111119] to-[#0d0d14] border border-surface-border p-8 md:p-12 shadow-2xl relative overflow-hidden reveal">
<div class="absolute -right-24 -top-24 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
<div class="absolute -left-24 -bottom-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>
<div class="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-8 border-b border-surface-border/60">
<div>
<div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container border border-surface-border text-emerald-400 mb-3">
<span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
<span class="text-[11px] font-mono uppercase tracking-wider font-semibold">PROYECTO DESTACADO</span>
</div>
<h2 id="sistema-reservas-title" class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
  Sistema de Reservas para Canchas
</h2>
<p class="text-lg font-medium text-secondary mt-1">
  Reservas online y panel central para el negocio
</p>
</div>
<div class="flex flex-wrap items-center gap-2.5">
<a class="inline-flex items-center gap-2 px-5 py-3 min-h-[44px] rounded-xl bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-500 shadow-md shadow-emerald-700/25 hover:-translate-y-0.5 active:scale-[0.98] transition-all" href="https://wa.me/5492213524236?text=Hola%20Lautaro,%20me%20interesa%20un%20sistema%20de%20reservas%20para%20canchas" rel="noopener noreferrer" target="_blank">
<MaterialIcon class="text-base" name="chat" />
  Hablemos de mi proyecto
</a>
</div>
</div>
<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
<div class="p-6 rounded-2xl bg-surface-container/70 border border-surface-border flex flex-col justify-between">
<div>
<div class="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-rose-500/10 border border-rose-500/25 text-rose-400 mb-3">
<MaterialIcon class="text-sm" name="info" />
<span class="text-[10px] font-mono uppercase tracking-wider font-semibold">EL PROBLEMA QUE RESUELVE</span>
</div>
<h3 class="text-lg font-bold text-white mb-3">Pérdida de tiempo y desorganización en la atención</h3>
<p class="text-sm text-on-surface-variant leading-relaxed">Gestionar reservas, disponibilidad, señas, comprobantes y clientes manualmente puede consumir mucho tiempo y generar desorganización.</p>
</div>
<div class="mt-4 pt-4 border-t border-surface-border/50 text-xs text-rose-300 flex items-center gap-2">
<MaterialIcon class="text-base" name="schedule" />
<span class="">Horas invertidas en tareas repetitivas</span>
</div>
</div>
<div class="p-6 rounded-2xl bg-surface-container/70 border border-emerald-500/30 flex flex-col justify-between">
<div>
<div class="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 mb-3">
<MaterialIcon class="text-sm" name="check_circle" />
<span class="text-[10px] font-mono uppercase tracking-wider font-semibold">LA SOLUCIÓN IMPLEMENTADA</span>
</div>
<h3 class="text-lg font-bold text-white mb-3">Reservas online y panel central para el negocio</h3>
<p class="text-sm text-on-surface-variant leading-relaxed">Un sistema centralizado donde los clientes pueden consultar disponibilidad y solicitar reservas, mientras el negocio gestiona turnos, clientes, pagos y comprobantes desde un único lugar.</p>
</div>
<div class="mt-4 pt-4 border-t border-emerald-500/20 text-xs text-emerald-300 flex items-center gap-2">
<MaterialIcon class="text-base" name="verified" />
<span class="">Panel integral con comprobantes y estados</span>
</div>
</div>
</div>
<div class="relative rounded-2xl bg-[#09090f] border border-surface-border p-4 sm:p-8 overflow-hidden shadow-2xl mb-10">
<div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
<div class="lg:col-span-8 rounded-xl booking-desktop bg-[#111119] border border-surface-border/80 shadow-lg overflow-hidden">
<div class="px-4 py-2.5 bg-[#171722] border-b border-surface-border/80 flex items-center justify-between">
<div class="flex items-center gap-2">
<span class="w-2.5 h-2.5 rounded-full bg-rose-500/70 inline-block"></span>
<span class="w-2.5 h-2.5 rounded-full bg-amber-500/70 inline-block"></span>
<span class="w-2.5 h-2.5 rounded-full bg-emerald-500/70 inline-block"></span>
<span class="ml-2 font-mono text-[11px] text-gray-400">admin.canchas.com/reservas</span>
</div>
<span class="text-[11px] text-gray-400">Viernes, 24 de Octubre</span>
</div>
<div class="p-4 sm:p-5 text-xs space-y-3">
<div class="flex items-center justify-between pb-3 border-b border-surface-border/50 text-[11px]">
<div class="flex items-center gap-4">
<span class="text-white font-semibold">Grilla de canchas</span>
<span class="text-gray-400 hidden sm:inline">Estado de reservas del día</span>
</div>
<span class="px-2 py-0.5 rounded bg-surface-container text-gray-300 font-medium font-mono text-[10px]">Panel administrativo</span>
</div>
<div class="p-3 rounded-lg bg-surface-container flex flex-col sm:flex-row sm:items-center justify-between gap-2 border border-surface-border/60">
<div>
<div class="font-bold text-white text-xs">Cancha 1 (Fútbol 7)</div>
<div class="text-[11px] text-gray-400">20:00 hs · Seña: $10.000 · Comprobante cargado</div>
</div>
<div class="flex items-center gap-2">
<span class="px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-semibold border border-emerald-500/30">Reserva confirmada</span>
</div>
</div>
<div class="p-3 rounded-lg bg-surface-container/50 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border border-dashed border-surface-border">
<div>
<div class="font-bold text-gray-300 text-xs">Cancha 2 (Fútbol 5)</div>
<div class="text-[11px] text-emerald-400 font-medium">21:00 hs · Disponible para reserva</div>
</div>
<span class="px-2 py-0.5 rounded bg-surface-container-high text-gray-300 text-[10px]">Disponible</span>
</div>
</div>
</div>
<div class="lg:col-span-4 flex justify-center">
<div class="w-full max-w-[280px] rounded-3xl bg-[#13131c] border-2 border-surface-border p-3 shadow-2xl relative">
<div class="w-24 h-4 bg-[#0a0a0f] rounded-full mx-auto mb-3"></div>
<div class="space-y-3 text-left">
<div class="text-center pb-2 border-b border-surface-border/60">
<div class="text-[10px] text-emerald-400 font-semibold tracking-wider uppercase">Estado de reserva</div>
<div class="text-xs font-bold text-white">Reserva confirmada</div>
</div>
<div class="p-2.5 rounded-xl bg-surface-container border border-surface-border/70 space-y-1.5 text-[11px]">
<div class="text-gray-400 text-[10px]">Detalle:</div>
<div class="text-white font-bold">Cancha 1 (Fútbol 7) · Viernes 20:00 hs</div>
<div class="text-gray-300 text-[10px]">Sistema de Reservas para Canchas</div>
<div class="text-emerald-400 font-mono text-[10px] font-semibold pt-1 border-t border-surface-border/50">Seña recibida: $10.000 · Comprobante verificado</div>
</div>
<div class="p-2 rounded-lg bg-surface-container-high border border-surface-border/60 flex items-center gap-2">
<MaterialIcon class="text-primary text-sm" name="mark_email_read" />
<span class="text-[10px] text-gray-200 font-medium">Confirmación enviada por email</span>
</div>
<div class="text-center pt-1">
<span class="text-[10px] text-gray-400">Gestión directa de reservas</span>
</div>
</div>
<div class="w-20 h-1 bg-gray-600 rounded-full mx-auto mt-4"></div>
</div>
</div>
</div>
</div>
<div class="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-surface-border/60">
<div class="flex flex-wrap gap-2">
<span class="px-3 py-1 rounded-lg bg-surface-container border border-surface-border text-xs text-gray-300">Reservas en tiempo real</span>
<span class="px-3 py-1 rounded-lg bg-surface-container border border-surface-border text-xs text-gray-300">Control de señas y comprobantes</span>
<span class="px-3 py-1 rounded-lg bg-surface-container border border-surface-border text-xs text-gray-300">Panel administrativo</span>
<span class="px-3 py-1 rounded-lg bg-surface-container border border-surface-border text-xs text-gray-300">Base de clientes</span>
<span class="px-3 py-1 rounded-lg bg-surface-container border border-surface-border text-xs text-gray-300">Adaptado a celulares</span>
</div>
<span class="text-xs text-gray-400 font-mono">Vue · Node.js · PostgreSQL</span>
</div>
</div>
</section>
</template>
