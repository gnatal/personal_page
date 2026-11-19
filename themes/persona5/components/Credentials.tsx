import { certifications, education } from "@/content/resume";
import { SectionHead } from "./SectionHead";

export function Credentials() {
  return (
    <>
      <section id="certifications" aria-labelledby="certifications-title">
        <SectionHead id="certifications-title" text="Certifications" />
        <ul className="notes notes--grid">
          {certifications.map((c) => (
            <li key={c.name} className="note-wrap">
              <div className="note note--compact">
                <p className="note__date">
                  <b>{c.year}</b>
                  <span>{c.month}</span>
                </p>
                <div className="note__body">
                  <h3 className="note__title">{c.name}</h3>
                  <p className="note__meta">
                    <b>{c.issuer}</b>
                    {c.until && <> · valid until {c.until}</>}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section id="education" aria-labelledby="education-title">
        <SectionHead id="education-title" text="Education" />
        <ul className="notes notes--grid">
          {education.map((e) => (
            <li key={e.degree} className="note-wrap">
              <div className="note note--compact">
                <p className="note__date">
                  <span className="visually-hidden">
                    {e.start} to {e.end}
                  </span>
                  <b aria-hidden="true">{e.end}</b>
                  <span aria-hidden="true">from {e.start}</span>
                </p>
                <div className="note__body">
                  <h3 className="note__title">{e.degree}</h3>
                  <p className="note__meta">
                    <b>{e.school}</b>
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
