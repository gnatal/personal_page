import { certifications, education } from "@/content/resume";
import { SectionHead } from "./SectionHead";

/** Certifications and education as "achievement unlocked" toasts. */
export function Credentials() {
  return (
    <>
      <section id="certifications" aria-labelledby="certifications-title">
        <SectionHead id="certifications-title" text="Certifications" kicker="Achievements" />
        <ul className="toasts">
          {certifications.map((c) => (
            <li key={c.name} className="toast">
              <p className="toast__badge">
                <b>{c.year}</b>
                <span>{c.month}</span>
              </p>
              <div className="toast__body">
                <p className="toast__kicker" aria-hidden="true">
                  Achievement unlocked
                </p>
                <h3 className="toast__title">{c.name}</h3>
                <p className="toast__meta">
                  <b>{c.issuer}</b>
                  {c.until && <> · valid until {c.until}</>}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section id="education" aria-labelledby="education-title">
        <SectionHead id="education-title" text="Education" kicker="Training" />
        <ul className="toasts">
          {education.map((e) => (
            <li key={e.degree} className="toast toast--cyan">
              <p className="toast__badge">
                <span className="visually-hidden">
                  {e.start} to {e.end}
                </span>
                <b aria-hidden="true">{e.end}</b>
                <span aria-hidden="true">from {e.start}</span>
              </p>
              <div className="toast__body">
                <p className="toast__kicker" aria-hidden="true">
                  Training complete
                </p>
                <h3 className="toast__title">{e.degree}</h3>
                <p className="toast__meta">
                  <b>{e.school}</b>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
