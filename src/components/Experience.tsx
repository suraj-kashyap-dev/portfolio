"use client";

import { FiBriefcase, FiCalendar, FiMapPin } from "react-icons/fi";
import { experiences } from "@/data/site-content";
import { Stagger, StaggerItem } from "./motion";
import { SectionHeader } from "./SectionHeader";

export function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHeader
          index="03"
          eyebrow="Experience"
          title="Where I've"
          highlight="shipped."
        />

        <Stagger className="exp-timeline">
          {experiences.map((exp) => (
            <StaggerItem key={`${exp.company}-${exp.period}`} className="exp-card">
              <div className="exp-card-rail">
                <span className="exp-card-dot" />
              </div>

              <div className="exp-card-body">
                <div className="exp-card-head">
                  <div>
                    <h3 className="exp-card-company">
                      <FiBriefcase /> {exp.company}
                    </h3>
                    <p className="exp-card-role">{exp.role}</p>
                  </div>
                  <span className="exp-card-type">{exp.type}</span>
                </div>

                <div className="exp-card-meta">
                  <span>
                    <FiCalendar /> {exp.period}
                  </span>
                  <span>
                    <FiMapPin /> {exp.location}
                  </span>
                </div>

                <p className="exp-card-summary">{exp.summary}</p>

                <ul className="exp-card-points">
                  {exp.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <div className="tag-row">
                  {exp.stack.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
