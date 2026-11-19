/**
 * Everything on the page comes from this file.
 * Edit it, commit, push: Vercel rebuilds and redeploys on its own.
 *
 * Tips
 * - Newest role goes FIRST in `experience`.
 * - `end: null` means "now" (current role).
 * - Leave `email` or `linkedin` empty ("") to hide that link.
 * - To swap the resume PDF or photo, replace the files in /public with the same names.
 */

export type Link = { label: string; href: string };

export type Role = {
  title: string;
  company: string;
  /** Agency or network the work came through, e.g. "Toptal". */
  via?: string;
  start: number;
  /** null = current role */
  end: number | null;
  highlights: string[];
  stack: string[];
};

export type Project = {
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  links: Link[];
  /** Optional code sample shown on featured projects (C is highlighted). */
  code?: string;
  featured?: boolean;
};

export type Certification = {
  name: string;
  issuer: string;
  /** Short month, e.g. "Sep" */
  month: string;
  year: number;
  until?: string;
};

export const profile = {
  name: "Guilherme Natal",
  firstName: "Guilherme",
  lastName: "Natal",
  /** Collage logo in the top-left corner. */
  brand: "G.Natal",
  /** Two tape strips under your name: the first is white, the second red. */
  role: ["Full-stack engineer", "Engineering leader"],
  /** Used for the browser tab title and link previews. */
  headline: "Senior full-stack engineer and engineering leader",
  /** Used for search results and link previews (keep under ~160 characters). */
  summary:
    "Senior full-stack engineer and engineering leader in Mendoza, Argentina. Nine years shipping web and mobile products, from zero to production.",
  location: "Mendoza, Argentina",
  locationShort: "Mendoza, AR",
  timezone: "UTC-3",
  stack: ["TypeScript", "React", "Node.js", "Go", "Python"],
  email: "guilhermenatal47@gmail.com",
  linkedin: "https://www.linkedin.com/in/guilherme-natal/",
  github: "https://github.com/gnatal",
  resumePdf: "/guilherme-natal-resume.pdf",
  spokenLanguages: ["Portuguese", "Spanish", "English"],
};

/** The three stamps next to your photo. */
export const stats = [
  { value: "9+", label: "Years shipping" },
  { value: "40K", label: "Users scaled" },
  { value: "3", label: "Languages" },
];

/** Scrolling ticker near the bottom of the page. */
export const ticker = [
  "Open to fractional CTO and senior contract work",
  "Based in Mendoza, Argentina (UTC-3)",
  "Portuguese, Spanish, English",
  "Toptal network since 2022",
  "Claude Certified Architect",
];

export const about = [
  "I'm a full-stack engineer with nearly ten years of building web and mobile products. Most recently I led engineering as Head of Engineering and CTO at early-stage startups, taking products from zero to production.",
  "My focus is distributed back-end architecture, payments and third-party API integrations. I work hands-on across TypeScript, React, React Native, Node.js, Go and Python. I also write C: CExpress, my Express-style web framework, is my answer to bloated software.",
  "I communicate clearly and directly in English, Portuguese and Spanish. I live in Mendoza, Argentina, and I've been part of the Toptal network since 2022.",
];

export const contactLead = "Building something? Let's talk.";

