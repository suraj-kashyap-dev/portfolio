"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub, FiStar } from "react-icons/fi";
import { projects } from "@/data/site-content";
import { FadeIn, Stagger, StaggerItem } from "./motion";
import { SectionHeader } from "./SectionHeader";

export function Projects() {
  const [featured, ...rest] = projects;

  return (
    <section id="work" className="section section-alt">
      <div className="container">
        <SectionHeader
          index="04"
          eyebrow="Selected Work"
          title="Products &"
          highlight="open source."
          description="Self-built products and merged contributions across large open-source platforms."
        />

        <FadeIn>
          <motion.article
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="feature-card"
          >
            <div className="feature-card-aura" aria-hidden="true" />
            <div className="feature-card-body">
              <div className="feature-card-head">
                <span className="feature-card-badge">
                  <FiStar /> Featured Build
                </span>
                <span className="feature-card-kind">{featured.category}</span>
              </div>

              <h3 className="feature-card-title">{featured.title}</h3>
              <p className="feature-card-tagline">{featured.tagline}</p>
              <p className="feature-card-desc">{featured.description}</p>

              <div className="tag-row">
                {featured.stack.map((tag) => (
                  <span key={tag} className="tag tag-strong">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="feature-card-foot">
                <span className="feature-card-repo">
                  <FiGithub />
                  {featured.href ? (
                    <a href={featured.href} target="_blank" rel="noreferrer">
                      {featured.repoLabel}
                    </a>
                  ) : (
                    <span>{featured.repoLabel}</span>
                  )}
                </span>

                {featured.href ? (
                  <a
                    href={featured.href}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    View on GitHub <FiArrowUpRight />
                  </a>
                ) : null}
              </div>
            </div>

            <div className="feature-card-visual" aria-hidden="true">
              <div className="fv-window">
                <div className="fv-bar">
                  <span className="fv-dot" />
                  <span className="fv-dot" />
                  <span className="fv-dot" />
                </div>
                <div className="fv-meta">
                  <span className="fv-tag">live</span>
                  <span>room: meet-9k2-3xa</span>
                </div>
                <div className="fv-stage">
                  <div className="fv-tile fv-tile-1">
                    <span className="fv-name">Suraj</span>
                  </div>
                  <div className="fv-tile fv-tile-2">
                    <span className="fv-name">Aanya</span>
                  </div>
                  <div className="fv-tile fv-tile-3">
                    <span className="fv-name">Vihaan</span>
                  </div>
                  <div className="fv-tile fv-tile-4">
                    <span className="fv-name">Riya</span>
                  </div>
                </div>
                <div className="fv-bottom">
                  <span className="fv-pill">Socket.IO</span>
                  <span className="fv-pill">LiveKit</span>
                  <span className="fv-pill">NestJS</span>
                </div>
              </div>
            </div>
          </motion.article>
        </FadeIn>

        <Stagger className="proj-grid">
          {rest.map((project) => (
            <StaggerItem key={project.title} className="proj-card-wrap">
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className={`proj-card ${project.featured ? "is-featured" : ""}`}
              >
                <div className="proj-card-head">
                  <div>
                    <span className="proj-card-kind">{project.category}</span>
                    <h3 className="proj-card-title">{project.title}</h3>
                    <p className="proj-card-tagline">{project.tagline}</p>
                  </div>

                  {project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="proj-card-link"
                      aria-label={`Open ${project.title}`}
                    >
                      <FiArrowUpRight />
                    </a>
                  ) : null}
                </div>

                <p className="proj-card-desc">{project.description}</p>

                <div className="tag-row">
                  {project.stack.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="proj-card-foot">
                  <span className="proj-card-repo">
                    <FiGithub />
                    {project.href ? (
                      <a href={project.href} target="_blank" rel="noreferrer">
                        {project.repoLabel}
                      </a>
                    ) : (
                      <span>{project.repoLabel}</span>
                    )}
                  </span>

                  <div className="proj-card-metrics">
                    {project.metrics.map((m) => (
                      <span key={m} className="proj-card-metric">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
