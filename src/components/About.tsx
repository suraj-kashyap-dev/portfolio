"use client";

import { FiCpu, FiGlobe, FiMapPin, FiZap } from "react-icons/fi";
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

        <Stagger className="bento" amount={0.15}>
          <StaggerItem className="bento-card bento-pitch">
            <span className="bento-label">{"// profile"}</span>
            <p className="bento-pitch-copy">
              <strong>Full-Stack Engineer</strong> with 4.5+ years building production-ready
              MERN products across React, Next.js, Node.js, TypeScript, and MongoDB. I ship
              typed APIs, polished UI systems, and AI-assisted product workflows.
            </p>
            <p className="bento-pitch-meta">
              Self-built products like <strong>OpenMeet</strong> and{" "}
              <strong>OpenCRM</strong> sit alongside merged contributions on platforms with{" "}
              <em>47K+ combined GitHub stars</em>.
            </p>
          </StaggerItem>

          {stats.slice(0, 2).map((stat) => (
            <StaggerItem key={stat.label} className="bento-card bento-stat">
              <span className="bento-stat-value grad">{stat.value}</span>
              <span className="bento-stat-label">{stat.label}</span>
            </StaggerItem>
          ))}

          <StaggerItem className="bento-card bento-location">
            <span className="bento-icon">
              <FiMapPin />
            </span>
            <span className="bento-label">based</span>
            <h3 className="bento-h3">{profile.locations.join(" · ")}</h3>
            <p className="bento-sub">India · Remote-friendly worldwide</p>
          </StaggerItem>

          <StaggerItem className="bento-card bento-now">
            <span className="bento-icon">
              <FiZap />
            </span>
            <span className="bento-label">currently shipping</span>
            <h3 className="bento-h3">
              OpenMeet <span className="grad">v1</span>
            </h3>
            <p className="bento-sub">Real-time video on a TypeScript-first Turbo monorepo.</p>
          </StaggerItem>

          <StaggerItem className="bento-card bento-ai">
            <span className="bento-icon">
              <FiCpu />
            </span>
            <span className="bento-label">ai-first engineering</span>
            <p className="bento-sub bento-sub-lg">
              Claude, Cursor, and the OpenAI API as infrastructure — code generation,
              architecture review, OCR, RAG, NLP, and document automation.
            </p>
          </StaggerItem>

          <StaggerItem className="bento-card bento-availability">
            <span className="bento-icon">
              <FiGlobe />
            </span>
            <span className="bento-label">availability</span>
            <h3 className="bento-h3">Open to work</h3>
            <p className="bento-sub">
              Full-time roles, freelance projects, and consulting — remote or on-site.
            </p>
          </StaggerItem>
        </Stagger>

        <FadeIn>
          <div className="quick-facts">
            {[
              ["Years in production", "4.5+"],
              ["Languages", "TypeScript, JavaScript"],
              ["Loves", "Typed contracts, motion, clean APIs"],
              ["BCA CGPA", "8.8 / 10"]
            ].map(([k, v]) => (
              <div key={k} className="quick-fact">
                <span className="quick-fact-k">{k}</span>
                <span className="quick-fact-v">{v}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
