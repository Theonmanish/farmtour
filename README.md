# Soans Farm Tour

The Soans Farm Tour is a Next.js application with an interactive Google My Maps embed, an attraction guide, and a separate plant catalogue.

## Features

- Explore the farm through the embedded map and attraction detail sheets.
- Search by plant number, common name, scientific name, or alternate name
- Open plant records in an adjustable bottom sheet
- Resize the sheet with touch, mouse, or keyboard controls
- Navigate to adjacent plant records from the detail sheet

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000/maps` to view the map or `http://localhost:3000/catalogue` to browse the plant collection. The root path (`/`) opens the map.

The map is served by Google My Maps and requires a network connection. The embed uses the configured public My Maps project; this application does not require API keys or environment variables.

## Production checks

```bash
npm run lint
npm run typecheck
npm run build
```
