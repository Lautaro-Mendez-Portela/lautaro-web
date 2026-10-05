<script setup lang="ts">
import MaterialIcon from './MaterialIcon.vue'
</script>

<template>
<section aria-labelledby="hero-title" class="max-w-7xl mx-auto px-6 pt-12 pb-20 md:pt-16 md:pb-24" id="hero">
<div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
<div class="lg:col-span-6 reveal">
<div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container border border-surface-border shadow-sm mb-6 hover:border-emerald-500/50 transition-colors">
<span class="relative flex h-2 w-2 items-center justify-center">
<span class="radar-ring"></span>
<span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
</span>
<span class="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-semibold">DISEÑO Y DESARROLLO WEB · LA PLATA</span>
</div>
<h1 id="hero-title" class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
  Páginas web y sistemas a medida para tu negocio
</h1>
<p class="text-base sm:text-lg text-on-surface-variant max-w-xl mb-8 leading-relaxed">
  Creo páginas web y sistemas modernos, fáciles de usar y adaptados a las necesidades de cada negocio. Desde mostrar tus servicios hasta gestionar reservas, ventas, cobros y clientes sin complicaciones.
</p>
<div class="flex flex-wrap items-center gap-3.5 mb-10">
<a class="inline-flex items-center gap-2 px-6 py-3.5 min-h-[44px] rounded-xl bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-500 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-600/25 active:scale-[0.98] transition-all" href="https://wa.me/5492213524236?text=Hola%20Lautaro,%20tengo%20una%20idea%20para%20mi%20negocio" rel="noopener noreferrer" target="_blank">
<MaterialIcon class="text-lg" name="forum" />
  Contame tu idea
</a>
<a class="inline-flex items-center gap-2 px-5 py-3.5 min-h-[44px] rounded-xl bg-surface-container border border-surface-border text-white text-sm font-medium hover:bg-surface-container-high hover:border-primary/50 hover:-translate-y-0.5 active:scale-[0.98] transition-all" href="#sistema-reservas">
<span class="">Ver proyectos</span>
<MaterialIcon class="text-lg text-primary" name="arrow_downward" />
</a>
</div>
<div class="grid grid-cols-2 sm:grid-cols-2 gap-3.5 pt-6 border-t border-surface-border/60 text-xs sm:text-sm text-gray-300">
<div class="flex items-center gap-2.5">
<div class="w-5 h-5 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
<MaterialIcon class="text-xs" name="check" />
</div>
<span class="">Reservas y ventas online</span>
</div>
<div class="flex items-center gap-2.5">
<div class="w-5 h-5 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
<MaterialIcon class="text-xs" name="check" />
</div>
<span class="">Disponible desde celular y PC</span>
</div>
<div class="flex items-center gap-2.5">
<div class="w-5 h-5 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
<MaterialIcon class="text-xs" name="check" />
</div>
<span class="">Menos tareas manuales</span>
</div>
<div class="flex items-center gap-2.5">
<div class="w-5 h-5 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
<MaterialIcon class="text-xs" name="check" />
</div>
<span class="">Trato directo y personal</span>
</div>
</div>
</div>
<div class="lg:col-span-6 relative reveal hero-dashboard">
<div class="absolute -inset-4 bg-gradient-to-tr from-primary/15 via-indigo-500/10 to-transparent rounded-3xl blur-2xl pointer-events-none -z-10"></div>
<div class="float-badge-1 hidden sm:flex absolute -top-4 -left-6 z-20 items-center gap-3 p-3 rounded-xl bg-surface-container/95 border border-surface-border shadow-xl backdrop-blur-md"><div class="h-9 w-9 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
<MaterialIcon class="text-lg" name="payments" />
</div>
<div>
<div class="text-[11px] text-gray-400">Nuevo cobro registrado</div>
<div class="text-xs font-bold text-white">Pago registrado correctamente</div>
</div></div>
<div class="float-badge-2 hidden sm:flex absolute -bottom-5 -right-3 z-20 items-center gap-3 p-3 rounded-xl bg-surface-container/95 border border-surface-border shadow-xl backdrop-blur-md">
<div class="h-9 w-9 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center text-primary">
<MaterialIcon class="text-lg" name="mark_email_read" />
</div>
<div>
<div class="text-[11px] text-gray-400">Confirmación emitida</div>
<div class="text-xs font-bold text-white">Gestión centralizada de reservas</div>
</div>
</div>
<div class="spotlight-card rounded-2xl bg-[#0f0f17] border border-surface-border shadow-2xl relative overflow-hidden group hover:border-indigo-500/40 transition-all duration-200">
<div class="px-4 py-3 bg-[#14141f] border-b border-surface-border/80 flex items-center justify-between">
<div class="flex items-center gap-2">
<div class="flex items-center gap-1.5">
<span class="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
<span class="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
<span class="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
</div>
<span class="ml-2 text-xs text-gray-300 font-medium flex items-center gap-1.5">
<MaterialIcon class="text-sm text-primary" name="storefront" />
<span class="">Panel de Negocio</span> · Resumen de Hoy (Demo)
</span>
</div>
<span class="px-2 py-0.5 rounded text-[11px] font-mono bg-emerald-950/60 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
<span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
  En Vivo
