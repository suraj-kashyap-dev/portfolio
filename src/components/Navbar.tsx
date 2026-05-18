"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { navItems } from "@/data/site-content";

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
          aria-label="Toggle menu"
          className="nav-burger"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            key="mobile"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="nav-mobile"
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className={`nav-mobile-link ${active === item.id ? "is-active" : ""}`}
              >
                {item.label}
              </a>
            ))}
            <a href="#contact" className="nav-mobile-cta" onClick={() => setOpen(false)}>
              Let&apos;s Talk
            </a>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
