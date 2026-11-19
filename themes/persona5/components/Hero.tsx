import { Fragment, type CSSProperties } from "react";
import { profile, stats } from "@/content/resume";
import { Collage } from "./Collage";
import { MotionToggle } from "@/components/MotionToggle";

const delay = (s: string) => ({ "--delay": s }) as CSSProperties;

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero__burst" aria-hidden="true" />

      <div className="hero__slab slam-l">
        <div className="hero__slab-inner">
          <h1 id="hero-title" className="hero__name">
            <span className="visually-hidden">{profile.name}</span>
            <Collage text={profile.firstName} schemes="hero" delay={0.45} className="hero__first" />
            <Collage text={profile.lastName} schemes="hero" delay={0.9} className="hero__last" />
          </h1>

          <p className="hero__role slam-l" style={delay("1.2s")}>
            {profile.role.map((line, i) => (
              <Fragment key={line}>
                {i > 0 && <br />}
                <span className={i % 2 ? "hero__role-alt" : undefined}>{line}</span>
              </Fragment>
            ))}
          </p>

          <p className="hero__stack">
            {profile.stack.map((item, i) => (
              <Fragment key={item}>
                {i > 0 && (
                  <>
                    <span aria-hidden="true"> ▸ </span>
                    <span className="visually-hidden">, </span>
                  </>
                )}
                {item}
              </Fragment>
            ))}
          </p>

          <p className="hero__sys" aria-hidden="true">
            <span>SYS://{profile.lastName.toUpperCase()} ONLINE ·</span>
            <span>{profile.locationShort.toUpperCase()} ·</span>
            <span>
              {profile.timezone} <span className="blink">█</span>
            </span>
          </p>

          <div className="hero__actions">
            {profile.email && (
              <a className="btn btn--light" href={`mailto:${profile.email}`}>
                <span>Email me</span>
              </a>
            )}
            <a className="btn" href={profile.resumePdf} download>
              <span>Download resume</span>
            </a>
          </div>

          <MotionToggle />
        </div>
      </div>

      <div className="hero__aside">
        <figure className="portrait drop" style={delay("1.05s")}>
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
        <ul className="stats hero__stats" aria-label="At a glance">
          {stats.map((s, i) => (
            <li key={s.label} className="drop" style={delay(`${1.5 + i * 0.2}s`)}>
              <span className={`stat${i === 1 ? " stat--black" : i === 2 ? " stat--red" : ""}`}>
                <b>{s.value}</b>
                <span>{s.label}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
