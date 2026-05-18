"use client";

import { techPills } from "@/data/site-content";

export function TechMarquee() {
  const items = [...techPills, ...techPills];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-fade marquee-fade-left" />
      <div className="marquee-fade marquee-fade-right" />
      <div className="marquee-track">
        {items.map(({ label, icon: Icon }, i) => (
          <span className="marquee-item" key={`${label}-${i}`}>
            <Icon /> {label}
          </span>
        ))}
      </div>
    </div>
  );
}
