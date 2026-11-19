import { about, profile } from "@/content/resume";
import { SectionHead } from "./SectionHead";

/** Persona-style dialog box: speaker tag, text, blinking ▼. */
export function About() {
  return (
    <section id="about" aria-labelledby="about-title">
      <SectionHead id="about-title" text="About me" />
      <div className="dialog">
        <p className="dialog__name" aria-hidden="true">
          <span>{profile.firstName}</span>
        </p>
        <div className="dialog__text">
          {about.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
        <span className="dialog__next blink" aria-hidden="true">
          ▼
        </span>
      </div>
    </section>
  );
}
