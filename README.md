# lautaro.dev

Portfolio de Lautaro Méndez Portela implementado fielmente desde el export de Stitch con Vue 3, TypeScript, Composition API, Vite y Tailwind CSS local.

## Desarrollo

Requiere Node.js 22.12+ o 24+.

```sh
npm ci --cache .npm-cache
npm run dev
```

## Validación y producción

```sh
npm run lint
npm run typecheck
npm run build
npm run preview
```

El resultado publicable está en `dist/`. Es un sitio estático sin backend ni rutas; cualquier hosting estático puede servirlo.

Para reproducir los checks de navegador, iniciar `npm run dev` y ejecutar `npm run test:ui` en otra terminal. El verificador usa Chrome instalado y prueba 320, 375, 390, 768, 1024, 1280, 1440 y 1920 px, overflow real, copy frente al export, SVG de los iconos, menú con teclado, clipboard (éxito y permiso denegado), links, semántica, año dinámico, reveal, spotlight y cambios de reduced-motion. Guarda evidencias en `verification/`. Para usar otro servidor establecer `PORTFOLIO_TEST_URL`; para omitir capturas establecer `PORTFOLIO_CAPTURE=0`.

## Dominio y SEO

Copiar `.env.example` a `.env.local` y asignar `VITE_SITE_URL` al dominio público final, incluyendo `https://`. Recompilar. Vite genera canonical, `og:url` y URLs absolutas de la imagen social en el HTML de producción. Sin dominio configurado se omiten esas URLs para evitar un canonical falso.

Title, description, español, viewport, theme-color, Open Graph y Twitter/X están configurados en `index.html`. La imagen social local es `public/social-preview.png` (1200 × 630); el SVG correspondiente es su fuente editable. `npm run test:ui` puede regenerarla usando las fuentes locales del portfolio.

## Estructura

```text
src/
  components/
    Navbar.vue
    HeroSection.vue
    ServicesSection.vue
    CourtReservationSystemSection.vue
    ProjectsSection.vue
    ProcessSection.vue
    AboutSection.vue
    ContactSection.vue
    FooterSection.vue
    AmbientBackground.vue
    MaterialIcon.vue
  composables/
    useVisualEffects.ts
    useClipboard.ts
  assets/
    fonts.css
    material-icons.ts
  App.vue
  main.ts
  style.css
reference/
  code.html
  DESIGN.md
  screen.png
```

`tailwind.config.js` conserva los tokens del HTML original. `style.css` contiene efectos y ajustes responsive. `reference/` conserva los archivos originales sin cambios y no se publica en `dist/`.

## Dependencias y decisiones

- Runtime: Vue 3 y Fontsource Variable para Geist y JetBrains Mono. Solo se empaquetan sus variantes Latin normales.
- Build: Vite, plugin Vue, TypeScript, vue-tsc, Tailwind 3, PostCSS y Autoprefixer. Tailwind 3 conserva el comportamiento de las clases del export.
- Calidad: ESLint, typescript-eslint, eslint-plugin-vue y Playwright como herramientas de desarrollo.
- Iconos: paths locales de los símbolos originales Material Symbols Outlined, peso 400, mediante un componente SVG liviano. Solo se incluyen los símbolos usados; no se descarga una fuente de iconos ni se depende de Google Fonts. Licencias en `public/licenses/`.

## Mejoras respecto al HTML estático

Menú compacto accesible con cierre por enlace, Escape, clic externo o salida de foco; anchors suaves; skip-link y focus-visible; copia de email con feedback de dos segundos y recuperación ante permisos denegados; año actual dinámico; composición de mockups y CTAs adaptada a móviles.

IntersectionObserver para reveal; spotlight con pointer preciso y requestAnimationFrame que se detiene al quedar quieto; listeners, media queries, observer y timers con cleanup. Reduced-motion desactiva el movimiento y mantiene toda la interacción. Copy, links y mensajes prearmados conservados; dashboard explícitamente de demo.

## Fidelidad y límites de la referencia

La captura de Stitch cubre solo el navbar, hero y comienzo de servicios a 1280 × 1024. Esa región se compara visualmente; las secciones inferiores mantienen el markup del HTML y se revisan en navegador. La navbar usa menú compacto por debajo de 1280 px y los mockups reorganizan barras y estados en pantallas pequeñas. Los SVG conservan la familia original de iconos; `chat_bubble_outline` utiliza el path no relleno equivalente `chat_bubble`, porque el nombre exportado es un alias antiguo.

La auditoría y el plan están en `IMPLEMENTATION.md`; los resultados finales de validación están en `VALIDATION.md`.
# lautaro-web
