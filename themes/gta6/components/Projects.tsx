import { projects } from "@/content/resume";
import { highlightC } from "@/lib/highlight";
import { SectionHead } from "./SectionHead";

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title">
      <SectionHead id="projects-title" text="Projects" kicker="Side jobs" />
      <div className="projects">
        {projects.map((p) => (
          <article key={p.name} className={`project${p.featured ? " project--featured" : ""}`}>
            <div className="project__text">
              <h3 className="project__name">
                <span className="grad-text">{p.name}</span>
              </h3>
              <p className="project__tagline">{p.tagline}</p>
              <p className="project__desc">{p.description}</p>
              <ul className="tags tags--pink project__stack" aria-label="Built with">
                {p.stack.map((s) => (
                  <li key={s} className="tag">
                    {s}
                  </li>
                ))}
              </ul>
              {p.links.length > 0 && (
                <p className="project__links">
                  {p.links.map((l) => (
                    <a key={l.href} className="btn btn--ghost" href={l.href} rel="noopener">
                      {l.label}
                    </a>
                  ))}
                </p>
              )}
            </div>
            {p.code && (
              <div className="terminal">
                <p className="terminal__bar" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                  <span>main.c</span>
                </p>
                <pre className="code" aria-label={`${p.name} code example`}>
                  <code>{highlightC(p.code)}</code>
                </pre>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
