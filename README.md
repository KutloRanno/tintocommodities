# Tinto Commodities

A Next.js App Router app using plain JavaScript and CSS.

The home page implements the supplied Tinto Figma design, with responsive mobile styling, local images, and a locally hosted Space Grotesk font.

The Shop and Buy now links lead to the produce section, and Contact leads to the footer. Product enquiries and footer contact links open WhatsApp at `+267 77 337 433`. Set the location URL in `destinations` in `src/app/page.js` when it is available; that link remains disabled.

## Development

```sh
npm install
npm run dev
```

Edit `src/app/page.js`, `src/app/layout.js`, and `src/style.css` to build your app.

## Production

```sh
npm run build
npm start
```

Open http://localhost:3000 after starting the development or production server.

## GitHub Pages

The workflow in `.github/workflows/deploy-pages.yml` builds a static export and publishes it when changes are pushed to `main`.

1. Give the connected GitHub app access to `KutloRanno/tintocommodities`, or authenticate Git locally.
2. In the repository's **Settings → Pages**, select **GitHub Actions** as the publishing source.
3. Push the source changes to `main`. Wait for **Deploy to GitHub Pages** to finish successfully.

Expected public URL after deployment: https://kutloranno.github.io/tintocommodities/

To generate the same export locally:

```sh
NEXT_PUBLIC_BASE_PATH=/tintocommodities npm run build
```

The export is written to `out/`. The environment variable also prefixes image and home URLs so they work under the repository path. Without it, normal local development and `npm start` continue to use the site root.
