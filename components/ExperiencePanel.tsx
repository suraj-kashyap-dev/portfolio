"use client";

import { useState } from "react";
import styles from "@/app/page.module.css";
import type { Experience } from "@/data/site-content";

type ExperiencePanelProps = {
  experiences: Experience[];
};

export function ExperiencePanel({ experiences }: ExperiencePanelProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeExperience = experiences[activeIndex];

  return (
    <div className={styles.experienceGrid}>
      <div className={styles.timeline}>
        {experiences.map((experience, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              className={`${styles.timelineItem} ${isActive ? styles.timelineItemActive : ""}`}
              key={`${experience.company}-${experience.period}`}
              onClick={() => setActiveIndex(index)}
              type="button"
            >
              <span className={styles.timelineRole}>{experience.company}</span>
              <span className={styles.timelinePeriod}>{experience.period}</span>
            </button>
          );
        })}
      </div>

      <article className={styles.detailCard}>
        <div className={styles.detailHeader}>
          <div>
            <p className={styles.cardEyebrow}>Operational Overview</p>
            <h3 className={styles.detailTitle}>{activeExperience.role}</h3>
          </div>
          <span className={styles.statusChip}>{activeExperience.type}</span>
        </div>

        <p className={styles.detailMeta}>
          {activeExperience.location} · {activeExperience.period}
        </p>
        <p className={styles.detailSummary}>{activeExperience.summary}</p>

        <div className={styles.detailColumns}>
          <div>
            <p className={styles.cardEyebrow}>Key Indicators</p>
            <ul className={styles.bulletList}>
              {activeExperience.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className={styles.cardEyebrow}>Stack Integration</p>
            <div className={styles.tagList}>
              {activeExperience.stack.map((item) => (
                <span className={styles.tag} key={item}>
                  {item}
                </span>
              ))}
            </div>
            <p className={styles.systemStatus}>{activeExperience.systemStatus}</p>
          </div>
        </div>
      </article>
    </div>
  );
}
