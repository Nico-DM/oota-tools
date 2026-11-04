# Guía interactiva del DM — Out of the Abyss

## Uso
Abrí `index.html` en un navegador moderno. No requiere instalación ni servidor.

## Archivos separados
- `index.html`: estructura de la interfaz.
- `styles.css`: estética, diseño adaptable e impresión.
- `app.js`: navegación, búsqueda, renderizado, listas de control y selector de capítulos.
- `capitulos/capitulo-01.js`: contenido editable del capítulo 1.

## Añadir capítulos
1. Copiá `capitulos/capitulo-01.js` como `capitulo-02.js`.
2. Cambiá `id`, `number`, `title`, `summary`, `tags`, `quick` y `sections`.
3. Añadí `<script src="capitulos/capitulo-02.js" defer></script>` en `index.html`, antes de `app.js`.
4. Sumá relaciones y conexiones entre capítulos solo cuando estén respaldadas por los .md o las sugerencias.

Bloques disponibles: `prose`, `callout`, `timeline`, `checklist`, `table`, `list`, `characters`, `relationships`, `locations`.

Editá contenido en el archivo del capítulo; apariencia en `styles.css`; comportamiento en `app.js`. Los nombres de las funciones y clases son descriptivos. No hay spoilers ocultos: toda la información de continuidad está visible para el DM.
