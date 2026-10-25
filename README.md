# Código del Alma

Sitio web de numerología que, a partir del nombre completo y la fecha de nacimiento, calcula y explica:

- **Lección de vida**: suma de los dígitos de la fecha.
- **Número del alma**: vocales del nombre.
- **Personalidad externa**: consonantes del nombre.
- **Número destino**: alma + personalidad.
- Número del día, año personal, tabla de inclusión y lecciones kármicas.

Cada número se lee desde tres miradas: numerología pitagórica, Kabbalah (letra hebrea y sefirá) y tradición judía. Las dos últimas llevan sus fuentes citadas (Sefaria, Chabad.org, Jewish Virtual Library, Britannica).

**Privacidad:** no se recopila, almacena ni envía ningún dato. Todo el cálculo ocurre en el navegador, la CSP bloquea cualquier conexión saliente y `scripts/privacy-check.mjs` detiene el build si el código intenta enviar o guardar datos. Detalles en [SECURITY.md](SECURITY.md).

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # genera dist/
```

- Motor de cálculo: `src/lib/numerology.ts`
- Significados numerológicos: `src/data/numerology.ts`
- Kabbalah y tradición judía, con fuentes: `src/data/tradition.ts`
- Nombre del sitio: `src/config.ts`

## Despliegue en GitHub Pages

El workflow `.github/workflows/deploy.yml` publica el sitio en cada push a `main`.
En el repositorio, entra en **Settings → Pages → Source** y elige **GitHub Actions**.
