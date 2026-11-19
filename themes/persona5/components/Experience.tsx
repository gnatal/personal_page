import type { CSSProperties } from "react";
import { experience } from "@/content/resume";
import { SectionHead } from "./SectionHead";

const TILTS = ["-0.6deg", "0.5deg", "-0.3deg", "0.7deg", "-0.8deg", "0.3deg"];

/** Each role is a crooked paper note pinned to the red stage, newest first. */
export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title">
      <SectionHead id="experience-title" text="Experience" />
      <ol className="notes">
        {experience.map((role, i) => {
          const end = role.end === null ? "Now" : role.end;
          const range = end === role.start ? `${role.start}` : `${role.start} to ${end}`;
          return (
            <li
              key={`${role.company}-${role.start}-${role.title}`}
              className="note-wrap"
              style={{ "--tilt": TILTS[i % TILTS.length] } as CSSProperties}
            >
              <article className="note note--role">
                <p className="note__date">
                  <span className="visually-hidden">{range}</span>
                  <b aria-hidden="true">{role.start}</b>
                  {end !== role.start && <span aria-hidden="true">to {end}</span>}
                </p>
                <div className="note__body">
                  <h3 className="note__title">{role.title}</h3>
                  <p className="note__meta">
                    <b>{role.company}</b>
                    {role.via && <> · via {role.via}</>}
                  </p>
                  <ul className="note__points">
                    {role.highlights.map((h) => (
                      <li key={h.slice(0, 32)}>{h}</li>
                    ))}
                  </ul>
                  <ul className="stamps note__stack" aria-label="Stack">
                    {role.stack.map((s) => (
                      <li key={s}>
                        <span className="stamp">{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
