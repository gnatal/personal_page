import { contactLead, profile } from "@/content/resume";
import { SectionHead } from "./SectionHead";

export function Contact() {
  const links = [
    profile.email && { label: "Email", href: `mailto:${profile.email}` },
    profile.linkedin && { label: "LinkedIn", href: profile.linkedin, external: true },
    profile.github && { label: "GitHub", href: profile.github, external: true },
    profile.resumePdf && { label: "Resume PDF", href: profile.resumePdf, download: true },
  ].filter(Boolean) as { label: string; href: string; external?: boolean; download?: boolean }[];

  return (
    <section id="contact" aria-labelledby="contact-title">
      <SectionHead id="contact-title" text="Contact" />
      <p className="strips contact__lead">
        <span className="strip strip--w">{contactLead}</span>
      </p>
      <ul className="contacts">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              rel={l.external ? "me noopener" : undefined}
              download={l.download || undefined}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
      {profile.email && (
        <p className="contact__plain">
          Or write to <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </p>
      )}
    </section>
  );
}