export const experience: Role[] = [
  {
    title: "Head of Engineering",
    company: "Trbby",
    start: 2025,
    end: 2026,
    highlights: [
      "Led the engineering team for an AI-powered social media management platform (X, Instagram, LinkedIn), owning delivery, release quality, testing strategy and the technical roadmap.",
      "Designed and shipped the alpha from scratch, including a queue-based publisher built on Valkey Streams running on Kubernetes (Azure AKS).",
      "Built the LinkedIn and Instagram Graph API integrations and the notification system, and drove Meta App Review to secure Instagram publishing permissions.",
      "Integrated Stripe subscriptions and coupon handling.",
    ],
    stack: ["React", "TypeScript", "Python", "FastAPI", "Kubernetes", "Valkey Streams", "Stripe"],
  },
  {
    title: "Back-end Developer",
    company: "LFG.TV",
    via: "Toptal",
    start: 2025,
    end: 2025,
    highlights: [
      "Built the landing page that captured 7,000 pre-registrations before the product launched.",
      "Integrated Stripe and wired its webhooks into the API to automate subscriptions and renewals, generating thousands of dollars in revenue.",
      "Built the real-time streamer chat with links and emotes.",
    ],
    stack: ["Go", "Python", "GraphQL", "PostgreSQL", "Hasura", "Docker"],
  },
  {
    title: "Front-end / Full-stack Developer",
    company: "Amber AI",
    start: 2025,
    end: 2025,
    highlights: [
      "Implemented in-browser VoIP so users could talk with an AI agent.",
      "Shipped an iOS app from scratch in four weeks with React Native, from Figma designs.",
      "Built a vibe-matching system to connect new users.",
    ],
    stack: ["React", "React Native", "TypeScript", "Node.js", "LLMs"],
  },
  {
    title: "Full-stack Developer",
    company: "ItsWare",
    start: 2024,
    end: 2025,
    highlights: [
      "Built the React Native app and the Go API single-handedly from scratch, both key to the company's later funding round, and published the app to the App Store.",
      "Built an OAuth 2 server with MFA in Deno, enabling integrations across the company's platforms.",
    ],
    stack: ["Go", "React Native", "Next.js", "Supabase", "Deno", "AWS ECS"],
  },
  {
    title: "Full-stack Developer",
    company: "Kermit Labs",
    start: 2023,
    end: 2024,
    highlights: [
      "Built WebGL 3D previews for made-to-order luxury cars.",
      "Created an image-layering algorithm that composites many variants into a single image.",
      "Built an npm package for digital twins that the company sold to client businesses.",
    ],
    stack: ["React", "Next.js", "Babylon.js", "Node.js", "Prisma", "Terraform"],
  },
  {
    title: "Next.js Developer",
    company: "DCDCO",
    via: "Toptal",
    start: 2023,
    end: 2024,
    highlights: [
      "Cut page load time from 10 seconds to 1 and raised SEO scores above 90, migrating the legacy site with no disruption.",
      "Resolved crashes and tracking issues (Klaviyo), added Redis caching, and managed up to 5 reports.",
    ],
    stack: ["Next.js", "React", "Prismic", "Storyblok", "Redis", "Vercel"],
  },
  {
    title: "Full-stack React Native Developer",
    company: "RedKangaroo",
    via: "Toptal",
    start: 2023,
    end: 2023,
    highlights: [
      "Built a React Native app that lets brands mint tokens and sell them as discounts.",
      "Rebuilt a failing vanilla JavaScript back end as serverless functions on AWS Lambda.",
    ],
    stack: ["React Native", "Node.js", "AWS Lambda", "Firebase", "Stripe"],
  },
  {
    title: "Senior React Developer",
    company: "Imagine Replay",
    via: "Toptal",
    start: 2022,
    end: 2023,
    highlights: [
      "Built the creator admin system for an OTT streaming platform, so creators could manage shows and payments.",
      "Fixed the show creation, payment and login flows, and decoupled user and admin analytics in BigQuery.",
    ],
    stack: ["React", "Redux", "BigQuery", "Jest", "Cypress"],
  },
  {
    title: "Full-stack Developer",
    company: "Ormuco",
    start: 2021,
    end: 2022,
    highlights: [
      "Built a decentralized file system synced with S3-style object storage.",
      "Switched to pointer-based file handling, saving terabytes of storage and making renames and deletes near-instant.",
    ],
    stack: ["TypeScript", "C++", "Python", "Kubernetes", "Docker"],
  },
  {
    title: "Senior Full-stack Developer",
    company: "Seu Guru",
    start: 2021,
    end: 2021,
    highlights: [
      "Built the main React site and the insurer admin in Next.js, and integrated PagSeguro payments in Ruby on Rails.",
    ],
    stack: ["React", "Next.js", "Ruby on Rails", "Tailwind CSS"],
  },
  {
    title: "CTO",
    company: "Encontre Beleza",
    start: 2019,
    end: 2021,
    highlights: [
      "Built the full cloud infrastructure on GCP and led a team of up to 5 engineers.",
      "Gathered beauty profiles for 40,000 users and built a recommendation algorithm that matches makeup products to skin characteristics.",
    ],
    stack: ["PHP", "Laravel", "React", "MySQL", "GCP", "Firebase"],
  },
  {
    title: "Game and Mobile Developer",
    company: "CDT-ITAE-NCOM",
    start: 2017,
    end: 2019,
    highlights: [
      "Led a front-end team of 6 to 10 people on an event ticketing app and built its ticket back end.",
      "Built educational games for university students.",
    ],
    stack: ["C", "C++", "SDL", "Unity", "Ionic", "Angular"],
  },
];

