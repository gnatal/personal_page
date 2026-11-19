import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Credentials } from "@/components/Credentials";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Skills } from "@/components/Skills";
import { Ticker } from "@/components/Ticker";
import { experience, profile } from "@/content/resume";

export default function Home() {
  const current = experience[0];
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.headline,
    email: profile.email ? `mailto:${profile.email}` : undefined,
    address: { "@type": "PostalAddress", addressLocality: "Mendoza", addressCountry: "AR" },
    knowsLanguage: profile.spokenLanguages,
    sameAs: [profile.linkedin, profile.github].filter(Boolean),
    worksFor: current && current.end === null ? { "@type": "Organization", name: current.company } : undefined,
  };

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" tabIndex={-1}>
        <Hero />
        <div className="wrap">
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Credentials />
          <Contact />
        </div>
        <Ticker />
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
      />
    </>
  );
}
