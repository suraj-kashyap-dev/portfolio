"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/data/site-content";
import { FadeIn, Stagger, StaggerItem } from "./motion";
import { SectionHeader } from "./SectionHeader";

export function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <SectionHeader
          index="02"
          eyebrow="Skills"
          title="Tech"
          highlight="Stack"
          description="A working toolkit refined across product, platform, and AI workflows."
        />

        <Stagger className="skills-grid">
          {skillGroups.map((group) => {
            const GroupIcon = group.icon;

            return (
              <StaggerItem key={group.title} className="skill-card">
                <div className="skill-card-head">
                  <span className="skill-card-icon">
                    <GroupIcon />
                  </span>
                  <h3 className="skill-card-title">{group.title}</h3>
                </div>

                <ul className="skill-list">
                  {group.items.map((item) => (
                    <li key={item.name} className="skill-row">
                      <div className="skill-row-meta">
                        <span className="skill-name">{item.name}</span>
                        <span className="skill-pct">{item.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <motion.span
                          className="skill-bar-fill"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.level}%` }}
                          viewport={{ once: true, amount: 0.3 }}
                          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </StaggerItem>
            );
          })}
        </Stagger>

        <FadeIn className="skills-callout">
          <p>
            <strong>AI-first engineering</strong> &mdash; I treat AI as infrastructure, not a
            feature. Daily tools: Claude AI, GitHub Copilot + Codex agents, and Cursor AI for
            code generation, debugging, architecture review, and automated documentation.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
