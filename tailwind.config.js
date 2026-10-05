export default {
    darkMode: "class",
    content: ['./index.html', './src/**/*.{vue,ts}'],
    theme: {
      extend: {
        "colors": {
          "surface-base": "#0A0A0F",
          "surface-dim": "#0e0e13",
          "surface": "#131318",
          "surface-container-lowest": "#0b0b10",
          "surface-container-low": "#121219",
          "surface-container": "#181822",
          "surface-container-high": "#20202c",
          "surface-container-highest": "#282838",
          "surface-elevated": "#1c1c28",
          "surface-border": "#272738",
          "surface-border-subtle": "#1e1e2d",
          "background": "#09090d",
          "on-background": "#f3f4f6",
          "on-surface": "#f1f1f5",
          "on-surface-variant": "#9ca3af",
          "outline": "#636275",
          "outline-variant": "#2b2b3a",
          "primary": "#818cf8",
          "primary-container": "#6366f1",
          "on-primary": "#ffffff",
          "secondary": "#38bdf8",
          "secondary-container": "#0284c7",
          "tertiary": "#34d399",
          "text-primary": "#f8fafc",
          "text-muted": "#94a3b8"
        },
        "opacity": { "8": "0.08", "15": "0.15", "35": "0.35" },
        "borderRadius": {
          "DEFAULT": "0.25rem",
          "lg": "0.5rem",
          "xl": "0.75rem",
          "2xl": "1rem",
          "3xl": "1.5rem",
          "full": "9999px"
        },
        "fontFamily": {
          "sans": ["Geist Variable", "sans-serif"],
          "mono": ["JetBrains Mono Variable", "monospace"]
        }
      }
    }
  }
