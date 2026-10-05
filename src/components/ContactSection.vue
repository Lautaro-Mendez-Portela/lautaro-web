<script setup lang="ts">
import MaterialIcon from './MaterialIcon.vue'
import { useClipboard } from '../composables/useClipboard'
const { feedback, copying, copy } = useClipboard()
</script>

<template>
<section aria-labelledby="contacto-title" class="py-20 max-w-7xl mx-auto px-6 relative" id="contacto">
<div class="spotlight-card max-w-4xl mx-auto rounded-3xl bg-surface-container border border-surface-border p-8 md:p-12 shadow-2xl relative overflow-hidden reveal">
<div class="absolute -right-20 -top-20 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
<div class="absolute -left-20 -bottom-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
<div class="text-center max-w-2xl mx-auto mb-10 relative">
<div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high border border-surface-border text-emerald-400 text-xs font-semibold mb-4">
<span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
<span class="">¿Hablamos de tu idea?</span>
</div>
<h2 id="contacto-title" class="text-3xl sm:text-4xl font-bold text-white mb-4">
  ¿Tenés una idea para tu negocio?
</h2>
<p class="text-base text-on-surface-variant leading-relaxed">
  Contame qué necesitás y vemos juntos cuál es la mejor solución para tu proyecto.
</p>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 relative">
<div class="spotlight-card p-6 rounded-2xl bg-surface-container-high border border-emerald-500/30 flex flex-col justify-between hover:border-emerald-400 duration-200">
<div>
<div class="flex items-center gap-3 mb-4">
<div class="h-10 w-10 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
<MaterialIcon class="text-2xl" name="forum" />
</div>
<div>
<span class="text-xs text-on-surface-variant block">Respuesta rápida</span>
<span class="text-sm font-bold text-white">+54 9 221 352-4236</span>
</div>
</div>
<p class="text-xs text-on-surface-variant mb-4">
  La vía más rápida para charlar directamente sobre tu negocio o sacarte cualquier duda.
</p>
</div>
<a class="w-full text-center py-3.5 px-4 min-h-[44px] rounded-xl bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-500 shadow-md shadow-emerald-700/25 hover:-translate-y-0.5 active:scale-[0.98] transition-all flex items-center justify-center gap-2" href="https://wa.me/5492213524236?text=Hola%20Lautaro,%20tengo%20una%20idea%20para%20mi%20negocio" rel="noopener noreferrer" target="_blank">
<MaterialIcon class="text-lg" name="chat" />
<span class="">Hablar por WhatsApp</span>
</a>
</div>
<div class="spotlight-card p-6 rounded-2xl bg-surface-container-high border border-surface-border flex flex-col justify-between hover:border-primary/50 duration-200">
<div>
<div class="flex items-center gap-3 mb-4">
<div class="h-10 w-10 rounded-lg bg-surface-container border border-surface-border flex items-center justify-center text-primary shrink-0">
<MaterialIcon class="text-2xl" name="mail" />
</div>
<div>
<span class="text-xs text-on-surface-variant block">Correo electrónico</span>
<span class="text-xs sm:text-sm font-semibold text-white break-all">lautaromendezportela@gmail.com</span>
</div>
</div>
<p class="text-xs text-on-surface-variant mb-4">
  Para consultas detalladas, especificaciones o envío de documentación.
</p>
</div>
<div class="flex items-center gap-2">
<a class="flex-1 text-center py-3.5 px-4 min-h-[44px] rounded-xl bg-surface-container border border-surface-border text-white text-sm font-semibold hover:bg-surface-container-highest transition-all flex items-center justify-center" href="mailto:lautaromendezportela@gmail.com">
  Enviar un email
</a>
<button class="py-3.5 px-3 min-h-[44px] rounded-xl bg-surface-container border border-surface-border text-gray-300 hover:text-white transition-all flex items-center justify-center" type="button" :disabled="copying" @click="copy('lautaromendezportela@gmail.com')" aria-label="Copiar email" title="Copiar email" :class="{ 'text-emerald-400': feedback === 'Email copiado' }">
<MaterialIcon class="text-base align-middle" :name="feedback === 'Email copiado' ? 'check' : 'content_copy'" />
</button>
</div>
</div>
</div>
<div class="p-4 rounded-xl bg-surface-container-high border border-surface-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-on-surface-variant">
<div class="flex items-center gap-1.5 text-gray-400">
<MaterialIcon class="text-sm text-primary" name="location_on" />
<span class="">La Plata, Buenos Aires, Argentina · UTC-3</span>
</div>
<div class="flex items-center gap-5">
<a class="inline-flex items-center gap-1.5 text-gray-300 hover:text-primary transition-colors min-h-[32px]" href="https://github.com/Lautaro-Mendez-Portela" rel="noopener noreferrer" target="_blank">
<MaterialIcon class="text-sm" name="code" /> GitHub
</a>
<a class="inline-flex items-center gap-1.5 text-gray-300 hover:text-primary transition-colors min-h-[32px]" href="https://www.linkedin.com/in/lautaro-mendez-portela-6374432a8/" rel="noopener noreferrer" target="_blank">
<MaterialIcon class="text-sm" name="badge" /> LinkedIn
</a>
</div>
</div>
</div>
<p class="clipboard-feedback" role="status" aria-live="polite">{{ feedback }}</p>
</section>
</template>
