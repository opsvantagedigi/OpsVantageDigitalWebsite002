# OpsVantageDigitalWebsite002
Business Website Version 002

Repository file tree (partial):

OpsVantageDigitalWebsite_V2.0
│
├── branding
│   ├── colors.css
   ├── typography.css
   ├── layout.css
   ├── components.css
   ├── header.css
   ├── footer.css
   └── branding.md
│
└── OpsVantageDigitalWebsite002
	├── index.html
	├── about.html
	├── services.html
	├── contact.html
	└── assets
		├── css
## Deploying to Vercel

Local quick deploy (interactive):

```bash
npx vercel login
npx vercel
```

CI / non-interactive deploy (recommended for automation):

1. Create a Vercel token (`VERCEL_TOKEN`) in your Vercel account settings.
2. Run:

```bash
VERCEL_TOKEN=your_token_here npx vercel --prod --confirm
# or via the npm script:
VERCEL_TOKEN=your_token_here npm run deploy
```

The project includes `vercel.json` with standard Next.js build settings and a `.vercelignore` to exclude local artifacts.

		│   └── style.css
		└── js
			└── main.js