</span>
</div>
<div class="p-5 text-xs text-gray-200 space-y-4 bg-gradient-to-b from-[#11111a] to-[#0d0d14]">
<div class="grid grid-cols-3 gap-2.5">
<div class="p-3 rounded-xl bg-surface-container border border-surface-border/80">
<span class="text-[10px] text-gray-400 block mb-1">Pedidos y turnos</span>
<span class="text-base font-bold text-white">12 Hoy</span>
<span class="text-[10px] text-emerald-400 block mt-0.5">3 nuevos ahora</span>
</div>
<div class="p-3 rounded-xl bg-surface-container border border-surface-border/80">
<span class="text-[10px] text-gray-400 block mb-1">Cobros registrados</span>
<span class="text-base font-bold text-emerald-400">$86.400</span>
<span class="text-[10px] text-gray-400 block mt-0.5">Centralizados</span>
</div>
<div class="p-3 rounded-xl bg-surface-container border border-surface-border/80">
<span class="text-[10px] text-gray-400 block mb-1">Clientes frecuentes</span>
<span class="text-base font-bold text-secondary">24</span>
<span class="text-[10px] text-gray-400 block mt-0.5">Base actualizada</span>
</div>
</div>
<div class="p-3.5 rounded-xl bg-surface-container/80 border border-surface-border/80 space-y-2.5">
<div class="flex items-center justify-between text-xs pb-1.5 border-b border-surface-border/60">
<span class="font-semibold text-white flex items-center gap-1.5">
<MaterialIcon class="text-sm text-primary" name="notifications_active" />
  Actividad reciente
</span>
<span class="text-[11px] text-gray-400">Actualizado hace 2 min</span>
</div>
<div class="flex items-center justify-between p-2 rounded-lg bg-surface-container-high/60 border border-surface-border/50">
<div class="flex items-center gap-2.5">
<div class="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
<MaterialIcon class="text-sm" name="sports_soccer" />
</div>
<div>
<div class="font-medium text-white text-[11px]">Reserva Cancha 2 · 20:00 hs</div>
<div class="text-[10px] text-gray-400">Martín González · Seña abonada</div>
</div>
</div>
<span class="px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 text-[10px] font-semibold">Confirmado</span>
</div>
<div class="flex items-center justify-between p-2 rounded-lg bg-surface-container-high/60 border border-surface-border/50">
<div class="flex items-center gap-2.5">
<div class="w-7 h-7 rounded-lg bg-secondary/20 text-secondary flex items-center justify-center">
<MaterialIcon class="text-sm" name="shopping_bag" />
</div>
<div>
<div class="font-medium text-white text-[11px]">Nuevo pedido de tienda #142</div>
<div class="text-[10px] text-gray-400">2 productos · Envío a domicilio</div>
</div>
</div>
<span class="px-2 py-0.5 rounded bg-secondary/15 text-secondary text-[10px] font-semibold">Listo p/ empaque</span>
</div>
</div>
<div class="p-3 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-between">
<div class="flex items-center gap-2">
<MaterialIcon class="text-primary text-base" name="task_alt" />
<span class="text-xs text-gray-200">Todo centralizado sin usar planillas manuales</span>
</div>
<span class="text-xs text-primary font-medium">Panel en tiempo real</span>
</div>
</div>
</div>
</div>
</div>
</section>
</template>
