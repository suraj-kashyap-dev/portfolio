"use client";

import { useEffect, useState } from "react";
import { navItems } from "@/data/site-content";

export function SideNav() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
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

  return (
    <aside className="sidenav" aria-label="Section navigator">
      <ul>
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`sidenav-link ${active === item.id ? "is-active" : ""}`}
              aria-label={item.label}
            >
              <span className="sidenav-dot" />
              <span className="sidenav-label">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