export const projects: Project[] = [
  {
    name: "CExpress",
    tagline: "Express.js-style routing and middleware for C",
    description:
      "A lightweight HTTP/1.1 server and web framework written entirely in C11. Each process runs a single-threaded, non-blocking event loop, and a cluster of processes scales across cores. In a local TechEmpower harness run it placed first on updates, multiple queries, JSON and plaintext against actix and xitca-web.",
    stack: ["C11", "HTTP/1.1", "Event loop", "MIT licensed"],
    links: [{ label: "View on GitHub", href: "https://github.com/gnatal/cexpress" }],
    featured: true,
    code: `#include "cexpress.h"

static void hello(const Request *req, Response *res) {
    (void)req;
    res_send(res, "Hello, world!\\n");
}

int main(void) {
    App app;
    app_init(&app);
    app_get(&app, "/", hello);
    app_listen(&app, 8080);
    app_destroy(&app);
    return 0;
}`,
  },
  {
    name: "OAuth 2 server",
    tagline: "Auth for microservices",
    description:
      "A custom OAuth 2 implementation in Node.js and TypeScript that authenticates and authorizes microservices, with the goal of making auth for Express apps effortless.",
    stack: ["Node.js", "TypeScript", "TypeORM", "MySQL"],
    links: [],
  },
  {
    name: "iResume",
    tagline: "Your resume as a web page",
    description:
      "A mobile app for building resumes from templates. Each resume lives online as a web page and exports to PDF.",
    stack: ["React Native", "Expo", "Next.js", "Supabase"],
    links: [],
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["TypeScript", "JavaScript", "Go", "Python", "PHP", "C", "C++"] },
  { group: "Front-end & mobile", items: ["React", "Next.js", "React Native", "Vite", "Redux"] },
  { group: "Back-end", items: ["Node.js", "Express", "FastAPI", "GraphQL", "Hasura", "Deno", "Laravel", "Ruby on Rails"] },
  { group: "Data & messaging", items: ["PostgreSQL", "MySQL", "Redis", "Valkey Streams", "Supabase", "Firebase", "BigQuery"] },
  { group: "Cloud & DevOps", items: ["Kubernetes (Azure AKS)", "Docker", "AWS (Lambda, ECS, S3, Cognito)", "GCP", "Terraform", "Linux"] },
  { group: "Integrations", items: ["Stripe", "Meta and Instagram Graph API", "LinkedIn API", "OAuth 2", "Klaviyo"] },
  { group: "AI", items: ["LLM applications", "Voice AI agents", "Claude (Anthropic certified)"] },
  { group: "Spoken", items: profile.spokenLanguages },
];

export const certifications: Certification[] = [
  { name: "Claude Certified Architect, Foundations", issuer: "Anthropic", month: "Sep", year: 2026, until: "Sep 2027" },
  { name: "Learn Rust by Building Real Applications", issuer: "Udemy", month: "Oct", year: 2023 },
  { name: "Blockchain A-Z", issuer: "Udemy", month: "Aug", year: 2023 },
  { name: "React Native: Advanced Concepts", issuer: "Udemy", month: "Jul", year: 2023 },
  { name: "AWS Lambda: A Practical Guide", issuer: "Udemy", month: "Apr", year: 2023 },
];

export const education = [
  { degree: "Bachelor's Degree in Engineering", school: "Universidade de Brasília", start: 2013, end: 2018 },
];

/** Top menu. Each id must match a section on the page. */
export const nav = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];
