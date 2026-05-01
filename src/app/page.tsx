"use client";

import { useEffect, useState } from "react";
import type { IconType } from "react-icons";
import {
  FiArrowUpRight,
  FiBriefcase,
  FiCode,
  FiGitBranch,
  FiGithub,
  FiHome,
  FiLayers,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiMenu,
  FiPhone,
  FiUser,
  FiX,
  FiZap
} from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi2";
import { SiMongodb, SiNextdotjs, SiNodedotjs, SiReact, SiTypescript } from "react-icons/si";

type NavItem = {
  id: string;
  label: string;
  hint: string;
  icon: IconType;
};

type ContactLink = {
  href: string;
  label: string;
  value: string;
  icon: IconType;
  external?: boolean;
};

type TechPill = {
  label: string;
  className: string;
  icon: IconType;
};

type ContributionProject = {
  title: string;
  period: string;
  repoLabel: string;
  href?: string;
  summary: string;
  impact: string[];
  meta: string[];
  privateRepo?: boolean;
};

type ContributionTimelineItem = {
  period: string;
  title: string;
  repo: string;
  summary: string;
  stack: string[];
  privateRepo?: boolean;
};

const navItems: NavItem[] = [
  { id: "hero", label: "Home", hint: "Overview", icon: FiHome },
  { id: "about", label: "About", hint: "Profile", icon: FiUser },
  { id: "exp", label: "Experience", hint: "Career Path", icon: FiBriefcase },
  { id: "skills", label: "Skills", hint: "Tooling", icon: FiCode },
  { id: "contributions", label: "Contributions", hint: "GitHub Work", icon: FiGitBranch },
  { id: "contact", label: "Contact", hint: "Reach Out", icon: FiMail }
];

const contactLinks: ContactLink[] = [
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
  },
  {
    href: "tel:+919315981404",
    label: "Phone",
    value: "+91 93159 81404",
    icon: FiPhone
  },
  {
    href: "mailto:surajkashyap9911@gmail.com",
    label: "Email",
    value: "surajkashyap9911@gmail.com",
    icon: FiMail
  }
];

const topLinks: ContactLink[] = contactLinks.slice(0, 3);
const sidebarLinks: ContactLink[] = contactLinks.slice(0, 2);

const techPills: TechPill[] = [
  { label: "React.js", className: "tp-react", icon: SiReact },
  { label: "Node.js", className: "tp-node", icon: SiNodedotjs },
  { label: "TypeScript", className: "tp-ts", icon: SiTypescript },
  { label: "Next.js", className: "tp-next", icon: SiNextdotjs },
  { label: "MongoDB", className: "tp-db", icon: SiMongodb },
  { label: "AI Integrations", className: "tp-ai", icon: HiOutlineSparkles },
  { label: "WebSockets", className: "tp-ws", icon: FiZap }
];

const contributionProjects: ContributionProject[] = [
  {
    title: "Bagisto",
    period: "2023 - Present",
    repoLabel: "bagisto/bagisto",
    href: "https://github.com/bagisto/bagisto",
    summary:
      "Merged production-facing work across commerce admin flows, customer storefront behavior, and data tooling for a large open-source platform.",
    impact: [
      "Shipped UI and workflow improvements used by thousands of stores worldwide.",
      "Extended contributor tooling with a data-generation library for broader attribute and product coverage.",
      "Worked inside an established public codebase with release maintenance, issue resolution, and production-grade review standards."
    ],
    meta: ["26K+ GitHub stars", "Open source", "Commerce platform"]
  },
  {
    title: "Krayin CRM",
    period: "2023 - Present",
    repoLabel: "Open-source CRM platform",
    summary:
      "Contributed merged fixes and workflow improvements across CRM UI, migration flows, and release upkeep for a long-running open-source CRM product.",
    impact: [
      "Improved CRM workflow surfaces and bug resolution paths across live public releases.",
      "Supported migration-oriented tooling and maintenance tasks that reduced friction for adopters.",
      "Handled public issue follow-through and community-facing engineering work inside the shared repository."
    ],
    meta: ["21K+ GitHub stars", "Open source", "CRM workflows"]
  },
  {
    title: "OpenCRM",
    period: "2025 - Present",
    repoLabel: "suraj-kashyap-dev/open-crm",
    href: "https://github.com/suraj-kashyap-dev/open-crm",
    summary:
      "Built a CRM from scratch around Next.js, TypeScript, Node.js, and MongoDB with JWT authentication, RBAC, custom fields, data grids, and pipeline views.",
    impact: [
      "Owned the stack end to end, from schema design and API contracts to frontend architecture.",
      "Implemented JWT auth, role-based access control, Kanban workflows, and admin-friendly CRM surfaces.",
      "Demonstrated complete delivery in a MERN-adjacent architecture with production-style boundaries."
    ],
    meta: ["Public repo", "Full-stack CRM", "Next.js + Node.js"]
  }
];

