import { projects } from "@/content/resume";
import { highlightC } from "@/lib/highlight";
import { SectionHead } from "./SectionHead";

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title">
      <SectionHead id="projects-title" text="Projects" />
      <div className="projects">
        {projects.map((p) => (
          <article key={p.name} className={`slab slab--shadow-white project${p.featured ? " project--featured" : ""}`}>
            <div className="project__text">
              <h3 className="project__name">
                <span>{p.name}</span>
              </h3>
              <p className="project__tagline">{p.tagline}</p>
              <p className="project__desc">{p.description}</p>
              <ul className="stamps project__stack" aria-label="Built with">
                {p.stack.map((s) => (
                  <li key={s}>
                    <span className="stamp stamp--red">{s}</span>
                  </li>
                ))}
              </ul>
              {p.links.length > 0 && (
                <p className="project__links">
                  {p.links.map((l) => (
                    <a key={l.href} className="btn btn--light" href={l.href} rel="noopener">
                      <span>{l.label}</span>
                    </a>
                  ))}
                </p>
              )}
            </div>
            {p.code && (
              <pre className="code" aria-label={`${p.name} code example`}>
                <code>{highlightC(p.code)}</code>
              </pre>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
