# guilherme-natal-site

My online resume. A fully static Next.js site with a Persona 5 inspired look,
adapted from the [Stage](https://github.com/basteez/hugo-theme-stage) Hugo theme.

No CSS framework, no UI library, no tracking. The only client JavaScript is the
menu cursor that follows the section you're reading and the "Pause motion" button.

## Run it locally

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # writes the static site to /out
npm run preview    # serves /out locally
```

## Update the resume

Almost everything lives in **`content/resume.ts`**: name, role, about text,
experience, projects, skills, certifications, contact links, the ticker and the
menu. Edit it, commit, push. Vercel rebuilds on every push to `main`.

- New job: add it at the **top** of `experience`. Use `end: null` while you're still there.
- The footer's "Updated" date is the build date, so it updates itself.
- Leave `email` or `linkedin` as `""` to hide that link.

Files you might swap:

| What | File |
| --- | --- |
| Resume PDF (download buttons) | `public/guilherme-natal-resume.pdf` |
| Photo | `public/portrait-800.webp` and `public/portrait-480.webp` (square) |
| Link preview card (LinkedIn, WhatsApp, X) | `app/opengraph-image.png` (1200×630) |
| Favicon | `app/icon.png`, `app/apple-icon.png` |

The preview card and favicon are plain images, so if you change your name or
role, regenerate them (or ask Claude to).

## Deploy on Vercel

1. Push this folder to a GitHub repo.
2. In Vercel: **Add New → Project**, import the repo. It detects Next.js; keep the defaults.
3. Click **Deploy**. Every later push to `main` redeploys automatically.

Custom domain: add it under **Project → Settings → Domains**, then add an
environment variable `NEXT_PUBLIC_SITE_URL=https://yourdomain.com` so link
previews use your domain. Without it, the site uses the Vercel production URL.

Because `next.config.ts` uses `output: "export"`, the `/out` folder also works
on any static host (GitHub Pages, Netlify, Cloudflare Pages, S3).

## Project layout

```
content/resume.ts     your content (edit this)
app/layout.tsx        fonts, page title, link preview metadata
app/page.tsx          section order
app/styles/           tokens, frame (menu, slabs, stamps), sections, motion, print
components/           one component per section
lib/collage.ts        the ransom-note lettering generator
```

Printing the page (Ctrl/Cmd + P) gives a plain black-and-white version.

## Credits

- Visual design adapted from **Stage** by Tiziano Basile, MIT License.
- Fonts: Dela Gothic One, Fraunces, Courier Prime, Anton, Literata, Fira Code, all SIL Open Font License 1.1.
- Inspired by Persona 5. Not affiliated with or endorsed by Atlus or SEGA; no game assets are used.

See `THIRD_PARTY_NOTICES.md`.
