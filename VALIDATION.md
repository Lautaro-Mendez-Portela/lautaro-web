# Validación final

**Resultado: listo para entregar (`ship`).** La migración conserva el mundo visual del export de Stitch: paleta oscura, copy, glows, grid, Geist, JetBrains Mono e iconos Material Symbols. Mantiene las siete secciones originales en orden, el dashboard identificado como demo y el Sistema de reservas de canchas destacado. La revisión visual independiente no señaló correcciones materiales pendientes.

## Comprobaciones

| Comprobación | Resultado |
| --- | --- |
| `npm run lint` | Exit 0, sin errores ni warnings. |
| `npm run build` | Exit 0, incluye `vue-tsc --noEmit`, sin warnings. |
| UI de producción en `http://127.0.0.1:4173` | 15 comprobaciones aprobadas; sin errores del navegador. |
| Responsive | Sin overflow en 320, 375, 390, 768, 1024, 1280, 1440 y 1920 px. |
| Contenido e iconos | Copy de las siete secciones idéntico al export; 41 símbolos SVG locales de la familia original, peso 400. |
| Interacción y accesibilidad | Menú con Enter/Tab/Escape, cierre y retorno de foco; skip-link; enlaces y anchors; clipboard con éxito, permiso denegado y limpieza del feedback a los dos segundos; año dinámico. |
| Movimiento y pointer | Reveal y spotlight con mouse; spotlight desactivado en touch; reduced-motion sin elementos ocultos ni movimiento, incluido el cambio dinámico de preferencia. |
| SEO con dominio configurado | Build separado con `VITE_SITE_URL=https://portfolio.example` en `verification/seo-dist`: canonical, `og:url` e imagen social PNG con URL absoluta correctos. El `dist/` final predeterminado no incorpora ese dominio de prueba. |

Evidencia automática: [report.json](verification/report.json). El informe registra las ocho mediciones de ancho, las comprobaciones funcionales y `errors: []`. El procedimiento para repetirlas está en [README.md](README.md).

## Evidencia visual y alcance

- Referencia original: [screen.png](reference/screen.png), de 1280 × 1024. Cubre navbar, hero y comienzo de servicios; la [captura de la implementación correspondiente](verification/desktop-reference.png) mantiene una correspondencia visual cercana en esa región. Las capturas se tomaron en el servidor de desarrollo; los checks funcionales finales se repitieron sobre el build de producción.
- Secciones inferiores: revisadas en navegador contra [code.html](reference/code.html), porque la captura original no las cubre. Evidencias de escritorio: [servicios](verification/1280-servicios.png), [Sistema de reservas de canchas](verification/1280-megaestadio.png), [proyectos](verification/1280-proyectos.png), [proceso](verification/1280-proceso.png), [sobre mí](verification/1280-sobre-mi.png) y [contacto](verification/1280-contacto.png).
- Responsive: [320 px](verification/width-320.png), [390 px](verification/width-390.png), [768 px](verification/width-768.png), [1024 px](verification/width-1024.png), [1440 px](verification/width-1440.png) y [1920 px](verification/width-1920.png). Detalle móvil: [hero](verification/390-hero.png), [Sistema de reservas de canchas](verification/390-megaestadio.png) y [menú abierto](verification/mobile-menu.png).

La evaluación visual no afirma igualdad pixel a pixel ni una comparación con screenshots originales de las secciones inferiores. Las adaptaciones deliberadas son la navbar completa desde 1280 px con menú compacto debajo, gutters móviles de 16 px y reflujo, feedback accesible de copia, año dinámico y manejo de movimiento/pointer con cleanup. Se detallan en [IMPLEMENTATION.md](IMPLEMENTATION.md).

## Sistema visual conservado

[reference/DESIGN.md](reference/DESIGN.md), [reference/code.html](reference/code.html) y [reference/screen.png](reference/screen.png) se conservan sin cambios. La guía conceptual ya difería del export: por ejemplo, su frontmatter declara fondo `#131318`, primary `#c0c1ff` y radio `lg` de `1rem`; el HTML usa fondo `#09090d`, primary `#818cf8` y `lg` de `0.5rem`. El HTML operativo y la captura suministrada gobiernan esta migración. Se registra esa discrepancia previa sin corregirla ni generar otro sistema de diseño.

Las fuentes se empaquetan localmente mediante Fontsource, con sus variantes Latin normales. Los SVG conservan Material Symbols Outlined; el alias legado `chat_bubble_outline` usa el path de la variante outline equivalente `chat_bubble`. No hay dependencias externas de CDN, fuentes o iconos durante la ejecución.

## Tamaño y límites conocidos

Build final: JavaScript **133.50 kB** (**43.45 kB gzip**), CSS **34.50 kB** (**7.51 kB gzip**), fuentes **29.40 kB + 40.40 kB**. El sitio es estático, sin backend ni router; los mockups son demostraciones visuales. El dominio público sigue siendo configurable mediante `VITE_SITE_URL`.

El contexto/detector del engine de Impeccable no estuvo disponible por permisos del caché, por lo que no se ejecutó ese detector. La validación se realizó directamente sobre código, build y navegador; el resultado no se presenta como una aprobación automática de ese engine.
