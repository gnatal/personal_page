import { profile } from "@/content/resume";

export function SiteFooter() {
  // Static export: this is the date of the last build, i.e. the last time you pushed.
  const updated = new Intl.DateTimeFormat("en", { month: "long", year: "numeric" }).format(new Date());
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}. Updated {updated}.
        </p>
        <p className="site-footer__note">
          Site structure adapted from{" "}
          <a href="https://github.com/basteez/hugo-theme-stage" rel="noopener">
            Stage
          </a>{" "}
          by Tiziano Basile (MIT). Sunset theme inspired by Grand Theft Auto VI; not affiliated with or endorsed by
          Rockstar Games or Take-Two Interactive, and no game assets are used.
        </p>
      </div>
    </footer>
  );
}
