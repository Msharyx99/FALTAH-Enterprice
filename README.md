# FALTAH Enterprise — Sprint 2

FALTAH Enterprise is a Progressive Web App for technical knowledge sharing.

## Sprint 2 additions

- Microsoft Learn–style dashboard upgrade
- Professional FALTAH character hero area
- Advanced lesson library
- Search by title, Arabic title, description, provider, and tags
- Filters by category and difficulty
- Lesson details modal
- Favorites saved in browser storage
- Admin login
- Admin dashboard metrics
- Add/edit lesson form
- Publish/draft/archive status workflow
- Video link field for Microsoft Stream / SharePoint
- Arabic/English content fields
- Local persistence using browser localStorage
- GitHub Pages friendly Vite configuration using `base: './'`

## Admin login

Prototype password:

```text
faltah
```

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Upload the generated `dist` folder to GitHub Pages only if you are deploying a static build manually.

For GitHub Pages from source, use GitHub Actions or run the build command locally.

## Notes

This sprint stores lessons locally in the browser. In a future sprint, this will be connected to SharePoint / Microsoft Stream / Azure.
