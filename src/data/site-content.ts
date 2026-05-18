import type { IconType } from "react-icons";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiPhone
} from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi2";
import {
  SiExpress,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiRedis,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript
} from "react-icons/si";

export type NavItem = { id: string; label: string };

export type ContactLink = {
  href: string;
  label: string;
  value: string;
  icon: IconType;
  external?: boolean;
};

export type TechPill = { label: string; icon: IconType };

export type StatItem = { value: string; label: string };

export type SkillGroup = {
  title: string;
  icon: IconType;
  items: { name: string; level: number }[];
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  summary: string;
  highlights: string[];
  stack: string[];
};

export type ProjectItem = {
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  href?: string;
  repoLabel: string;
  metrics: string[];
  category: "Self-built Product" | "Open Source Contributor";
  featured?: boolean;
};

export const profile = {
  name: "Suraj Kashyap",
  handle: "@suraj-webkul",
  role: "Full-Stack Engineer",
  tagline: "MERN · React · Next.js · Node.js · TypeScript · AI Integrations",
  locations: ["Noida", "Delhi NCR", "Gurgaon"],
  status: "Open to Opportunities",
  email: "surajkashyap9911@gmail.com",
  phone: "+91 93159 81404",
  pitch:
    "Full-Stack Engineer with 4.5+ years building production-grade MERN products with React, Next.js, Node.js, TypeScript, and MongoDB. I ship typed APIs, polished UI systems, and AI-assisted workflows powered by the OpenAI API, OCR, NLP, and real-time integrations."
};

export const navItems: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" }
];

export const contactLinks: ContactLink[] = [
  {
    href: "mailto:surajkashyap9911@gmail.com",
    label: "Email",
    value: "surajkashyap9911@gmail.com",
    icon: FiMail
  },
  {
    href: "tel:+919315981404",
    label: "Phone",
    value: "+91 93159 81404",
    icon: FiPhone
  },
  {
    href: "https://github.com/suraj-webkul",
    label: "GitHub",
    value: "github.com/suraj-webkul",
    icon: FiGithub,
    external: true
  },
  {
    href: "https://linkedin.com/in/kashyap-suraj",
    label: "LinkedIn",
    value: "linkedin.com/in/kashyap-suraj",
    icon: FiLinkedin,
    external: true
  }
];

export const techPills: TechPill[] = [
  { label: "React", icon: SiReact },
  { label: "Next.js", icon: SiNextdotjs },
  { label: "TypeScript", icon: SiTypescript },
  { label: "Node.js", icon: SiNodedotjs },
  { label: "NestJS", icon: SiNestjs },
  { label: "MongoDB", icon: SiMongodb },
  { label: "PostgreSQL", icon: SiPostgresql },
  { label: "Socket.IO", icon: SiSocketdotio },
  { label: "AI Integrations", icon: HiOutlineSparkles }
];

export const stats: StatItem[] = [
  { value: "4.5+", label: "Years Experience" },
  { value: "6+", label: "Major Products" },
  { value: "47K+", label: "OSS GitHub Stars" },
  { value: "8.8/10", label: "BCA CGPA" }
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    icon: SiReact,
    items: [
      { name: "React.js / Next.js", level: 95 },
      { name: "TypeScript / JavaScript (ES6+)", level: 93 },
      { name: "Tailwind CSS / SCSS", level: 91 },
      { name: "Redux / Component Systems", level: 89 }
    ]
  },
  {
    title: "Backend",
    icon: SiNodedotjs,
    items: [
      { name: "Node.js / Express", level: 92 },
      { name: "NestJS / REST API Design", level: 90 },
      { name: "JWT · OAuth 2.0 · RBAC", level: 90 },
      { name: "WebSockets / Socket.IO", level: 88 }
    ]
  },
  {
    title: "Data & Infra",
    icon: SiMongodb,
    items: [
      { name: "MongoDB / PostgreSQL", level: 90 },
      { name: "Prisma · Redis", level: 86 },
      { name: "Docker · GitHub Actions", level: 88 },
      { name: "Kafka · RabbitMQ", level: 80 }
    ]
  },
  {
    title: "AI & Tooling",
    icon: HiOutlineSparkles,
    items: [
      { name: "OpenAI API · AI Tooling", level: 93 },
      { name: "RAG Pipelines · OCR · NLP", level: 89 },
      { name: "Prompt Engineering", level: 91 },
      { name: "Claude · Cursor · Copilot", level: 92 }
    ]
  }
];

