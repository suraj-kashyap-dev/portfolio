"use client";

import { motion } from "framer-motion";
import { FiArrowDownRight, FiMail, FiMapPin } from "react-icons/fi";
import { profile, stats } from "@/data/site-content";
import { fadeUpVariants, staggerContainer } from "./motion";
import { TechMarquee } from "./TechMarquee";

export function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <motion.div
          className="hero-grid-2"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <div className="hero-col-left">
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
              <a href="#contact" className="btn btn-primary magnetic">
                <FiMail /> Hire me
              </a>
              <a href="#work" className="btn btn-ghost magnetic">
                Explore my work <FiArrowDownRight />
              </a>
            </motion.div>

            <motion.div className="hero-stats" variants={fadeUpVariants}>
              {stats.map((stat) => (
                <div key={stat.label} className="hero-stat">
                  <span className="hero-stat-value grad">{stat.value}</span>
                  <span className="hero-stat-label">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="hero-col-right"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <div className="id-card">
              <div className="id-card-aura" aria-hidden="true" />
              <div className="id-card-window">
                <div className="id-window-bar">
                  <span className="id-dot id-dot-r" />
                  <span className="id-dot id-dot-y" />
                  <span className="id-dot id-dot-g" />
                  <span className="id-window-title">suraj.kashyap.ts</span>
                </div>

                <div className="id-window-body">
                  <div className="id-line">
                    <span className="ln">1</span>
                    <span className="kw">const</span>{" "}
                    <span className="vn">me</span>{" "}
                    <span className="op">=</span>{" "}
                    <span className="bk">{"{"}</span>
                  </div>
                  <div className="id-line">
                    <span className="ln">2</span>
                    <span className="ind" /> <span className="prp">name</span>
                    <span className="op">:</span>{" "}
                    <span className="str">&apos;Suraj Kashyap&apos;</span>
                    <span className="op">,</span>
                  </div>
                  <div className="id-line">
                    <span className="ln">3</span>
                    <span className="ind" /> <span className="prp">role</span>
                    <span className="op">:</span>{" "}
                    <span className="str">&apos;Full-Stack Engineer&apos;</span>
                    <span className="op">,</span>
                  </div>
                  <div className="id-line">
                    <span className="ln">4</span>
                    <span className="ind" /> <span className="prp">stack</span>
                    <span className="op">:</span>{" "}
                    <span className="bk">[</span>
                    <span className="str">&apos;React&apos;</span>
                    <span className="op">,</span>{" "}
                    <span className="str">&apos;Next.js&apos;</span>
                    <span className="op">,</span>{" "}
                    <span className="str">&apos;Node&apos;</span>
                    <span className="bk">]</span>
                    <span className="op">,</span>
                  </div>
                  <div className="id-line">
                    <span className="ln">5</span>
                    <span className="ind" /> <span className="prp">based</span>
                    <span className="op">:</span>{" "}
                    <span className="str">&apos;Delhi NCR · Noida · Gurgaon&apos;</span>
                    <span className="op">,</span>
                  </div>
                  <div className="id-line">
                    <span className="ln">6</span>
                    <span className="ind" /> <span className="prp">years</span>
                    <span className="op">:</span>{" "}
                    <span className="num">4.5</span>
                    <span className="op">,</span>
                  </div>
                  <div className="id-line">
                    <span className="ln">7</span>
                    <span className="ind" /> <span className="prp">status</span>
                    <span className="op">:</span>{" "}
                    <span className="str">&apos;available&apos;</span>
                    <span className="op">,</span>
                  </div>
                  <div className="id-line">
                    <span className="ln">8</span>
                    <span className="bk">{"}"}</span>{" "}
                    <span className="kw">as const</span>
                    <span className="op">;</span>
                  </div>
                  <div className="id-line id-line-spacer" />
                  <div className="id-line">
                    <span className="ln">9</span>
                    <span className="cmt">{"// Currently shipping"}</span>
                  </div>
                  <div className="id-line">
                    <span className="ln">10</span>
                    <span className="fn">deploy</span>
                    <span className="bk">(</span>
                    <span className="vn">openMeet</span>
                    <span className="bk">)</span>
                    <span className="op">;</span>
                    <span className="caret" />
                  </div>
                </div>
              </div>

              <div className="id-card-foot">
                <div className="id-foot-item">
                  <span className="id-foot-dot" />
                  <span>Available · 2025-26 hires</span>
                </div>
                <div className="id-foot-item id-foot-handle">
                  <span>{profile.handle}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <TechMarquee />
    </section>
  );
}
