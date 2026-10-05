# Auditoría e implementación del export

## Referencias y criterio

- `reference/screen.png`: captura de 1280 × 1024; autoridad visual del navbar, hero y comienzo de servicios.
- `reference/code.html`: referencia completa de contenido, composición, iconos, links y efectos de todas las secciones.
- `reference/DESIGN.md`: sistema visual de Stitch, conservado sin cambios. Sus tokens conceptuales difieren del HTML en algunos colores y radios; se toman los valores del HTML porque producen la captura aprobada.
- No existía una aplicación previa ni instrucciones `AGENTS.md` en el proyecto.

## Hallazgos previos a la implementación

Siete secciones (`hero`, `servicios`, `megaestadio`, `proyectos`, `proceso`, `sobre-mi`, `contacto`), navbar y footer. Layout centrado de 1280 px, gutters de 24 px, servicios 2 × 2 desde 1024 px, proyectos en dos columnas desde 768 px, timeline horizontal desde 1024 px. Tipografía Geist y JetBrains Mono, iconos Material Symbols Outlined.

Colores operativos del HTML: fondo `#09090d`, superficie tenue `#0e0e13`, cards `#181822`, bordes `#272738`, acento violeta `#818cf8`, cyan `#38bdf8`, verde `#34d399`; CTAs en emerald-600. Bordes finos, grid de 40 px, glows desenfocados y mockups íntegramente HTML.

Efectos: reveal con opacity + translateY de 12 px, spotlight global interpolado, spotlight radial en cards, elevación de 2 px en hover, floats de 4.5/5 segundos, radar de disponibilidad y línea shimmer. El export tenía coordenadas de cursor grabadas, clases reveal en estados inconsistentes, copia mediante alert, año fijo y navbar incompleta para móviles.

Los enlaces incluyen WhatsApp con cuatro mensajes prearmados, GitHub, LinkedIn, email y anchors. Los números del hero son de una demo explícita. El Sistema de reservas de canchas mantiene seña de $10.000, comprobante cargado/verificado, confirmación y email; no se agregan funcionalidades.

## Plan ejecutado

1. Extraer y leer las tres referencias antes de crear código.
2. Trasladar markup y tokens a Vue 3 + TypeScript + Vite + Tailwind 3 local, conservando composición y copy.
3. Separar componentes por sección y composables para efectos y clipboard.
4. Implementar menú compacto accesible, feedback de copia, año dinámico, SEO y adaptación de mockups pequeños.
5. Ejecutar lint, typecheck, build y verificación de navegador en 320, 375, 390, 768, 1024, 1280, 1440 y 1920 px. Comparar el área disponible contra la captura y revisar el resto contra el HTML.

## Adaptaciones justificadas

- Navbar completa desde 1280 px; menú desplegable hasta 1279 px, porque todos los enlaces y acciones del export no entran cómodamente en tablet.
- Gutters de 16 px en móviles y reflujo de barras internas, estados, metadata y CTAs para que el contenido no desborde.
- Reveal visible por defecto; solo se ocultan elementos fuera del viewport cuando el observer está funcionando.
- Spotlight únicamente con mouse/pointer preciso, un listener delegado y requestAnimationFrame activo solo mientras interpola; cleanup completo y respuesta a cambios de reduced-motion/pointer.
- Geist y JetBrains Mono instaladas con Fontsource (subsets Latin). Material Symbols utiliza los paths SVG originales locales, peso 400; conserva sus formas y elimina la descarga de una fuente externa.
- Canonical y URLs sociales generadas durante build solo cuando existe `VITE_SITE_URL`, sin inventar un dominio.
- La captura original no cubre el portfolio entero: la comparación visual de secciones inferiores se basa en el HTML.
