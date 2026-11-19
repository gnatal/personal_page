import { Fragment, type CSSProperties } from "react";
import { profile, stats } from "@/content/resume";
import { MotionToggle } from "@/components/MotionToggle";
import { SunsetScene } from "./SunsetScene";

const delay = (s: string) => ({ "--delay": s }) as CSSProperties;

/** A HUD-style mini map with a blip on your city. Decorative. */
function Minimap() {
  return (
    <div className="minimap" aria-hidden="true">
      <div className="minimap__radar">
        <span className="minimap__north">N</span>
        <span className="minimap__pin" />
        <span className="minimap__blip" />
      </div>
      <div className="minimap__info">
        <b>{profile.locationShort}</b>
        <span>{profile.timezone} · online</span>
        <span className="minimap__bars">
          <i />
          <i />
        </span>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <SunsetScene />

      <div className="hero__inner">
        <div className="hero__text">
          <h1 id="hero-title" className="hero__name">
            <span className="visually-hidden">{profile.name}</span>
            <span className="hero__first rise" aria-hidden="true" style={delay("0.1s")}>
              {profile.firstName}
            </span>
            <span className="hero__last rise" aria-hidden="true" style={delay("0.25s")}>
              <span className="grad-text">{profile.lastName}</span>
            </span>
          </h1>

          <p className="hero__role rise" style={delay("0.5s")}>
            {profile.role.map((line, i) => (
              <Fragment key={line}>
                {i > 0 && <span className="visually-hidden">, </span>}
                <span className={`neon${i % 2 ? " neon--cyan" : ""}`}>{line}</span>
              </Fragment>
            ))}
          </p>

          <p className="hero__stack rise" style={delay("0.65s")}>
            {profile.stack.map((item, i) => (
              <Fragment key={item}>
                {i > 0 && (
                  <>
                    <span className="hero__dot" aria-hidden="true">
                      {" ◆ "}
                    </span>
                    <span className="visually-hidden">, </span>
                  </>
                )}
                {item}
              </Fragment>
            ))}
          </p>

          <div className="hero__actions rise" style={delay("0.8s")}>
            {profile.email && (
              <a className="btn" href={`mailto:${profile.email}`}>
                Email me
              </a>
            )}
            <a className="btn btn--ghost" href={profile.resumePdf} download>
              Download resume
            </a>
          </div>

          <div className="hero__hud rise" style={delay("0.95s")}>
            <Minimap />
            <MotionToggle />
          </div>
        </div>

        <div className="hero__aside">
          {profile.availability && (
            <p className="wanted rise" style={delay("1.1s")}>
              <span className="wanted__stars" aria-hidden="true">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </span>
              <span className="wanted__label">{profile.availability}</span>
            </p>
          )}
          <figure className="portrait rise" style={delay("0.35s")}>
            {/* Plain <img>: the site is a static export and the portrait is pre-sized. */}
            <img
              src="/portrait-800.webp"
              srcSet="/portrait-480.webp 480w, /portrait-800.webp 800w"
              sizes="(max-width: 860px) 70vw, 340px"
              width={800}
              height={800}
              alt={`Portrait of ${profile.name}`}
              fetchPriority="high"
            />
          </figure>
          <ul className="hud-stats" aria-label="At a glance">
            {stats.map((s, i) => (
              <li key={s.label} className="hud-stat rise" style={delay(`${0.9 + i * 0.12}s`)}>
                <b>{s.value}</b>
                <span>{s.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
