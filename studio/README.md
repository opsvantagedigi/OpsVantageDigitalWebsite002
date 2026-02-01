# OpsVantage Sanity Studio

This folder contains a local Sanity Studio for live content editing.

Quick start

1. Install dependencies in the `studio/` folder:

```bash
cd studio
npm install
```

2. Create environment variables:

Copy `.env.example` to `.env` and set `SANITY_STUDIO_PROJECT_ID` and `SANITY_STUDIO_DATASET`.

3. Login and link (if you haven't already):

```bash
npx sanity login
npx sanity init --project <your-project-id> # or `sanity link` if you already created the project in the Sanity web UI
```

4. Run the studio locally:

```bash
npm run dev
```

Build & deploy

```bash
npm run build
npm run deploy
```

Notes

- If you prefer the Sanity CLI globally: `npm i -g @sanity/cli`.
- The Studio reads `SANITY_STUDIO_PROJECT_ID` and `SANITY_STUDIO_DATASET` from env.
