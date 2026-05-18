"use client";

import { profile, stats } from "@/data/site-content";
import { FadeIn, Stagger, StaggerItem } from "./motion";
import { SectionHeader } from "./SectionHeader";

export function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeader
          index="01"
          eyebrow="About"
          title="Building products"
          highlight="that ship and scale."
        />

        <div className="about-grid">
          <FadeIn className="about-copy">
            <p>
              I&apos;m a <strong>Full-Stack Engineer</strong> with 4.5+ years building
              production-ready products across <em>React, Next.js, Node.js, TypeScript, and MongoDB</em>.
            </p>
            <p>
              I design maintainable application systems &mdash; <strong>typed REST APIs,
              JWT/RBAC access control, and reusable component libraries</strong> &mdash; paired
              with polished, performant frontends.
            </p>
            <p>
              I also ship <strong>AI-assisted product workflows</strong>: OpenAI API
              integrations, OCR pipelines, NLP-assisted interfaces, and document automation.
              Open-source contribution work spans platforms with <em>47K+ combined GitHub stars</em>.
            </p>
            <p className="about-pitch-meta">
              Based in <strong>{profile.locations.join(" · ")}</strong>. Available for remote
              and on-site engagements.
            </p>
          </FadeIn>

          <Stagger className="stats-grid">
            {stats.map((stat) => (
              <StaggerItem key={stat.label} className="stat-card">
                <span className="stat-value grad">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
