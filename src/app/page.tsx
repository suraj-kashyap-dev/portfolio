"use client";

import { useEffect, useState } from "react";
import type { IconType } from "react-icons";
import { FaJava } from "react-icons/fa6";
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
import { SiLaravel, SiNextdotjs, SiSpringboot, SiVuedotjs } from "react-icons/si";

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
    href: "https://github.com/suraj-kashyap-dev",
    label: "GitHub",
    value: "github.com/suraj-kashyap-dev",
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
  { label: "Java", className: "tp-j", icon: FaJava },
  { label: "Spring Boot", className: "tp-s", icon: SiSpringboot },
  { label: "Laravel", className: "tp-l", icon: SiLaravel },
  { label: "Vue.js", className: "tp-v", icon: SiVuedotjs },
  { label: "Next.js", className: "tp-n", icon: SiNextdotjs },
  { label: "GenAI Developer", className: "tp-a", icon: HiOutlineSparkles },
  { label: "Reverb / WS", className: "tp-r", icon: FiZap }
];

const contributionProjects: ContributionProject[] = [
  {
    title: "Bagisto",
    period: "25 Dec 2022 - Present",
    repoLabel: "bagisto/bagisto",
    href: "https://github.com/bagisto/bagisto",
    summary:
      "Contributed to the Laravel-based commerce platform across feature delivery, platform maintenance, and production-grade bug resolution.",
    impact: [
      "Worked inside a large open-source product used for commerce implementations.",
      "Shipped contribution work within the existing Bagisto architecture rather than as a standalone owned product.",
      "Supported framework-level delivery that aligned with client and ecosystem needs."
    ],
    meta: ["Public repo", "Default branch: 2.4", "Organization: bagisto"]
  },
  {
    title: "Krayin CRM",
    period: "25 Dec 2022 - Present",
    repoLabel: "krayin/laravel-crm",
    href: "https://github.com/krayin/laravel-crm",
    summary:
      "Contributed to the Laravel CRM codebase with product-level engineering work across CRM workflows, module delivery, and platform upkeep.",
    impact: [
      "Worked on an established CRM product with an existing contributor and release model.",
      "Delivered contributions into the Krayin ecosystem as part of the engineering team.",
      "Focused on maintainable additions inside the product instead of presenting it as a personal build."
    ],
    meta: ["Public repo", "Default branch: 2.2", "Organization: krayin"]
  },
  {
    title: "AureusERP",
    period: "2024 - Present",
    repoLabel: "AureusERP · public repository",
    summary:
      "Contributed to AureusERP product work inside the Webkul ecosystem, covering enterprise workflows, integration-heavy modules, and ongoing product engineering.",
    impact: [
      "Worked as part of the core engineering team shipping ERP product functionality into the shared codebase.",
      "Kept ownership language explicit: contributor and core team member, not founder or repository owner.",
      "Positioned as company ecosystem engineering rather than an independently owned portfolio product."
    ],
    meta: ["Public repo", "Company product work", "Enterprise domain"]
  }
];

