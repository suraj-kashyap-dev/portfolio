"use client";

import { FadeIn } from "./motion";

type Props = {
  index: string;
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
};

export function SectionHeader({ index, eyebrow, title, highlight, description }: Props) {
  return (
    <FadeIn className="section-head">
      <div className="section-head-meta">
        <span className="section-index">{index}</span>
        <span className="section-eyebrow">{eyebrow}</span>
      </div>
      <h2 className="section-title">
        {title}
        {highlight ? <span className="grad"> {highlight}</span> : null}
      </h2>
      {description ? <p className="section-description">{description}</p> : null}
    </FadeIn>
  );
}
