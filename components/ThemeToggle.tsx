"use client";

import { useEffect } from "react";
import styles from "@/app/page.module.css";

export function ThemeToggle() {
  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    const nextTheme = savedTheme === "light" ? "light" : "dark";

    document.documentElement.dataset.theme = nextTheme;
  }, []);

  function toggleTheme() {
    const activeTheme = document.documentElement.dataset.theme === "light" ? "light" : "dark";
    const nextTheme = activeTheme === "dark" ? "light" : "dark";

    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("portfolio-theme", nextTheme);
  }

  return (
    <button
      aria-label="Toggle theme"
      className={styles.themeToggle}
      onClick={toggleTheme}
      type="button"
    >
      ☀️
    </button>
  );
}
