import { about, profile } from "@/content/resume";
import { SectionHead } from "./SectionHead";

/** The about text arrives as text messages on an in-game phone, next to a postcard from home. */
export function About() {
  const [city, country] = profile.location.split(",").map((part) => part.trim());
  const initials = `${profile.firstName[0]}${profile.lastName[0]}`;

  return (
    <section id="about" aria-labelledby="about-title">
      <SectionHead id="about-title" text="About me" kicker="Brief" />
      <div className="about">
        <div className="phone">
          <div className="phone__screen">
            <div className="phone__top" aria-hidden="true">
              <span className="phone__avatar">{initials}</span>
              <span className="phone__who">
                <b>{profile.firstName}</b>
                <span>online</span>
              </span>
            </div>
            <div className="phone__thread">
              {about.map((paragraph) => (
                <p className="bubble" key={paragraph.slice(0, 24)}>
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="phone__compose" aria-hidden="true">
              <span>Reply…</span>
              <span className="phone__send">➤</span>
            </div>
          </div>
        </div>

        <figure className="postcard" aria-hidden="true">
          <div className="postcard__scene">
            <svg className="postcard__peaks" viewBox="0 0 600 160" preserveAspectRatio="none" focusable="false">
              <path d="M0 160V118L46 92 78 104 128 54 158 72 206 26 238 50 262 40 318 88 352 70 402 102 446 64 480 80 528 46 568 78 600 66V160Z" />
              <path className="postcard__snow" d="M128 54 142 62 150 58 158 72 145 66 136 70ZM206 26 222 38 230 34 238 50 226 44 214 48ZM528 46 540 56 548 52 556 64 544 60 536 62Z" />
            </svg>
            <div className="postcard__vines" />
          </div>
          <p className="postcard__hello">Greetings from</p>
          <p className="postcard__city">
            <span className="grad-text">{city}</span>
          </p>
          {country && <p className="postcard__country">{country}</p>}
          <span className="postcard__stamp">
            <span>{profile.timezone}</span>
          </span>
        </figure>
      </div>
    </section>
  );
}
