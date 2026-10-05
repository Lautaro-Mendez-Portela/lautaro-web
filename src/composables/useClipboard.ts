import { onBeforeUnmount, ref } from 'vue'

export function useClipboard() {
  const feedback = ref('')
  const copying = ref(false)
  let timeout: ReturnType<typeof setTimeout> | undefined
  let disposed = false

  async function copy(text: string) {
    if (copying.value) return
    copying.value = true
    try {
      await navigator.clipboard.writeText(text)
      if (!disposed) feedback.value = 'Email copiado'
    } catch {
      if (!disposed) feedback.value = 'No se pudo copiar. Podés seleccionar el email.'
    } finally {
      if (!disposed) {
        copying.value = false
        clearTimeout(timeout)
        timeout = setTimeout(() => { feedback.value = '' }, 2000)
      }
    }
  }

  onBeforeUnmount(() => { disposed = true; clearTimeout(timeout) })
  return { feedback, copying, copy }
}
