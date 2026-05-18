"use client";

import { motion } from "framer-motion";
import { FiArrowDownRight, FiMail, FiMapPin } from "react-icons/fi";
import { profile, techPills } from "@/data/site-content";
import { fadeUpVariants, staggerContainer } from "./motion";

export function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg" aria-hidden="true">
        <span className="hero-glow hero-glow-1" />
        <span className="hero-glow hero-glow-2" />
        <span className="hero-grid" />
      </div>

      <motion.div
        className="container hero-inner"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.div className="hero-status" variants={fadeUpVariants}>
          <span className="ping" />
          <span>{profile.status}</span>
          <span className="hero-status-divider" />
          <span className="hero-status-loc">
            <FiMapPin /> {profile.locations.join(" · ")}
          </span>
        </motion.div>

        <motion.h1 className="hero-title" variants={fadeUpVariants}>
          <span className="hero-title-line">Hi, I&apos;m</span>
          <span className="hero-title-name">
            Suraj <span className="grad">Kashyap</span>
          </span>
        </motion.h1>

        <motion.p className="hero-role" variants={fadeUpVariants}>
          {profile.role} <span className="dot">·</span> {profile.tagline}
        </motion.p>

        <motion.p className="hero-pitch" variants={fadeUpVariants}>
          {profile.pitch}
        </motion.p>

        <motion.div className="hero-actions" variants={fadeUpVariants}>
          <a href="#contact" className="btn btn-primary">
            <FiMail /> Get in touch
          </a>
          <a href="#work" className="btn btn-ghost">
            See my work <FiArrowDownRight />
          </a>
        </motion.div>

        <motion.div className="hero-pills" variants={fadeUpVariants}>
          {techPills.map(({ label, icon: Icon }, i) => (
            <motion.span
              key={label}
              className="pill"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.05, duration: 0.4, ease: "easeOut" }}
              whileHover={{ y: -2 }}
            >
              <Icon /> {label}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