const contributionTimeline: ContributionTimelineItem[] = [
  {
    period: "2023 - Present",
    title: "Bagisto Core Team Contributor",
    repo: "bagisto/bagisto",
    summary:
      "Merged frontend and workflow contributions into a commerce platform used globally, while supporting public issues and release maintenance.",
    stack: ["Commerce", "Open Source", "Frontend Systems", "26K+ Stars"]
  },
  {
    period: "2023 - Present",
    title: "Krayin CRM Core Team Contributor",
    repo: "Krayin CRM",
    summary:
      "Shipped CRM workflow improvements, migration support, and maintenance changes inside an established public product repository.",
    stack: ["CRM Workflows", "Public Repo", "Issue Resolution", "21K+ Stars"]
  },
  {
    period: "2025 - Present",
    title: "OpenCRM Builder",
    repo: "suraj-kashyap-dev/open-crm",
    summary:
      "Designed and implemented a CRM with JWT auth, RBAC, custom field management, pipeline views, and typed frontend-backend contracts.",
    stack: ["Next.js", "Node.js", "MongoDB", "JWT / RBAC"]
  }
];

const revealDelays = {
  aboutCards: "0.15s",
  experienceSecond: "0.1s",
  experienceThird: "0.2s",
  frontendSkills: "0.1s",
  infraSkills: "0.2s",
  aiSkills: "0.3s",
  contributionsPanel: "0.12s",
  contributionsTimeline: "0.2s",
  contactLinks: "0.15s"
} as const;

