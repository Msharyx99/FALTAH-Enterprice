# FALTAH Enterprise Release 4.2 — Admin Control Restored

This release restores the no-code Admin CMS while keeping the three-repository architecture.

## What is included

- Admin CMS page: `cms.html`
- Add/edit/delete lessons without editing code
- Free-text equipment name
- Equipment icon manager
- Local preview inside the website
- Export `lessons.json` for FALTAH-Knowledge
- Export `equipment-icons.json` for FALTAH-Media
- Equipment Explorer clickable fix retained
- MP4 and YouTube popup player retained
- Smart FALTAH Assistant retained
- No backend required

## Important

This version is no-backend. It saves your changes in the browser for preview and exports JSON files. To publish for everyone, upload exported files manually:

- `lessons.json` → `FALTAH-Knowledge/data/lessons.json`
- `equipment-icons.json` → `FALTAH-Media/branding/equipment-icons.json` or keep it as your backup file

## Open CMS

From the app, open Admin CMS, or go directly to:

`cms.html`
