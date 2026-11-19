import { contactLead, profile } from "@/content/resume";
import { SectionHead } from "./SectionHead";

export function Contact() {
  const links = [
    profile.email && { label: "Email", hint: "Write", href: `mailto:${profile.email}` },
    profile.linkedin && { label: "LinkedIn", hint: "Connect", href: profile.linkedin, external: true },
    profile.github && { label: "GitHub", hint: "Code", href: profile.github, external: true },
    profile.resumePdf && { label: "Resume PDF", hint: "Download", href: profile.resumePdf, download: true },
  ].filter(Boolean) as { label: string; hint: string; href: string; external?: boolean; download?: boolean }[];

  return (
    <section id="contact" aria-labelledby="contact-title">
      <SectionHead id="contact-title" text="Contact" kicker="Phone" />
      <p className="contact__lead">{contactLead}</p>
      <ul className="contacts">
        {links.map((l) => (
          <li key={l.label}>
            <a
              className="contact"
              href={l.href}
              rel={l.external ? "me noopener" : undefined}
              download={l.download || undefined}
            >
              <span className="contact__hint" aria-hidden="true">
                {l.hint}
              </span>
              <span className="contact__label">{l.label}</span>
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
