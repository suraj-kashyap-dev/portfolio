export type NavigationItem = {
  label: string;
  href: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type Skill = {
  name: string;
  group: "Frontend" | "Backend" | "Ecosystem";
  level: number;
  note: string;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  summary: string;
  highlights: string[];
  stack: string[];
  systemStatus: string;
};

export type Project = {
  name: string;
  category: "Commerce" | "SaaS" | "Corporate" | "Portal";
  summary: string;
  stack: string[];
  featured: boolean;
  href: string;
  accent: string;
};

export type Service = {
  title: string;
  duration: string;
  summary: string;
  bullets: string[];
  stack: string[];
  featured?: boolean;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initial: string;
};

export const navigation: NavigationItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" }
];

export const hero = {
  availability: "Available for select product builds in 2026",
  eyebrow: "Engineering premium digital experiences",
  title: "Suraj.Dev",
  summary:
    "A full stack developer building resilient frontend systems, performance-focused web products, and maintainable WordPress ecosystems for ambitious teams.",
  primaryAction: {
    label: "Let's Architect Together",
    href: "#contact"
  },
  secondaryAction: {
    label: "Request CV",
    href: "#contact"
  },
  focusAreas: ["Next.js", "React", "Node.js", "WordPress", "Supabase"],
  runtimeTokens: ["JS", "TS", "React", "Node"]
};

export const heroStats: Stat[] = [
  { value: "3+", label: "Years of experience" },
  { value: "10+", label: "Global product launches" },
  { value: "A+", label: "Code review quality" },
  { value: "100%", label: "Delivery ownership" }
];

export const about = {
  eyebrow: "The Engineering Mindset",
  title: "Design for clarity. Build for scale. Ship with discipline.",
  paragraphs: [
    "This recreation mirrors the structure of the reference portfolio while keeping the implementation original and reusable. The emphasis is on a sharp technical voice, bold presentation, and modular Next.js code.",
    "The layout is designed around high-signal sections: proof of work, stack depth, role progression, service packaging, and direct contact routes."
  ],
  location: "Gwalior, India",
  remote: "Open to remote collaborations across SaaS, commerce, and internal tooling.",
  interests: ["Open Source", "UI Systems", "Cloud Architecture", "AI Workflows"],
  collaboration:
    "Have a complex brief? Turn it into a production-ready roadmap, component system, and delivery plan."
};

export const aboutMetrics: Stat[] = [
  { value: "10+", label: "Projects completed" },
  { value: "3+", label: "Years in production teams" },
  { value: "100%", label: "Client retention focus" }
];

export const skills: Skill[] = [
  {
    name: "React",
    group: "Frontend",
    level: 95,
    note: "Design systems, app shells, component patterns"
  },
  {
    name: "Next.js",
    group: "Frontend",
    level: 92,
    note: "App Router, SSR strategy, content architecture"
  },
  {
    name: "TypeScript",
    group: "Frontend",
    level: 88,
    note: "Contracts, typed UI state, safer refactors"
  },
  {
    name: "Tailwind / CSS",
    group: "Frontend",
    level: 90,
    note: "Rapid UI delivery and design token translation"
  },
  {
    name: "Node.js",
    group: "Backend",
    level: 86,
    note: "APIs, automation, integrations, deployment glue"
  },
  {
    name: "WordPress",
    group: "Ecosystem",
    level: 91,
    note: "Custom themes, WooCommerce builds, plugin work"
  }
];

export const experiences: Experience[] = [
  {
    company: "Coregenic Software",
    role: "Senior Full Stack Developer",
    period: "2024 - Present",
    location: "Remote / India",
    type: "Full-time",
    summary:
      "Leading architecture and frontend delivery for multi-team product work, with emphasis on performance, reliability, and maintainable component systems.",
    highlights: [
      "Reduced perceived load time through lazy UI segmentation and asset discipline.",
      "Supported high-concurrency traffic patterns across product surfaces.",
      "Introduced cleaner release routines for faster, lower-risk deployments.",
      "Set implementation standards for scalable JavaScript and TypeScript work."
    ],
    stack: ["React", "Next.js", "Node.js", "AWS", "Docker", "MongoDB"],
    systemStatus: "0 critical vulnerabilities"
  },
  {
    company: "Freelance / Global",
    role: "Independent Product Engineer",
    period: "2024 - 2025",
    location: "Remote",
    type: "Contract",
    summary:
      "Delivered marketing websites, internal dashboards, and commerce systems with a bias toward fast iteration and measurable business outcomes.",
    highlights: [
      "Built brand-forward landing pages tied to lead generation goals.",
      "Shipped custom CMS and admin experiences for non-technical teams.",
      "Optimized frontend bundles and cross-device UX for client launches."
    ],
    stack: ["Next.js", "React", "Supabase", "Tailwind CSS"],
    systemStatus: "Lead time trimmed release-over-release"
  },
  {
    company: "CoreTech Solutions",
    role: "Frontend Developer",
    period: "2023 - 2024",
    location: "India",
    type: "Full-time",
    summary:
      "Focused on modernizing client-facing websites and improving engineering quality inside a service-heavy delivery environment.",
    highlights: [
      "Translated visual direction into production-grade responsive interfaces.",
      "Created reusable sections to speed up future client delivery.",
      "Improved stakeholder review cycles with clearer staging workflows."
    ],
    stack: ["React", "Next.js", "TypeScript", "CSS"],
    systemStatus: "UI patterns standardized"
  },
  {
    company: "PowerFuel",
    role: "Web Developer",
    period: "2022 - 2023",
    location: "India",
    type: "Growth Commerce",
    summary:
      "Built and maintained an e-commerce stack tuned for conversion, order clarity, and operational simplicity.",
    highlights: [
      "Extended WooCommerce flows for business-specific order handling.",
      "Improved storefront performance and mobile conversion paths.",
      "Delivered custom workflows aligned with sales operations."
    ],
    stack: ["WordPress", "WooCommerce", "PHP", "MySQL", "JavaScript"],
    systemStatus: "Runtime stability maintained"
  }
];

