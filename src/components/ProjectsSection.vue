<script setup lang="ts">
import MaterialIcon from './MaterialIcon.vue'
</script>

<template>
<section aria-labelledby="proyectos-title" class="py-20 bg-surface-dim border-t border-surface-border/60 relative" id="proyectos">
<div class="max-w-7xl mx-auto px-6">
<div class="max-w-3xl mb-14 reveal">
<div class="mb-3">
<div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container border border-surface-border text-indigo-400">
<MaterialIcon class="text-base" name="devices_fold" />
<span class="text-[11px] font-mono uppercase tracking-wider font-semibold">MÁS SOLUCIONES</span>
</div>
</div>
<h2 id="proyectos-title" class="text-3xl sm:text-4xl font-bold text-white mb-2 relative inline-block">
  Otros proyectos desarrollados
  <span class="block h-[2px] w-full my-3 shimmer-underline"></span>
</h2>
<p class="text-base text-on-surface-variant mt-2">
  Herramientas diseñadas para resolver problemas concretos de comercios y profesionales.
</p>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
<article class="spotlight-card rounded-2xl bg-surface-container border border-surface-border p-7 flex flex-col justify-between hover:border-secondary/60 hover:shadow-2xl duration-200 reveal">
<div>
<div class="flex items-center justify-between gap-3 mb-4">
<span class="px-2.5 py-0.5 rounded-full bg-secondary/15 text-secondary border border-secondary/30 text-xs font-semibold">
  Comercios y Emprendedores
</span>
<span class="text-xs text-gray-400 font-medium">Venta Directa</span>
</div>
<h3 class="text-xl sm:text-2xl font-bold text-white mb-2">
  Tienda online para comercios
</h3>
<p class="text-sm font-medium text-secondary mb-4">
  Plataforma de catálogo, pedidos y cobros directos
</p>
<div class="p-3.5 rounded-xl bg-surface-container-high/60 border border-surface-border/60 mb-5">
<div class="text-[11px] font-bold text-gray-300 uppercase tracking-wider mb-1">¿Qué resuelve?</div>
<p class="text-xs text-on-surface-variant leading-relaxed">
  Permite vender de forma directa a tus clientes sin pagar comisiones abusivas a intermediarios y manteniendo el control de tu stock y cobros.
</p>
</div>
<div class="space-y-2.5 mb-6 text-xs text-gray-200">
<div class="flex items-center gap-2">
<MaterialIcon class="text-secondary text-base" name="shopping_cart" />
<span class="">Carrito ágil y simple para comprar desde el celular</span>
</div>
<div class="flex items-center gap-2">
<MaterialIcon class="text-emerald-400 text-base" name="receipt" />
<span class="">Cobros online seguros con comprobante inmediato</span>
</div>
<div class="flex items-center gap-2">
<MaterialIcon class="text-primary text-base" name="inventory_2" />
<span class="">Panel para gestionar pedidos entrantes y stock</span>
</div>
</div>
<div class="text-xs text-gray-400 mb-6">
<strong class="text-gray-200">Ideal para:</strong> Marcas de ropa, negocios gastronómicos y comercios minoristas.
</div>
</div>
<div class="pt-4 border-t border-surface-border/60 flex items-center justify-between project-footer">
<span class="text-xs text-gray-400 font-mono">Vue · Node.js · Pagos Online</span>
<a class="text-xs font-semibold text-secondary hover:text-white flex items-center gap-1 transition-colors min-h-[36px]" href="https://wa.me/5492213524236?text=Hola%20Lautaro,%20quiero%20consultar%20por%20una%20tienda%20online" rel="noopener noreferrer" target="_blank">
  Consultar por este proyecto <MaterialIcon class="text-sm" name="arrow_forward" />
</a>
</div>
</article>
<article class="spotlight-card rounded-2xl bg-surface-container border border-surface-border p-7 flex flex-col justify-between hover:border-primary/60 hover:shadow-2xl duration-200 reveal">
<div>
<div class="flex items-center justify-between gap-3 mb-4">
<span class="px-2.5 py-0.5 rounded-full bg-primary/15 text-primary border border-primary/30 text-xs font-semibold">
  Productividad y Gestión
</span>
<span class="text-xs text-gray-400 font-medium">Inteligencia Artificial</span>
</div>
<h3 class="text-xl sm:text-2xl font-bold text-white mb-2">
  Asistente inteligente para documentos
</h3>
<p class="text-sm font-medium text-primary mb-4">
  Consultas rápidas en manuales, contratos o catálogos
</p>
<div class="p-3.5 rounded-xl bg-surface-container-high/60 border border-surface-border/60 mb-5">
<div class="text-[11px] font-bold text-gray-300 uppercase tracking-wider mb-1">¿Qué resuelve?</div>
<p class="text-xs text-on-surface-variant leading-relaxed">
  Elimina horas de búsqueda manual entre cientos de páginas de reglamentos, contratos extensos o listas de precios mediante preguntas en lenguaje simple.
</p>
</div>
<div class="space-y-2.5 mb-6 text-xs text-gray-200">
<div class="flex items-center gap-2">
<MaterialIcon class="text-primary text-base" name="upload_file" />
<span class="">Subir documentos PDF y organizarlos por carpetas</span>
</div>
<div class="flex items-center gap-2">
<MaterialIcon class="text-secondary text-base" name="chat" />
<span class="">Hacer preguntas como si hablaras con un asistente experto</span>
</div>
<div class="flex items-center gap-2">
<MaterialIcon class="text-emerald-400 text-base" name="shield" />
<span class="">Respuestas exactas basadas únicamente en tus documentos</span>
</div>
</div>
<div class="text-xs text-gray-400 mb-6">
<strong class="text-gray-200">Ideal para:</strong> Estudios contables, inmobiliarias y atención a consultas de clientes.
</div>
</div>
<div class="pt-4 border-t border-surface-border/60 flex items-center justify-between project-footer">
<span class="text-xs text-gray-400 font-mono">NestJS · PostgreSQL · IA Local</span>
<a class="text-xs font-semibold text-primary hover:text-white flex items-center gap-1 transition-colors min-h-[36px]" href="https://wa.me/5492213524236?text=Hola%20Lautaro,%20quiero%20consultar%20por%20el%20asistente%20de%20documentos" rel="noopener noreferrer" target="_blank">
  Consultar por este proyecto <MaterialIcon class="text-sm" name="arrow_forward" />
</a>
</div>
</article>
</div>
</div>
</section>
</template>
