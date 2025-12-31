# NEG Scholarship — Editable Featured Scholarship

A small static site for listing scholarships with a lightweight admin editor to update a single featured scholarship (name, link, description) without editing code. The admin UI commits updates to the repository (via GitHub API) and your host (e.g., Vercel) will redeploy the site automatically.

This repository contains:
- Public site files: `index.html`, `styles.css`, `script.js`
- Editable content: `content/scholarships.json` (single object)
- Admin UI: `admin/index.html` (simple token-based editor)
- Serverless endpoints: `api/get.js` and `api/update.js` (Vercel serverless functions)
- This README with deployment and maintenance instructions

Table of contents
- Project overview
- Quick start (deploy to GitHub)
- Deploy to Vercel (recommended)
- Files and where to edit
- Admin usage
- Environment variables (required)
- Security notes
- Troubleshooting
- Local development (optional)
- License

Project overview
This is a small, safe workflow for editing a featured scholarship on a static site:
- Public site loads `/content/scholarships.json` at runtime and shows the featured scholarship.
- Admin UI at `/admin` lets you update the JSON fields.
- Serverless endpoint `/api/update` commits changes to the repository using a GitHub token stored in the server environment.
- Vercel (or your host) auto-deploys the updated site when the repo changes.

Quick start — push files to GitHub
1. Create a new repository on GitHub (e.g., `neg-scholarship`).
2. Add these files and folders to your project:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `content/scholarships.json`
   - `admin/index.html`
   - `api/get.js`
   - `api/update.js`
   - `README.md`
3. Recommended `.gitignore`:
   ```
   node_modules/
   .env
   .DS_Store
   ```
4. Initialize and push with Git (run in your project folder):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: site + admin editor"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
   git push -u origin main
   ```
   If prompted for credentials when pushing, use a GitHub Personal Access Token (PAT) as the password.

Deploy to Vercel (recommended)
1. Sign in to https://vercel.com (sign in with GitHub for easiest setup).
2. Import the GitHub repository as a new project.
3. Add the required environment variables (see below).
4. Deploy — Vercel will publish your site and provide a live URL (e.g., `https://your-site.vercel.app`).
5. After initial deploy, open `https://your-site.vercel.app/admin`, paste `ADMIN_TOKEN`, and edit the featured scholarship.

Files and where to edit
- Public site content:
  - `index.html` — site markup. The featured highlight is in the `#featured` section and populated from `content/scholarships.json`.
  - `styles.css` — site styles, responsive layout improvements included.
  - `script.js` — site behavior, scholarship listings and the runtime loader for the featured JSON.
- Editable content:
  - `content/scholarships.json` — single JSON object for the featured scholarship. Example:
    ```json
    {
      "id": "main",
      "name": "InnovaGenius Solutions Engineering Scholarship",
      "link": "https://forms.gle/your-google-form-id-here",
      "description": "Short description of the scholarship and eligibility/high-level info."
    }
    ```
- Admin UI:
  - `admin/index.html` — a tiny editor that accepts an `ADMIN_TOKEN` and calls `/api/update`.
- Serverless API (Vercel):
  - `api/get.js` — reads `content/scholarships.json` from the repo via GitHub API (server-side).
  - `api/update.js` — commits updates to the `content/scholarships.json` (server-side). It only allows writes to that file path.

Environment variables (set these in Vercel or your host)
- `GITHUB_TOKEN` — GitHub Personal Access Token (PAT) with `repo` scope (keep secret).
- `REPO_OWNER` — GitHub username or organization that owns the repository.
- `REPO_NAME` — repository name (the repo that contains these files).
- `TARGET_BRANCH` — branch to commit updates to (e.g., `main`).
- `ADMIN_TOKEN` — a long random secret string used by the admin UI to authenticate (keep secret).

How to create a GitHub Personal Access Token (classic)
1. On GitHub: Settings → Developer settings → Personal access tokens → Tokens (classic) → Generate new token.
2. Give it a descriptive name and set expiration as desired.
3. Select `repo` scope for repository read/write access (or choose the minimal fine-grained token that permits the required repository updates).
4. Generate and copy the token — you will only see it once. Paste it into Vercel as `GITHUB_TOKEN`.

Admin usage (edit the featured scholarship)
1. Open `https://<your-deployment>/admin`.
2. Paste the `ADMIN_TOKEN` you put in Vercel into the token box and click "Use token" (the token is stored in session only).
3. Edit the `name`, `link`, and `description` fields and click Save.
4. The admin UI calls `/api/update` which commits the updated `content/scholarships.json` to the configured branch.
5. Vercel will automatically create a new deployment for that commit; when the deployment finishes the public site shows the updated content.

Security notes
- NEVER commit secrets (GITHUB_TOKEN or ADMIN_TOKEN) to the repository.
- Store secrets only in Vercel environment variables (or your host’s secure environment).
- The serverless functions restrict writes to `content/scholarships.json`. Do not allow arbitrary file writes.
- For production/multiple editors, consider replacing the simple token flow with GitHub OAuth or a proper auth provider (e.g., NextAuth, Supabase Auth).
- Rotate PATs periodically and revoke them if exposed.

Troubleshooting
- Admin returns "Unauthorized" on save:
  - Verify `ADMIN_TOKEN` in Vercel matches the one you pasted in the admin UI.
  - Check Vercel function logs for more details.
- Commit not visible on GitHub after Save:
  - Confirm `GITHUB_TOKEN`, `REPO_OWNER`, `REPO_NAME`, and `TARGET_BRANCH` are correct.
  - Inspect Vercel function logs — GitHub API responses are logged on error.
- Vercel does not redeploy automatically:
  - Confirm commits are pushed to the branch connected to the Vercel project.
  - Check Vercel deploy logs for build failures.
- If you get `403` or `401` from GitHub API:
  - The PAT may be expired or not have required permissions. Recreate a PAT with the correct scope and update `GITHUB_TOKEN`.

Local development (optional)
- You can test serverless functions locally with the Vercel CLI:
  1. Install: `npm i -g vercel`
  2. Run in your project folder: `vercel dev`
  3. Provide environment variables locally (e.g., in your shell or `.env` when using `vercel dev`).
- For simple static testing (without serverless APIs), open `index.html` in a browser; the featured block will show the bundled `content/scholarships.json` if present.

Extending this project
- Multi-entry management: convert `content/scholarships.json` into an array and expand the admin UI to create/edit/delete multiple entries.
- Auth: replace `ADMIN_TOKEN` with GitHub OAuth for per-user authentication and audit logs.
- Media: store images externally (Cloudinary, S3) and put URLs in the JSON rather than committing binary assets to git.
- Use a GitHub App or fine-grained token for tighter permissions.

License
MIT — free to use, modify and distribute. See the LICENSE file (add one to the repo) or include this notice.

Contact / support
If you want hands-on help (create a zip, open a PR, or walk through Vercel setup), tell me:
- Your GitHub repo name (owner/repo) OR
- Whether you want a ZIP of the project files.

Enjoy — this workflow keeps edits simple, versioned, and safe while letting you update the featured scholarship without touching code.