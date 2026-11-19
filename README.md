# guilherme-natal-site

My online resume. A fully static Next.js site with two looks to choose from:

- **`persona5`**: a Persona 5 inspired look, adapted from the
  [Stage](https://github.com/basteez/hugo-theme-stage) Hugo theme.
- **`gta6`** (Sunset): a neon-dusk beach-city look inspired by GTA VI, with a sunset
  hero, a HUD mini map, pause-menu tabs, an in-game phone for the about text and a
  mission log for experience.

Both read the same `content/resume.ts`.

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

## Choose the theme

Set `SITE_THEME` in **`.env`**:

```bash
SITE_THEME=persona5   # or gta6
```

The theme is picked when `npm run dev` or `npm run build` starts, and only that
theme's components, CSS and fonts go into the site. Visitors can't switch it.
After changing `.env`, restart the dev server. An unknown value stops the build
with an error.

On Vercel, `.env` is used unless you set `SITE_THEME` under
**Project → Settings → Environment Variables**, which takes precedence.
To try a theme once without editing the file: `SITE_THEME=gta6 npm run dev`.

## Update the resume

Almost everything lives in **`content/resume.ts`**: name, role, about text,
experience, projects, skills, certifications, contact links, the ticker and the
menu. Edit it, commit, push. Vercel rebuilds on every push to `main`.

- New job: add it at the **top** of `experience`. Use `end: null` while you're still there.
- The footer's "Updated" date is the build date, so it updates itself.
- Leave `email` or `linkedin` as `""` to hide that link.
- `availability` (GTA 6 theme) is the line next to the five stars in the hero. Leave it `""` to hide the stars.

Files you might swap:

| What | File |
| --- | --- |
| Resume PDF (download buttons) | `public/guilherme-natal-resume.pdf` |
| Photo | `public/portrait-800.webp` and `public/portrait-480.webp` (square) |
| Link preview card (LinkedIn, WhatsApp, X) | `themes/<theme>/opengraph-image.png` (1200×630) |
| Favicon | `themes/<theme>/icon.png`, `themes/<theme>/apple-icon.png` |

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
.env                  SITE_THEME: which theme to build
next.config.ts        points the `@theme` import at the chosen theme
app/layout.tsx        page title, link preview metadata (fonts and icons come from the theme)
app/page.tsx          section order
components/           pieces both themes share (menu tracking, "Pause motion" button)
fonts/                self-hosted fonts for both themes, with licences
lib/highlight.tsx     code highlighting for the projects section
themes/<theme>/
  index.ts            what the theme exports: components, CSS, fonts, icons, theme colour
  components/         one component per section
  styles/             tokens, frame, sections, motion, print
themes/persona5/lib/collage.ts        the ransom-note lettering generator
themes/gta6/components/SunsetScene.tsx  the hero sky, sun, skyline and palm trees (inline SVG)
```

To add a theme, copy a folder in `themes/`, keep the same exports in `index.ts`,
and add its name to `THEMES` in `next.config.ts`.
```

Printing the page (Ctrl/Cmd + P) gives a plain black-and-white version.

## Credits

- Persona 5 theme design and the shared page structure adapted from **Stage** by Tiziano Basile, MIT License.
- Fonts: Dela Gothic One, Fraunces, Courier Prime, Anton, Literata, Inter, Fira Code, all SIL Open Font License 1.1.
- The Persona 5 theme is inspired by Persona 5. Not affiliated with or endorsed by Atlus or SEGA; no game assets are used.
- The Sunset theme is inspired by Grand Theft Auto VI. Not affiliated with or endorsed by Rockstar Games or
  Take-Two Interactive. All artwork is original: no game logos, wordmarks, characters,
  fonts or other assets are used.

See `THIRD_PARTY_NOTICES.md`.
