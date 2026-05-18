"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { contactLinks, profile } from "@/data/site-content";
import { FadeIn, Stagger, StaggerItem } from "./motion";
import { SectionHeader } from "./SectionHeader";

export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeader
          index="05"
          eyebrow="Contact"
          title="Let's build"
          highlight="something great."
          description="Open to full-time roles, freelance projects, and consulting at the intersection of modern web and AI."
        />

        <div className="contact-grid">
          <FadeIn className="contact-cta">
            <p className="contact-cta-line">
              Email me directly &mdash;
            </p>
            <a className="contact-cta-email grad" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <p className="contact-cta-meta">
              Based in <strong>{profile.locations.join(" · ")}</strong>. Available to join
              immediately for remote and on-site opportunities.
            </p>
          </FadeIn>

          <Stagger className="contact-links">
            {contactLinks.map(({ href, icon: Icon, label, value, external }) => (
              <StaggerItem key={label}>
                <motion.a
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="contact-link"
                  href={href}
                  rel={external ? "noreferrer" : undefined}
                  target={external ? "_blank" : undefined}
                >
                  <span className="contact-link-icon">
                    <Icon />
                  </span>
                  <span className="contact-link-text">
                    <span className="contact-link-label">{label}</span>
                    <span className="contact-link-value">{value}</span>
                  </span>
                  <FiArrowUpRight className="contact-link-arrow" />
                </motion.a>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
