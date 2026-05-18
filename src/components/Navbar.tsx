"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import { contactLinks, navItems, profile } from "@/data/site-content";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);

      const probe = window.scrollY + window.innerHeight * 0.3;
      let current = "home";

      navItems.forEach((item) => {
        const el = document.getElementById(item.id);

        if (el && probe >= el.offsetTop) {
          current = item.id;
        }
      });

      setActive(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`nav ${scrolled ? "is-scrolled" : ""}`}
      >
        <div className="nav-inner">
          <a href="#home" className="nav-brand" onClick={() => setOpen(false)}>
            <span className="nav-brand-mark">SK</span>
            <span className="nav-brand-copy">
              <span className="nav-brand-name">
                Suraj<em>.dev</em>
              </span>
              <span className="nav-brand-role">Full-Stack Engineer</span>
            </span>
          </a>

          <nav className="nav-links">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`nav-link ${active === item.id ? "is-active" : ""}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a href="#contact" className="nav-cta">
            Let&apos;s Talk
          </a>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="nav-burger"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open ? (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="mobile-backdrop"
            onClick={() => setOpen(false)}
          />
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {open ? (
          <motion.aside
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mobile-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Main navigation"
          >
            <div className="mobile-drawer-head">
              <span className="nav-brand-mark">SK</span>
              <button
                type="button"
                aria-label="Close menu"
                className="mobile-drawer-close"
                onClick={() => setOpen(false)}
              >
                <FiX />
              </button>
            </div>

            <nav className="mobile-drawer-nav">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className={`mobile-drawer-link ${active === item.id ? "is-active" : ""}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.12 + i * 0.04, duration: 0.3, ease: "easeOut" }}
                >
                  <span className="mobile-drawer-num">0{i + 1}</span>
                  <span className="mobile-drawer-label">{item.label}</span>
                  <FiArrowUpRight className="mobile-drawer-arrow" />
                </motion.a>
              ))}
            </nav>

            <div className="mobile-drawer-foot">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn btn-primary mobile-drawer-cta"
              >
                Hire me
              </a>

              <div className="mobile-drawer-meta">
                <span className="mobile-drawer-meta-label">Based in</span>
                <span className="mobile-drawer-meta-value">
                  {profile.locations.join(" · ")}
                </span>
              </div>

              <div className="mobile-drawer-socials">
                {contactLinks.slice(2).map(({ href, icon: Icon, label, external }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noreferrer" : undefined}
                    className="mobile-drawer-social"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </motion.aside>
        ) : null}
      </AnimatePresence>
    </>
  );
}