const contributionTimeline: ContributionTimelineItem[] = [
  {
    period: "25 Dec 2022 - Present",
    title: "Bagisto Core Team Contributor",
    repo: "bagisto/bagisto",
    summary:
      "Open-source commerce platform contribution work through Webkul engineering delivery, focused on product maintenance, implementation support, and platform evolution.",
    stack: ["Laravel", "PHP", "Commerce", "Open Source"]
  },
  {
    period: "25 Dec 2022 - Present",
    title: "Krayin CRM Core Team Contributor",
    repo: "krayin/laravel-crm",
    summary:
      "CRM product contribution work within the Krayin ecosystem, helping ship features and refinements into an existing public repository maintained by the company.",
    stack: ["Laravel", "CRM", "Modules", "Open Source"]
  },
  {
    period: "2024 - Present",
    title: "AureusERP Core Team Contributor",
    repo: "AureusERP",
    summary:
      "Public ERP product contribution work delivered as part of the Webkul engineering team, focused on enterprise workflows, integrations, and ongoing product evolution.",
    stack: ["ERP", "Enterprise Workflows", "Integrations", "Public Repo"]
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
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const probePoint = currentScroll + 220;

      let currentSection = "hero";

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);

        if (section && probePoint >= section.offsetTop) {
          currentSection = item.id;
        }
      });

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
          <p className="sidebar-note">Ghaziabad, India</p>
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
                Spring Boot<span className="sep">|</span>Laravel &middot; Vue.js
                <span className="sep">|</span>Next.js<span className="sep">|</span>GenAI
              </div>

              <p className="hero-sub">
                <strong>4.5+ years</strong> shipping production web applications. Expert in{" "}
                <em>Spring Boot, Laravel, Vue.js, Next.js</em> and deeply embedded in{" "}
                <em>Generative AI</em>: LLM APIs, RAG pipelines, NLP &amp; AI-first engineering.
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
                  <div className="cr">@suraj-kashyap-dev</div>
                  <div className="cl">
                    <FiMapPin />
                    <span>Ghaziabad, UP</span>
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
                    <span className="o">&#8594; Java &middot; Spring Boot &middot; Laravel</span>
                  </div>
                  <div>
                    <span className="o">&#8594; Vue.js &middot; Next.js &middot; FilamentPHP</span>
                  </div>
                  <div>
                    <span className="vi">&#8594; LLM APIs &middot; RAG &middot; NLP &middot; OCR</span>
                  </div>
                  <div>
                    <span className="p">&#10095; </span>
                    <span className="c">git log --oneline -2</span>
                  </div>
                  <div>
                    <span className="g">a3f9c1e feat: AI doc pipeline (RAG)</span>
                  </div>
                  <div>
                    <span className="g">7b2d440 feat: ML lead scoring CRM</span>
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
                  Claude AI &middot; Copilot &middot; Cursor &middot; Prompt Eng.
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
                    I&apos;m an <strong>Full-Stack Engineer</strong> with 4.5+ years
                    shipping production web applications using <em>Java, Spring Boot, Laravel,
                    Vue.js</em>, and <em>Next.js</em>.
                  </p>
                  <p>
                    I build layered, maintainable backend systems &mdash;{" "}
                    <strong>
                      REST APIs, DTO patterns, service-repository architecture, JWT &amp; RBAC
                      security
                    </strong>{" "}
                    &mdash; paired with reactive, polished frontends.
                  </p>
                  <p>
                    Beyond the stack, I integrate <strong>AI and ML</strong> directly into
                    enterprise products: LLM APIs, RAG pipelines, NLP, collaborative filtering,
                    sentiment analysis, OCR and predictive analytics. I use <em>Claude AI, GitHub
                    Copilot, and Cursor</em> as engineering force-multipliers every day.
                  </p>
                </div>
              </div>

              <div className="ec reveal" style={{ transitionDelay: revealDelays.aboutCards }}>
                <div className="ecard">
                  <div className="ei ja">
                    <FaJava />
                  </div>
                  <div>
                    <div className="etit">Java / Spring Boot</div>
                    <div className="esub">Spring MVC &middot; Security &middot; Data JPA &middot; REST</div>
                  </div>
                </div>

                <div className="ecard la">
                  <div className="ei la">
                    <SiLaravel />
                  </div>
                  <div>
                    <div className="etit">Laravel / PHP</div>
                    <div className="esub">Eloquent &middot; Sanctum &middot; Octane &middot; Reverb</div>
                  </div>
                </div>

                <div className="ecard vc">
                  <div className="ei vu">
                    <SiVuedotjs />
                  </div>
                  <div>
                    <div className="etit">Vue.js / Nuxt</div>
                    <div className="esub">Composition API &middot; Pinia &middot; FilamentPHP</div>
                  </div>
                </div>

                <div className="ecard nx">
                  <div className="ei nx">
                    <SiNextdotjs />
                  </div>
                  <div>
                    <div className="etit">Next.js / React</div>
                    <div className="esub">App Router &middot; Server Components &middot; SSR</div>
                  </div>
                </div>

                <div className="ecard ac">
                  <div className="ei ai">
                    <HiOutlineSparkles />
                  </div>
                  <div>
                    <div className="etit">Generative AI</div>
                    <div className="esub">LLM APIs &middot; RAG &middot; NLP &middot; OCR &middot; Forecasting</div>
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
                <div className="tlp">2025 &ndash; Present</div>
                <div className="tlco">Webkul Software Pvt. Ltd.</div>
                <div className="tlr">
                  Team Lead &mdash; Full-Stack Engineering (Spring Boot &middot; Laravel
                  &middot; Vue.js &middot; AI)
                </div>
                <div className="tllo">
                  <FiMapPin />
                  <span>Noida, India</span>
                </div>
                <div className="tlcard">
                  <div className="tltags">
                    <span className="ptag pt-j">Java</span>
                    <span className="ptag pt-s">Spring Boot</span>
                    <span className="ptag pt-l">Laravel</span>
                    <span className="ptag pt-v">Vue.js</span>
                    <span className="ptag pt-n">Next.js</span>
                    <span className="ptag pt-a">AI/ML</span>
                    <span className="ptag">Team Lead</span>
                    <span className="ptag">Code Review</span>
                  </div>
                </div>
              </div>

              <div className="tli reveal" style={{ transitionDelay: revealDelays.experienceSecond }}>
                <div
                  className="tld"
                  style={{ background: "var(--blue)", boxShadow: "0 0 12px var(--blue)" }}
                />
                <div className="tlp">Dec 2022 &ndash; 2024</div>
                <div className="tlco">Webkul Software Pvt. Ltd.</div>
                <div className="tlr">
                  Software Engineer &mdash; Full-Stack (Spring Boot &middot; Laravel &middot;
                  Vue.js &middot; AI)
                </div>
                <div className="tllo">
                  <FiMapPin />
                  <span>Noida, India</span>
                </div>
                <div className="tlcard">
                  <div className="tltags">
                    <span className="ptag pt-j">Java</span>
                    <span className="ptag pt-s">Spring Boot</span>
                    <span className="ptag pt-l">Laravel</span>
                    <span className="ptag pt-v">Vue.js</span>
                    <span className="ptag pt-n">Next.js</span>
                    <span className="ptag pt-a">AI/ML</span>
                    <span className="ptag">Docker</span>
                    <span className="ptag">GitHub Actions</span>
                  </div>
                </div>
              </div>

              <div className="tli reveal" style={{ transitionDelay: revealDelays.experienceThird }}>
                <div className="tld vio" />
                <div className="tlp">Jan 2022 &ndash; Dec 2022</div>
                <div className="tlco">Opmac</div>
                <div className="tlr">Software Developer &mdash; Full-Stack (Laravel &middot; React.js)</div>
                <div className="tllo">
                  <FiMapPin />
                  <span>Ghaziabad, India</span>
                </div>
                <div className="tlcard">
                  <div className="tltags">
                    <span className="ptag pt-l">Laravel</span>
                    <span className="ptag pt-r">React.js</span>
                    <span className="ptag">MySQL</span>
                    <span className="ptag pt-a">NLP</span>
                    <span className="ptag pt-a">Predictive Analytics</span>
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
                    <span className="skn">Java / Spring Boot</span>
                    <span className="skp">95%</span>
                  </div>
                  <div className="sktr">
                    <div className="skf fw" data-w="95" />
                  </div>
                </div>
                <div className="ski">
                  <div className="skt">
                    <span className="skn">Laravel / PHP</span>
                    <span className="skp">96%</span>
                  </div>
                  <div className="sktr">
                    <div className="skf fw" data-w="96" />
                  </div>
                </div>
                <div className="ski">
                  <div className="skt">
                    <span className="skn">Spring Security &middot; JWT</span>
                    <span className="skp">90%</span>
                  </div>
                  <div className="sktr">
                    <div className="skf fc" data-w="90" />
                  </div>
                </div>
                <div className="ski">
                  <div className="skt">
                    <span className="skn">Node.js / Express</span>
                    <span className="skp">80%</span>
                  </div>
                  <div className="sktr">
                    <div className="skf fc" data-w="80" />
                  </div>
                </div>
              </div>

              <div className="skcat reveal" style={{ transitionDelay: revealDelays.frontendSkills }}>
                <div className="sctit">Frontend</div>
                <div className="ski">
                  <div className="skt">
                    <span className="skn">Vue.js / Nuxt</span>
                    <span className="skp">96%</span>
                  </div>
                  <div className="sktr">
                    <div className="skf fg" data-w="96" />
                  </div>
                </div>
                <div className="ski">
                  <div className="skt">
                    <span className="skn">Next.js / React.js</span>
                    <span className="skp">90%</span>
                  </div>
                  <div className="sktr">
                    <div className="skf fc" data-w="90" />
                  </div>
                </div>
                <div className="ski">
                  <div className="skt">
                    <span className="skn">FilamentPHP &middot; Alpine.js</span>
                    <span className="skp">88%</span>
                  </div>
                  <div className="sktr">
                    <div className="skf fg" data-w="88" />
                  </div>
                </div>
                <div className="ski">
                  <div className="skt">
                    <span className="skn">Tailwind CSS</span>
                    <span className="skp">93%</span>
                  </div>
                  <div className="sktr">
                    <div className="skf fg" data-w="93" />
                  </div>
                </div>
              </div>

              <div className="skcat reveal" style={{ transitionDelay: revealDelays.infraSkills }}>
                <div className="sctit">Database &amp; Infra</div>
                <div className="ski">
                  <div className="skt">
                    <span className="skn">PostgreSQL &middot; MySQL</span>
                    <span className="skp">91%</span>
                  </div>
                  <div className="sktr">
                    <div className="skf fc" data-w="91" />
                  </div>
                </div>
                <div className="ski">
                  <div className="skt">
                    <span className="skn">Redis &middot; MongoDB</span>
                    <span className="skp">86%</span>
                  </div>
                  <div className="sktr">
                    <div className="skf fc" data-w="86" />
                  </div>
                </div>
                <div className="ski">
                  <div className="skt">
                    <span className="skn">Docker &middot; CI/CD &middot; Jenkins</span>
                    <span className="skp">85%</span>
                  </div>
                  <div className="sktr">
                    <div className="skf fc" data-w="85" />
                  </div>
                </div>
                <div className="ski">
                  <div className="skt">
                    <span className="skn">WebSockets &middot; Reverb &middot; Octane</span>
                    <span className="skp">88%</span>
                  </div>
                  <div className="sktr">
                    <div className="skf fc" data-w="88" />
                  </div>
                </div>
              </div>

              <div className="skcat reveal" style={{ transitionDelay: revealDelays.aiSkills }}>
                <div className="sctit">Generative AI</div>
                <div className="ski">
                  <div className="skt">
                    <span className="skn">LLM APIs (Claude, OpenAI)</span>
                    <span className="skp">93%</span>
                  </div>
                  <div className="sktr">
                    <div className="skf fv" data-w="93" />
                  </div>
                </div>
                <div className="ski">
                  <div className="skt">
                    <span className="skn">RAG Pipelines &middot; NLP</span>
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
                    <span className="skn">Sentiment Analysis &middot; OCR</span>
                    <span className="skp">85%</span>
                  </div>
                  <div className="sktr">
                    <div className="skf fv" data-w="85" />
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
                LLM APIs into production Laravel and Spring Boot apps, building RAG document
                pipelines with OCR and NLP, to deploying collaborative filtering recommendation
                engines &mdash; I treat AI as infrastructure, not a feature. Daily tools:{" "}
                <strong>Claude AI, GitHub Copilot + Codex agents, and Cursor AI</strong> for code
                generation, debugging, architecture review, and automated documentation.
              </p>
              <div className="gtags">
                <span className="gtag">Claude AI</span>
                <span className="gtag">OpenAI GPT-4o</span>
                <span className="gtag">GitHub Copilot</span>
                <span className="gtag">Cursor AI</span>
                <span className="gtag">RAG Pipelines</span>
                <span className="gtag">NLP</span>
                <span className="gtag">Sentiment Analysis</span>
                <span className="gtag">Collaborative Filtering</span>
                <span className="gtag">OCR</span>
                <span className="gtag">Predictive Analytics</span>
                <span className="gtag">Prompt Engineering</span>
                <span className="gtag">TensorFlow.js</span>
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
                Product <span>Contributions</span>
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
                          <p className="contrib-kicker">Webkul Core Team</p>
                          <h3 className="contrib-title">{project.title}</h3>
                        </div>
                      </div>
                      <div className="contrib-cardBadges">
                        <span className="contrib-period">{project.period}</span>
                        <span className="contrib-badge">Core Team Member</span>
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
                    <h3 className="contrib-panelTitle">Contribution History</h3>
                  </div>
                  <span className="contrib-panelBadge">
                    <FiGitBranch />
                    Activity Stream
                  </span>
                </div>

                <p className="contrib-panelLead">
                  I contributed to these products as part of the Webkul engineering core team.
                  This is contribution history, not personal ownership history.
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
                    at the intersection of modern web development and AI. Java/Spring Boot, Laravel
                    SaaS, Vue/Next frontend, or AI-powered product &mdash; let&apos;s talk.
                  </p>
                  <p>
                    Based in <strong>Ghaziabad, Uttar Pradesh, India</strong>. Available for
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
        <span>Java &middot; Laravel &middot; Vue.js &middot; Next.js &middot; GenAI</span>
        <span>Ghaziabad, India</span>
      </footer>
    </>
  );
}