export const projects: Project[] = [
  {
    name: "Fuel Commerce Platform",
    category: "Commerce",
    summary:
      "A high-speed commerce experience for regional delivery operations, tuned for mobile conversion and custom business logic.",
    stack: ["WordPress", "WooCommerce", "PHP", "MySQL", "JavaScript"],
    featured: true,
    href: "https://example.com/fuel-commerce",
    accent: "#6366f1"
  },
  {
    name: "Club Operations SaaS",
    category: "SaaS",
    summary:
      "A subscription product for fitness businesses with dashboards, access control, and growth-ready onboarding flows.",
    stack: ["React", "Next.js", "Node.js", "Supabase", "TypeScript"],
    featured: true,
    href: "https://example.com/club-ops",
    accent: "#a855f7"
  },
  {
    name: "Software Studio Website",
    category: "Corporate",
    summary:
      "A premium company site built to communicate technical depth, trust, and conversion-focused storytelling.",
    stack: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    featured: true,
    href: "https://example.com/software-studio",
    accent: "#3b82f6"
  },
  {
    name: "Public Jobs Discovery Portal",
    category: "Portal",
    summary:
      "A search-heavy content portal designed to keep large information sets easy to browse and maintain.",
    stack: ["Next.js", "Node.js", "TypeScript", "Search UX"],
    featured: false,
    href: "https://example.com/jobs-portal",
    accent: "#10b981"
  }
];

export const services: Service[] = [
  {
    title: "Full Stack Development",
    duration: "4-8 weeks",
    summary:
      "Delivery of robust web products from interface architecture to backend integration and deployment setup.",
    bullets: [
      "Custom application development",
      "Database and API planning",
      "Responsive frontend implementation",
      "Launch-ready production setup"
    ],
    stack: ["React", "Next.js", "Node.js"],
    featured: true
  },
  {
    title: "WordPress Development",
    duration: "2-4 weeks",
    summary:
      "Custom themes, WooCommerce workflows, and plugin tailoring for teams that need speed without losing flexibility.",
    bullets: [
      "Theme customization",
      "Plugin development",
      "WooCommerce implementations",
      "Performance cleanup"
    ],
    stack: ["WordPress", "PHP", "MySQL"]
  },
  {
    title: "E-commerce Systems",
    duration: "6-10 weeks",
    summary:
      "Storefronts and admin tools built around scale, checkout clarity, and operations efficiency.",
    bullets: [
      "Custom storefront builds",
      "Payment integration",
      "Inventory workflows",
      "Order tracking experiences"
    ],
    stack: ["Next.js", "Stripe", "Commerce Ops"]
  },
  {
    title: "API Development",
    duration: "2-3 weeks",
    summary:
      "Structured backend endpoints and third-party integrations with attention to security and maintainability.",
    bullets: [
      "REST API design",
      "Third-party integration",
      "Auth and permissions",
      "Clear implementation docs"
    ],
    stack: ["Node.js", "Express", "MongoDB"]
  },
  {
    title: "Performance Optimization",
    duration: "1-2 weeks",
    summary:
      "Targeted improvements for Core Web Vitals, bundle health, and frontend responsiveness.",
    bullets: [
      "Speed audits",
      "Render-path cleanup",
      "Bundle review",
      "SEO and metadata fixes"
    ],
    stack: ["Lighthouse", "WebPageTest", "Analytics"]
  },
  {
    title: "Maintenance & Support",
    duration: "Ongoing",
    summary:
      "Release support, bug resolution, and stability work for teams that need dependable post-launch delivery.",
    bullets: [
      "Security updates",
      "Backups and restore paths",
      "Monitoring and triage",
      "Ongoing feature support"
    ],
    stack: ["Monitoring", "Incident Response", "Ops"]
  }
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "The build quality stood out immediately. The product shipped faster, felt cleaner, and gave our team confidence when traffic started climbing.",
    name: "Vishal G.",
    role: "Founder, commerce brand",
    initial: "V"
  },
  {
    quote:
      "From planning to implementation, every decision was grounded in usability. The system made daily operations noticeably easier for our staff.",
    name: "Ankeash K.",
    role: "Founder, fitness SaaS",
    initial: "A"
  },
  {
    quote:
      "Strong frontend judgment, clear technical communication, and reliable delivery. The final result felt polished and production-ready.",
    name: "Anushk K.",
    role: "CTO, software company",
    initial: "A"
  }
];

export const contact = {
  eyebrow: "Ready to initialize?",
  title: "Open for product work, performance audits, and premium website builds.",
  summary:
    "If you want a portfolio that feels close to the reference while staying maintainable in Next.js, this codebase gives you a clean starting point.",
  email: "hello@yourdomain.com",
  phone: "+91 90000 00000",
  availability: "Currently accepting remote collaborations."
};
