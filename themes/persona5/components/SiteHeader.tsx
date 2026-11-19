import { nav, profile } from "@/content/resume";
import { Collage } from "./Collage";
import { GameMenu } from "@/components/GameMenu";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="brand" href="#top">
          <span className="visually-hidden">{profile.name}, back to top</span>
          <Collage text={profile.brand} letterCase="upper" step={0.03} />
        </a>
        <GameMenu items={nav} label="Main menu" />
      </div>
    </header>
  );
}
