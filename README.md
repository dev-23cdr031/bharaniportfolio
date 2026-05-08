# Bharani Portfolio

This is a Next.js portfolio site. Instructions to run locally and deploy to the web.

## Run locally

- Install dependencies (recommended: `pnpm`):

```bash
pnpm install
pnpm dev
# or with npm:
npm install
npm run dev
```

Open http://localhost:3000 after starting.

## Deploy to Vercel (recommended)

1. Create a Git repository and push your project to GitHub (or GitLab/Bitbucket).
2. Sign in to https://vercel.com and import your repository.
3. Vercel will auto-detect Next.js. Use the default settings (build: `pnpm build` or `npm run build`).
4. If you want automatic deploys from GitHub, enable the integration during import.

Notes:
- If you use `pnpm`, add the install command in Vercel project settings: `pnpm install`.
- This project contains an API route (`app/api/contact/route.ts`), so static export is not suitable — use Vercel or another Node server provider.

## Optional: Deploy via GitHub Actions to Vercel

You can use the provided workflow to deploy on push to `main`. Add the following repository secrets in GitHub: `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`.

The workflow file is `.github/workflows/vercel-deploy.yml`.

## Troubleshooting

- If build fails on Vercel, check the build logs and ensure you set the install command to `pnpm install` if using pnpm.
- If you have environment variables, add them to Vercel or GitHub Actions secrets as needed.

If you want, I can: push to GitHub, set up the GitHub Action, or help import to Vercel.
