"use client";

import { useState, type CSSProperties } from "react";
import styles from "@/app/page.module.css";
import type { Project } from "@/data/site-content";

type ProjectGridProps = {
  projects: Project[];
};

const visibilityOptions = ["All", "Featured", "Archive"] as const;

export function ProjectGrid({ projects }: ProjectGridProps) {
  const categoryOptions = ["All", ...new Set(projects.map((project) => project.category))];
  const stackOptions = ["All", ...new Set(projects.flatMap((project) => project.stack).slice(0, 10))];

  const [activeCategory, setActiveCategory] = useState("All");
  const [activeStack, setActiveStack] = useState("All");
  const [activeVisibility, setActiveVisibility] =
    useState<(typeof visibilityOptions)[number]>("All");

  const filteredProjects = projects.filter((project) => {
    const categoryMatch = activeCategory === "All" || project.category === activeCategory;
    const stackMatch = activeStack === "All" || project.stack.includes(activeStack);
    const visibilityMatch =
      activeVisibility === "All" ||
      (activeVisibility === "Featured" ? project.featured : !project.featured);

    return categoryMatch && stackMatch && visibilityMatch;
  });

  return (
    <div className={styles.projectShell}>
      <div className={styles.filterBar}>
        <div className={styles.filterGroup}>
          <p className={styles.filterLabel}>By Category</p>
          <div className={styles.filterButtons}>
            {categoryOptions.map((option) => {
              const isActive = option === activeCategory;

              return (
                <button
                  className={`${styles.filterButton} ${isActive ? styles.filterButtonActive : ""}`}
                  key={option}
                  onClick={() => setActiveCategory(option)}
                  type="button"
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>

        <div className={styles.filterGroup}>
          <p className={styles.filterLabel}>By Tech Stack</p>
          <div className={styles.filterButtons}>
            {stackOptions.map((option) => {
              const isActive = option === activeStack;

              return (
                <button
                  className={`${styles.filterButton} ${isActive ? styles.filterButtonActive : ""}`}
                  key={option}
                  onClick={() => setActiveStack(option)}
                  type="button"
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>

        <div className={styles.filterGroup}>
          <p className={styles.filterLabel}>Visibility</p>
          <div className={styles.filterButtons}>
            {visibilityOptions.map((option) => {
              const isActive = option === activeVisibility;

              return (
                <button
                  className={`${styles.filterButton} ${isActive ? styles.filterButtonActive : ""}`}
                  key={option}
                  onClick={() => setActiveVisibility(option)}
                  type="button"
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className={styles.projectGrid}>
        {filteredProjects.map((project) => {
          const cardStyle = { "--accent": project.accent } as CSSProperties;

          return (
            <article className={styles.projectCard} key={project.name} style={cardStyle}>
              <div className={styles.projectVisual}>
                <span className={styles.projectCategory}>{project.category}</span>
                <span className={styles.projectBadge}>
                  {project.featured ? "Featured Deployment" : "Archive Build"}
                </span>
              </div>

              <div className={styles.projectBody}>
                <div className={styles.projectHeader}>
                  <h3 className={styles.projectTitle}>{project.name}</h3>
                  <a
                    className={styles.linkButton}
                    href={project.href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    View Live
                  </a>
                </div>

                <p className={styles.projectSummary}>{project.summary}</p>

                <div className={styles.tagList}>
                  {project.stack.map((item) => (
                    <span className={styles.tag} key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
