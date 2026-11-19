import { nav, profile } from "@/content/resume";
import { GameMenu } from "@/components/GameMenu";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="brand" href="#top">
          <span className="visually-hidden">{profile.name}, back to top</span>
          <span className="brand__mark grad-text" aria-hidden="true">
            {profile.brand}
          </span>
        </a>
        <GameMenu items={nav} label="Main menu" />
      </div>
    </header>
  );
}
