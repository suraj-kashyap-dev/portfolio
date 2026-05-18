"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { projects } from "@/data/site-content";
import { Stagger, StaggerItem } from "./motion";
import { SectionHeader } from "./SectionHeader";

export function Projects() {
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

        <Stagger className="proj-grid">
          {projects.map((project) => (
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
