# emperorpierre.com

Personal internet headquarters. Part link-in-bio, part museum, part lab
notebook, part autobiography.

Static by design. No server, no database, no CMS admin panel — the repo
*is* the content database.

## Stack

- [Astro](https://astro.build) (static output)
- Tailwind CSS v4 (`@tailwindcss/vite`)
- Astro Content Collections (Markdown as the CMS)
- GitHub Actions → GitHub Pages

## Adding content

Everything lives under `src/content/`. Add a Markdown file with the right
frontmatter, commit, push to `main` — the site rebuilds and redeploys
automatically.

| Section     | Path                       | Schema                                  |
| ----------- | --------------------------- | ---------------------------------------- |
| Projects    | `src/content/projects/*.md` | `src/content/config.ts` → `projects`     |
| History     | `src/content/history/*.md`  | `src/content/config.ts` → `history`      |
| Writing     | `src/content/writing/*.md`  | `src/content/config.ts` → `writing`      |
| Art         | `src/content/art/*.md`      | `src/content/config.ts` → `art`          |
| Lab / experiments | `src/content/experiments/*.md` | `src/content/config.ts` → `experiments` |

Art images live in `public/art/`. Keep them web-sized (AVIF/WebP/JPEG) —
GitHub Pages has a soft 1GB repo / 100GB-month bandwidth ceiling.

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # type-check + build to dist/
npm run preview  # preview the production build
```

## Deployment

Push to `main`. `.github/workflows/deploy.yml` builds with
[`withastro/action`](https://github.com/withastro/action) and publishes to
GitHub Pages. The custom domain is set via `public/CNAME`.

In the repo's Settings → Pages, source should be **GitHub Actions**.