export default function Home() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  const activeNavItem = navItems.find((item) => item.id === activeSection) ?? navItems[0];
  const ActiveNavIcon = activeNavItem.icon;

  useEffect(() => {
    document.body.style.overflow = mobileNavOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileNavOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setMobileNavOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const viewportBottom = currentScroll + window.innerHeight;
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pageBottom = document.documentElement.scrollHeight;
      const probePoint = currentScroll + Math.min(window.innerHeight * 0.35, 220);

      let currentSection = "hero";

      if (viewportBottom >= pageBottom - 2) {
        currentSection = navItems[navItems.length - 1]?.id ?? currentSection;
      } else {
        navItems.forEach((item) => {
          const section = document.getElementById(item.id);

          if (section && probePoint >= section.offsetTop) {
            currentSection = item.id;
          }
        });
      }

      setActiveSection(currentSection);
      setScrolled(currentScroll > 18);
      setScrollProgress(scrollableHeight > 0 ? (currentScroll / scrollableHeight) * 100 : 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const cursor = document.getElementById("cur");
    const cursorTrail = document.getElementById("cur2");
    const cleanupCallbacks: Array<() => void> = [];
    const timeouts: number[] = [];

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
          }
        });
      },
      { threshold: 0.08 }
    );

    document.querySelectorAll(".reveal,.tli").forEach((element) => {
      revealObserver.observe(element);
    });

    cleanupCallbacks.push(() => revealObserver.disconnect());

    const skillsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll<HTMLElement>(".skf").forEach((bar) => {
              const width = bar.dataset.w;

              if (width) {
                bar.style.width = `${width}%`;
              }
            });
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll(".skcat").forEach((element) => {
      skillsObserver.observe(element);
    });

    cleanupCallbacks.push(() => skillsObserver.disconnect());

    document.querySelectorAll<HTMLElement>(".mtc > div").forEach((line, index) => {
      line.style.opacity = "0";

      const timeout = window.setTimeout(() => {
        line.style.opacity = "1";
        line.style.transition = "opacity .3s";
      }, 1300 + index * 160);

      timeouts.push(timeout);
    });

    cleanupCallbacks.push(() => {
      timeouts.forEach((timeout) => window.clearTimeout(timeout));
    });

    if (!cursor || !cursorTrail || window.innerWidth <= 768) {
      return () => {
        cleanupCallbacks.forEach((cleanup) => cleanup());
      };
    }

    let mouseX = 0;
    let mouseY = 0;
    let trailX = 0;
    let trailY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      cursor.style.left = `${mouseX - 5}px`;
      cursor.style.top = `${mouseY - 5}px`;
    };

    const interval = window.setInterval(() => {
      trailX += (mouseX - trailX) * 0.13;
      trailY += (mouseY - trailY) * 0.13;
      cursorTrail.style.left = `${trailX - 19}px`;
      cursorTrail.style.top = `${trailY - 19}px`;
    }, 16);

    document.addEventListener("mousemove", handleMouseMove);

    cleanupCallbacks.push(() => {
      document.removeEventListener("mousemove", handleMouseMove);
      window.clearInterval(interval);
    });

    const interactiveElements = document.querySelectorAll<HTMLElement>(
      "a,button,.ecard,.clnk,.tp,.contrib-card,.contrib-timelineCard"
    );

    const handlePointerEnter = () => {
      cursor.style.transform = "scale(2.5)";
      cursor.style.opacity = ".35";
    };

    const handlePointerLeave = () => {
      cursor.style.transform = "scale(1)";
      cursor.style.opacity = "1";
    };

    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", handlePointerEnter);
      element.addEventListener("mouseleave", handlePointerLeave);
    });

    cleanupCallbacks.push(() => {
      interactiveElements.forEach((element) => {
        element.removeEventListener("mouseenter", handlePointerEnter);
        element.removeEventListener("mouseleave", handlePointerLeave);
      });
    });

    return () => {
      cleanupCallbacks.forEach((cleanup) => cleanup());
    };
  }, []);

  function closeMobileNav() {
    setMobileNavOpen(false);
  }

  return (
    <>
      <div aria-hidden="true" id="cur" />
      <div aria-hidden="true" id="cur2" />
      <div aria-hidden="true" className="blob b1" />
      <div aria-hidden="true" className="blob b2" />
      <div aria-hidden="true" className="blob b3" />

      <div className={`mobile-nav ${mobileNavOpen ? "open" : ""}`} id="mobileNav">
        <div className="mobile-nav-header">
          <span className="mobile-nav-title">Menu</span>
          <button
            aria-label="Close menu"
            className="mobile-nav-close"
            onClick={closeMobileNav}
            type="button"
          >
            <FiX />
          </button>
        </div>

        {navItems.map(({ icon: Icon, id, label }) => (
          <a
            className={`mobile-nav-link ${activeSection === id ? "active" : ""}`}
            href={`#${id}`}
            key={id}
            onClick={closeMobileNav}
          >
            <Icon />
            <span>{label}</span>
          </a>
        ))}
      </div>

      <nav>
        <div className="nav-header">
          <a className="logo" href="#hero" onClick={closeMobileNav}>
            <span className="logo-mark">SK</span>
            <span className="logo-copy">
              <span className="logo-name">
                Suraj<em>.dev</em>
              </span>
              <span className="logo-role">Full-Stack Engineer</span>
            </span>
          </a>

          <p className="sidebar-subtitle">Minimal navigation</p>
        </div>

        <div className="sidebar-section">
          <p className="sidebar-sectionTitle">Menu</p>
          <ul className="nav-links">
            {navItems.map(({ icon: Icon, id, label }) => (
              <li key={id}>
                <a
                  className={`nav-link ${activeSection === id ? "active" : ""}`}
                  href={`#${id}`}
                  onClick={closeMobileNav}
                >
                  <span className="nav-linkIcon">
                    <Icon />
                  </span>
                  <span className="nav-linkLabel">{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="sidebar-footer">
          <div className="hire-badge">
            <div className="ping" />
            Open to Opportunities
          </div>
          <p className="sidebar-note">Delhi NCR, India</p>
          <div className="sidebar-utilityLinks">
            <a className="sidebar-utilityLink" href="#contact" onClick={closeMobileNav}>
              <FiArrowUpRight />
            </a>
            {sidebarLinks.map(({ href, icon: Icon, label, external }) => (
              <a
                aria-label={label}
                className="sidebar-utilityLink"
                href={href}
                key={label}
                rel={external ? "noreferrer" : undefined}
                target={external ? "_blank" : undefined}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <button
          aria-expanded={mobileNavOpen}
          aria-label="Menu"
          className="hamburger"
          id="hamburger"
          onClick={() => setMobileNavOpen((open) => !open)}
          type="button"
        >
          {mobileNavOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      <main>
        <div className={`topbar ${scrolled ? "scrolled" : ""}`}>
          <div className="topbar-inner">
            <div className="topbar-meta">
              <span className="topbar-kicker">Current Section</span>
              <div className="topbar-titleRow">
                <span className="topbar-title">
                  <ActiveNavIcon />
                  {activeNavItem.label}
                </span>
              </div>
            </div>

            <div className="topbar-actions">
              <span className="topbar-progressLabel">{Math.round(scrollProgress)}% scrolled</span>
              {topLinks.map(({ href, icon: Icon, label, external }) => (
                <a
                  className="topbar-link"
                  href={href}
                  key={label}
                  rel={external ? "noreferrer" : undefined}
                  target={external ? "_blank" : undefined}
                >
                  <Icon />
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="topbar-progressTrack">
            <span className="topbar-progressFill" style={{ width: `${scrollProgress}%` }} />
          </div>
        </div>

        <section id="hero">
          <div className="hero-wrap">
            <div>
              <div className="eyebrow">
                <div className="eyebrow-dot" />
                Full-Stack Engineer
              </div>

              <h1 className="ht">
                SURAJ <span className="grad">KASHYAP</span>
              </h1>

              <div className="hero-role">
                MERN Stack<span className="sep">|</span>React.js &middot; Node.js
                <span className="sep">|</span>Next.js<span className="sep">|</span>AI Integrations
              </div>

              <p className="hero-sub">
                <strong>4.5+ years</strong> building production-grade MERN products with{" "}
                <em>React.js, Next.js, Node.js, TypeScript, and MongoDB</em>, plus AI-assisted
                workflows powered by <em>OpenAI API, OCR, and real-time integrations</em>.
              </p>

              <div className="tech-row">
                {techPills.map(({ className, icon: Icon, label }) => (
                  <div className={`tp ${className}`} key={label}>
                    <Icon />
                    {label}
                  </div>
                ))}
              </div>
            </div>

            <div className="hcard">
              <div className="ch">
                <div className="cav">SK</div>
                <div>
                  <div className="cn">Suraj Kashyap</div>
                  <div className="cr">@suraj-webkul</div>
                  <div className="cl">
                    <FiMapPin />
                    <span>Delhi NCR, India</span>
                    <span className="cl-divider" />
                    <FiPhone />
                    <span>+91 93159 81404</span>
                  </div>
                </div>
              </div>

              <div className="cst">
                <div className="cs">
                  <div className="csn">
                    4.5<em>+</em>
                  </div>
                  <div className="csl">Yrs Experience</div>
                </div>
                <div className="cs">
                  <div className="csn">
                    6<em>+</em>
                  </div>
                  <div className="csl">Major Projects</div>
                </div>
                <div className="cs">
                  <div className="csn">
                    8.8<em>/10</em>
                  </div>
                  <div className="csl">CGPA &middot; BCA</div>
                </div>
                <div className="cs">
                  <div className="csn">
                    OS<em>&#10003;</em>
                  </div>
                  <div className="csl">Open Source</div>
                </div>
              </div>

              <div className="mt">
                <div className="mtb">
                  <div className="mtd" />
                  <div className="mtd" />
                  <div className="mtd" />
                  <span className="mtt">suraj@kashyap ~ bash</span>
                </div>

                <div className="mtc">
                  <div>
                    <span className="p">&#10095; </span>
                    <span className="c">cat expertise.txt</span>
                  </div>
                  <div>
                    <span className="o">&#8594; React.js &middot; Next.js &middot; TypeScript</span>
                  </div>
                  <div>
                    <span className="o">&#8594; Node.js &middot; MongoDB &middot; REST APIs</span>
                  </div>
                  <div>
                    <span className="vi">&#8594; OpenAI API &middot; WebSockets &middot; OCR &middot; NLP</span>
                  </div>
                  <div>
                    <span className="p">&#10095; </span>
                    <span className="c">git log --oneline -2</span>
                  </div>
                  <div>
                    <span className="g">a3f9c1e feat: OCR document pipeline</span>
                  </div>
                  <div>
                    <span className="g">7b2d440 perf: Socket delivery under 200ms</span>
                  </div>
                  <div>
                    <span className="p">&#10095; </span>
                    <span className="mc" />
                  </div>
                </div>
              </div>

              <div className="aib">
                <div className="aii">
                  <HiOutlineSparkles />
                </div>
                <div className="ait">
                  <strong>AI-First Engineer</strong>
                  <br />
                  Claude AI &middot; Copilot &middot; Cursor &middot; OpenAI API
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="gd" />

        <section className="sec" id="about">
          <div className="si">
            <div className="ag">
              <div className="reveal">
                <div className="sn">01</div>
                <h2 className="st">
                  About <span>Me</span>
                </h2>
                <div className="sl" />

                <div className="at">
                  <p>
                    I&apos;m a <strong>Full-Stack Engineer</strong> with 4.5+ years building
                    production-ready products across <em>React.js, Next.js, Node.js, TypeScript,
                    and MongoDB</em>.
                  </p>
                  <p>
                    I design maintainable application systems &mdash;{" "}
                    <strong>
                      REST APIs, typed contracts, JWT/RBAC access control, and reusable React
                      component libraries
                    </strong>{" "}
                    &mdash; paired with performant, product-grade frontends.
                  </p>
                  <p>
                    I also ship <strong>AI-assisted product workflows</strong> into real systems:
                    OpenAI API integrations, OCR pipelines, NLP-assisted interfaces, and
                    document-processing automation. Open-source contribution work spans platforms
                    with <em>47K+ combined GitHub stars</em>.
                  </p>
                </div>
              </div>

              <div className="ec reveal" style={{ transitionDelay: revealDelays.aboutCards }}>
                <div className="ecard">
                  <div className="ei re">
                    <SiReact />
                  </div>
                  <div>
                    <div className="etit">React / Next.js</div>
                    <div className="esub">App Router &middot; Data grids &middot; Component systems</div>
                  </div>
                </div>

                <div className="ecard nd">
                  <div className="ei nd">
                    <SiNodedotjs />
                  </div>
                  <div>
                    <div className="etit">Node.js / Express</div>
                    <div className="esub">REST APIs &middot; Auth flows &middot; Service boundaries</div>
                  </div>
                </div>

                <div className="ecard ts">
                  <div className="ei ts">
                    <SiTypescript />
                  </div>
                  <div>
                    <div className="etit">TypeScript / Contracts</div>
                    <div className="esub">Typed schemas &middot; Safer refactors &middot; API clarity</div>
                  </div>
                </div>

                <div className="ecard db">
                  <div className="ei db">
                    <SiMongodb />
                  </div>
                  <div>
                    <div className="etit">MongoDB / Infra</div>
                    <div className="esub">Redis &middot; Queues &middot; Operational data flows</div>
                  </div>
                </div>

                <div className="ecard ac">
                  <div className="ei ai">
                    <HiOutlineSparkles />
                  </div>
                  <div>
                    <div className="etit">AI Integrations</div>
                    <div className="esub">OpenAI API &middot; OCR &middot; NLP &middot; Document automation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="gd" />

        <section className="sec" id="exp">
          <div className="si">
            <div className="reveal">
              <div className="sn">02</div>
              <h2 className="st">
                Work <span>Experience</span>
              </h2>
              <div className="sl" />
            </div>

            <div className="tl">
              <div className="tli reveal">
                <div className="tld" />
                <div className="tlp">Dec 2022 &ndash; Mar 2026</div>
                <div className="tlco">Webkul Software Pvt. Ltd.</div>
                <div className="tlr">Full Stack Engineer &mdash; MERN &amp; Frontend Product Engineering</div>
                <div className="tllo">
                  <FiMapPin />
                  <span>Noida, India</span>
                </div>
                <div className="tlcard">
                  <div className="tltags">
                    <span className="ptag pt-react">React.js</span>
                    <span className="ptag pt-next">Next.js</span>
                    <span className="ptag pt-node">Node.js</span>
                    <span className="ptag pt-ts">TypeScript</span>
                    <span className="ptag pt-db">MongoDB</span>
                    <span className="ptag pt-ai">OpenAI API</span>
                    <span className="ptag">Docker</span>
                    <span className="ptag">GitHub Actions</span>
                  </div>
                </div>
              </div>

              <div className="tli reveal" style={{ transitionDelay: revealDelays.experienceSecond }}>
                <div
                  className="tld"
                  style={{ background: "var(--blue)", boxShadow: "0 0 12px var(--blue)" }}
                />
                <div className="tlp">Jan 2022 &ndash; Dec 2022</div>
                <div className="tlco">Opmac</div>
                <div className="tlr">Full Stack Developer &mdash; React &amp; Node.js</div>
                <div className="tllo">
                  <FiMapPin />
                  <span>Ghaziabad, India</span>
                </div>
                <div className="tlcard">
                  <div className="tltags">
                    <span className="ptag pt-react">React.js</span>
                    <span className="ptag pt-node">Node.js</span>
                    <span className="ptag pt-ts">TypeScript</span>
                    <span className="ptag">REST APIs</span>
                    <span className="ptag pt-db">MongoDB</span>
                    <span className="ptag">MySQL</span>
                    <span className="ptag pt-ai">NLP Integration</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="gd" />

        <section className="sec" id="skills">
          <div className="si">
            <div className="reveal">
              <div className="sn">03</div>
              <h2 className="st">
                Tech <span>Stack</span>
              </h2>
              <div className="sl" />
            </div>

            <div className="skg">
              <div className="skcat reveal">
                <div className="sctit">Backend</div>
                <div className="ski">
                  <div className="skt">
                    <span className="skn">Node.js / Express</span>
                    <span className="skp">92%</span>
                  </div>
                  <div className="sktr">
                    <div className="skf fw" data-w="92" />
                  </div>
                </div>
                <div className="ski">
                  <div className="skt">
                    <span className="skn">REST API Design</span>
                    <span className="skp">93%</span>
                  </div>
                  <div className="sktr">
                    <div className="skf fw" data-w="93" />
                  </div>
                </div>
                <div className="ski">
                  <div className="skt">
                    <span className="skn">JWT &middot; OAuth 2.0 &middot; RBAC</span>
                    <span className="skp">90%</span>
                  </div>
                  <div className="sktr">
                    <div className="skf fc" data-w="90" />
                  </div>
                </div>
                <div className="ski">
                  <div className="skt">
                    <span className="skn">WebSockets &middot; Socket.io</span>
                    <span className="skp">88%</span>
                  </div>
                  <div className="sktr">
                    <div className="skf fc" data-w="88" />
                  </div>
                </div>
              </div>

              <div className="skcat reveal" style={{ transitionDelay: revealDelays.frontendSkills }}>
                <div className="sctit">Frontend</div>
                <div className="ski">
                  <div className="skt">
                    <span className="skn">React.js / Next.js</span>
                    <span className="skp">95%</span>
                  </div>
                  <div className="sktr">
                    <div className="skf fg" data-w="95" />
                  </div>
                </div>
                <div className="ski">
                  <div className="skt">
                    <span className="skn">TypeScript / JavaScript (ES6+)</span>
                    <span className="skp">93%</span>
                  </div>
                  <div className="sktr">
                    <div className="skf fc" data-w="93" />
                  </div>
                </div>
                <div className="ski">
                  <div className="skt">
                    <span className="skn">HTML5 &middot; CSS3/SCSS &middot; Tailwind</span>
                    <span className="skp">91%</span>
                  </div>
                  <div className="sktr">
                    <div className="skf fg" data-w="91" />
                  </div>
                </div>
                <div className="ski">
                  <div className="skt">
                    <span className="skn">Redux &middot; Component Systems</span>
                    <span className="skp">89%</span>
                  </div>
                  <div className="sktr">
                    <div className="skf fg" data-w="89" />
                  </div>
                </div>
              </div>

              <div className="skcat reveal" style={{ transitionDelay: revealDelays.infraSkills }}>
                <div className="sctit">Database &amp; Infra</div>
                <div className="ski">
                  <div className="skt">
                    <span className="skn">MongoDB &middot; PostgreSQL</span>
                    <span className="skp">90%</span>
                  </div>
                  <div className="sktr">
                    <div className="skf fc" data-w="90" />
                  </div>
                </div>
                <div className="ski">
                  <div className="skt">
                    <span className="skn">MySQL &middot; Redis</span>
                    <span className="skp">86%</span>
                  </div>
                  <div className="sktr">
                    <div className="skf fc" data-w="86" />
                  </div>
                </div>
                <div className="ski">
                  <div className="skt">
                    <span className="skn">Docker &middot; GitHub Actions CI/CD</span>
                    <span className="skp">88%</span>
                  </div>
                  <div className="sktr">
                    <div className="skf fc" data-w="88" />
                  </div>
                </div>
                <div className="ski">
                  <div className="skt">
                    <span className="skn">Kafka &middot; RabbitMQ</span>
                    <span className="skp">80%</span>
                  </div>
                  <div className="sktr">
                    <div className="skf fc" data-w="80" />
                  </div>
                </div>
              </div>

              <div className="skcat reveal" style={{ transitionDelay: revealDelays.aiSkills }}>
                <div className="sctit">Generative AI</div>
                <div className="ski">
                  <div className="skt">
                    <span className="skn">OpenAI API &middot; AI Tooling</span>
                    <span className="skp">93%</span>
                  </div>
                  <div className="sktr">
                    <div className="skf fv" data-w="93" />
                  </div>
                </div>
                <div className="ski">
                  <div className="skt">
                    <span className="skn">RAG Pipelines &middot; OCR &middot; NLP</span>
                    <span className="skp">89%</span>
                  </div>
                  <div className="sktr">
                    <div className="skf fv" data-w="89" />
                  </div>
                </div>
                <div className="ski">
                  <div className="skt">
                    <span className="skn">Prompt Engineering</span>
                    <span className="skp">91%</span>
                  </div>
                  <div className="sktr">
                    <div className="skf fv" data-w="91" />
                  </div>
                </div>
                <div className="ski">
                  <div className="skt">
                    <span className="skn">AI-Assisted Product Workflows</span>
                    <span className="skp">90%</span>
                  </div>
                  <div className="sktr">
                    <div className="skf fv" data-w="90" />
                  </div>
                </div>
              </div>
            </div>

            <div className="gbox reveal">
              <div className="gtit">
                <HiOutlineSparkles />
                <span>AI-First Engineering</span>
              </div>
              <p>
                I bring a genuine AI-first mindset to every layer of the stack. From integrating
                OpenAI API and OCR into production React and Node.js workflows, to building
                document pipelines and AI-assisted product features, I treat AI as infrastructure,
                not a feature. Daily tools:{" "}
                <strong>Claude AI, GitHub Copilot + Codex agents, and Cursor AI</strong> for code
                generation, debugging, architecture review, and automated documentation.
              </p>
              <div className="gtags">
                <span className="gtag">Claude AI</span>
                <span className="gtag">OpenAI API</span>
                <span className="gtag">GitHub Copilot</span>
                <span className="gtag">Cursor AI</span>
                <span className="gtag">RAG Pipelines</span>
                <span className="gtag">NLP</span>
                <span className="gtag">OCR</span>
                <span className="gtag">WebSockets</span>
                <span className="gtag">REST APIs</span>
                <span className="gtag">Prompt Engineering</span>
                <span className="gtag">Custom Instruction Eng.</span>
                <span className="gtag">AI Code Review</span>
              </div>
            </div>
          </div>
        </section>

        <div className="gd" />

        <section className="sec" id="contributions">
          <div className="si">
            <div className="reveal">
              <div className="sn">04</div>
              <h2 className="st">
                Selected <span>Work</span>
              </h2>
              <div className="sl" />
            </div>

            <div className="contrib-layout">
              <div className="contrib-grid reveal" style={{ transitionDelay: revealDelays.contributionsPanel }}>
                {contributionProjects.map((project) => (
                  <article className="contrib-card" key={project.title}>
                    <div className="contrib-cardHeader">
                      <div className="contrib-cardIdentity">
                        <span className="contrib-cardIcon">
                          <FiLayers />
                        </span>
                        <div>
                          <p className="contrib-kicker">Selected Highlight</p>
                          <h3 className="contrib-title">{project.title}</h3>
                        </div>
                      </div>
                      <div className="contrib-cardBadges">
                        <span className="contrib-period">{project.period}</span>
                        <span className="contrib-badge">Public Work</span>
                      </div>
                    </div>

                    <div className="contrib-repoRow">
                      <p className="contrib-repo">
                        <FiGithub />
                        {project.href ? (
                          <a href={project.href} rel="noreferrer" target="_blank">
                            {project.repoLabel}
                          </a>
                        ) : (
                          <span>{project.repoLabel}</span>
                        )}
                      </p>

                      <span className={`contrib-visibility ${project.privateRepo ? "is-private" : ""}`}>
                        {project.privateRepo ? "Internal Product" : "Public Repository"}
                      </span>
                    </div>

                    <div className="contrib-summaryBlock">
                      <p className="contrib-sectionLabel">Overview</p>
                      <p className="contrib-summary">{project.summary}</p>
                    </div>

                    <div className="contrib-impactBlock">
                      <p className="contrib-sectionLabel">Contribution Focus</p>
                      <ul className="contrib-points">
                        {project.impact.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="contrib-meta">
                      {project.meta.map((item) => (
                        <span className={`contrib-metaItem ${project.privateRepo ? "is-private" : ""}`} key={item}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>

              <div
                className="contrib-timelinePanel reveal"
                style={{ transitionDelay: revealDelays.contributionsTimeline }}
              >
                <div className="contrib-panelHeader">
                  <div>
                    <h3 className="contrib-panelTitle">Work Stream</h3>
                  </div>
                  <span className="contrib-panelBadge">
                    <FiGitBranch />
                    Activity Stream
                  </span>
                </div>

                <p className="contrib-panelLead">
                  This section mixes open-source contribution work and self-owned product builds,
                  with the distinction made explicit in the copy rather than implied.
                </p>

                <div className="contrib-timeline">
                  {contributionTimeline.map((item, index) => (
                    <article className="contrib-timelineItem" key={`${item.title}-${item.period}`}>
                      <div
                        className={`contrib-timelineDot ${
                          item.privateRepo || index === contributionTimeline.length - 1 ? "is-alt" : ""
                        }`}
                      />
                      <div className="contrib-timelineCard">
                        <div className="contrib-timelineTop">
                          <p className="contrib-timelinePeriod">{item.period}</p>
                          <span className={`contrib-timelineState ${item.privateRepo ? "is-private" : ""}`}>
                            {item.privateRepo ? "Internal product" : "Public repo"}
                          </span>
                        </div>

                        <div className="contrib-timelineContent">
                          <h4 className="contrib-timelineTitle">{item.title}</h4>
                          <p className="contrib-timelineRepo">
                            <FiGithub />
                            <span>{item.repo}</span>
                            {item.privateRepo ? <span className="contrib-privatePill">Private / internal</span> : null}
                          </p>
                          <p className="contrib-timelineSummary">{item.summary}</p>
                          <div className="tltags">
                            {item.stack.map((tag) => (
                              <span className={`ptag ${item.privateRepo ? "pt-private" : ""}`} key={tag}>
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="gd" />

        <section className="sec" id="contact">
          <div className="si">
            <div className="cgrid">
              <div className="reveal">
                <div className="sn">05</div>
                <h2 className="st">
                  Get In <span>Touch</span>
                </h2>
                <div className="sl" />

                <div className="ct">
                  <p>
                    Open to full-time roles, freelance projects, and consulting &mdash; especially
                    at the intersection of modern web development and AI. MERN products, React /
                    Next.js frontends, Node.js APIs, or AI-enhanced workflows &mdash;
                    let&apos;s talk.
                  </p>
                  <p>
                    Based in <strong>Delhi NCR, India</strong>. Available to join immediately for
                    remote and on-site opportunities.
                  </p>
                </div>

                <a className="cemail" href="mailto:surajkashyap9911@gmail.com">
                  surajkashyap9911@gmail.com
                </a>
              </div>

              <div className="clinks reveal" style={{ transitionDelay: revealDelays.contactLinks }}>
                {contactLinks.map(({ href, icon: Icon, label, value, external }) => (
                  <a
                    className="clnk"
                    href={href}
                    key={label}
                    rel={external ? "noreferrer" : undefined}
                    target={external ? "_blank" : undefined}
                  >
                    <div className="clnkLead">
                      <div className="clico">
                        <Icon />
                      </div>
                      <div>
                        <div className="cll">{label}</div>
                        <div className="clv">{value}</div>
                      </div>
                    </div>
                    <FiArrowUpRight className="clnkArrow" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>&copy; 2026 Suraj Kashyap &mdash; Full-Stack Engineer</span>
        <span>React.js &middot; Node.js &middot; TypeScript &middot; Next.js &middot; GenAI</span>
        <span>Delhi NCR, India</span>
      </footer>
    </>
  );
}
