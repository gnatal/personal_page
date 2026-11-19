import { experience } from "@/content/resume";
import { SectionHead } from "./SectionHead";

/** Each role is a mission card on a neon timeline, newest first. */
export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title">
      <SectionHead id="experience-title" text="Experience" kicker="Mission log" />
      <ol className="missions">
        {experience.map((role, i) => {
          const end = role.end === null ? "Now" : role.end;
          const range = end === role.start ? `${role.start}` : `${role.start} to ${end}`;
          return (
            <li key={`${role.company}-${role.start}-${role.title}`} className="mission">
              <article className="mission__card">
                <header className="mission__head">
                  <p className="mission__years">
                    <span className="visually-hidden">{range}</span>
                    <span aria-hidden="true">
                      {role.start}
                      {end !== role.start && <> – {end}</>}
                    </span>
                  </p>
                  <p className="mission__no" aria-hidden="true">
                    M-{String(experience.length - i).padStart(2, "0")}
                  </p>
                </header>
                <h3 className="mission__title">{role.title}</h3>
                <p className="mission__meta">
                  <b>{role.company}</b>
                  {role.via && <> · via {role.via}</>}
                </p>
                <ul className="mission__points">
                  {role.highlights.map((h) => (
                    <li key={h.slice(0, 32)}>{h}</li>
                  ))}
                </ul>
                <ul className="tags" aria-label="Stack">
                  {role.stack.map((s) => (
                    <li key={s} className="tag">
                      {s}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