export const experiences: ExperienceItem[] = [
  {
    company: "Webkul Software Pvt. Ltd.",
    role: "Full-Stack Engineer — MERN & Frontend Product Engineering",
    period: "Dec 2022 – Mar 2026",
    location: "Noida, India",
    type: "Full-time",
    summary:
      "Owned end-to-end delivery of MERN products across multiple commerce and CRM surfaces, focusing on performance, typed contracts, and shipping AI-assisted workflows.",
    highlights: [
      "Shipped React/Next.js + Node.js features into production for a large open-source commerce platform.",
      "Drove typed frontend-backend contracts and reusable component systems used across teams.",
      "Integrated OpenAI API, OCR, and NLP into product workflows with measurable latency targets.",
      "Set review standards for scalable JavaScript and TypeScript work across squads."
    ],
    stack: [
      "React.js",
      "Next.js",
      "Node.js",
      "TypeScript",
      "MongoDB",
      "OpenAI API",
      "Docker",
      "GitHub Actions"
    ]
  },
  {
    company: "Opmac",
    role: "Full-Stack Developer — React & Node.js",
    period: "Jan 2022 – Dec 2022",
    location: "Ghaziabad, India",
    type: "Full-time",
    summary:
      "Delivered customer-facing React applications and Node.js services with a bias toward fast iteration and clean delivery.",
    highlights: [
      "Built React UIs with typed contracts against Node.js APIs.",
      "Shipped NLP-assisted product features into production flows.",
      "Improved stakeholder review cycles with cleaner staging workflows."
    ],
    stack: ["React.js", "Node.js", "TypeScript", "REST APIs", "MongoDB", "PostgreSQL", "NLP Integration"]
  }
];

export const projects: ProjectItem[] = [
  {
    title: "OpenMeet",
    tagline: "Self-hostable real-time video conferencing",
    description:
      "Full TypeScript meeting platform: pre-join lobby with device preview, instant rooms, real-time chat, reactions, hand-raise, and Argon2-hardened sessions. Built on Next.js, NestJS, Socket.IO with a Redis adapter, LiveKit SFU, PostgreSQL + Prisma, inside a Turbo monorepo with Vitest and Playwright coverage.",
    stack: ["Next.js", "NestJS", "TypeScript", "Socket.IO", "LiveKit", "PostgreSQL", "Redis", "Prisma"],
    href: "https://github.com/suraj-kashyap-dev/open-meet",
    repoLabel: "suraj-kashyap-dev/open-meet",
    metrics: ["Public repo", "Real-time video", "Turbo monorepo"],
    category: "Self-built Product",
    featured: true
  },
  {
    title: "OpenCRM",
    tagline: "Typed full-stack CRM from scratch",
    description:
      "CRM built around Next.js, TypeScript, Node.js, and MongoDB with JWT auth, RBAC, custom fields, data grids, and Kanban pipeline views. End-to-end ownership: schema design, API contracts, frontend architecture, and admin-friendly CRM surfaces.",
    stack: ["Next.js", "Node.js", "TypeScript", "MongoDB", "JWT / RBAC"],
    href: "https://github.com/suraj-kashyap-dev/open-crm",
    repoLabel: "suraj-kashyap-dev/open-crm",
    metrics: ["Public repo", "Full-stack CRM", "Next.js + Node.js"],
    category: "Self-built Product",
    featured: true
  },
  {
    title: "Bagisto",
    tagline: "Open-source commerce platform contributor",
    description:
      "Merged production-facing work across commerce admin flows, customer storefront behavior, and data tooling for a large open-source platform used by thousands of stores worldwide.",
    stack: ["Commerce", "Open Source", "Frontend Systems"],
    href: "https://github.com/bagisto/bagisto",
    repoLabel: "bagisto/bagisto",
    metrics: ["26K+ GitHub stars", "Open source", "Commerce platform"],
    category: "Open Source Contributor"
  },
  {
    title: "Krayin CRM",
    tagline: "Open-source CRM platform contributor",
    description:
      "Contributed merged fixes and workflow improvements across CRM UI, migration flows, and release upkeep for a long-running open-source CRM product.",
    stack: ["CRM Workflows", "Public Repo", "Issue Resolution"],
    href: "https://github.com/krayin/laravel-crm",
    repoLabel: "krayin/laravel-crm",
    metrics: ["21K+ GitHub stars", "Open source", "CRM workflows"],
    category: "Open Source Contributor"
  }
];

export const techIcons: Record<string, IconType> = {
  React: SiReact,
  "React.js": SiReact,
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  "Node.js": SiNodedotjs,
  NestJS: SiNestjs,
  Express: SiExpress,
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
  "Socket.IO": SiSocketdotio,
  Redis: SiRedis,
  Prisma: SiPrisma,
  "Tailwind CSS": SiTailwindcss
};
