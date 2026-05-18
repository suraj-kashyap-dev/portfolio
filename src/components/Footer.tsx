"use client";

import { profile } from "@/data/site-content";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>&copy; {new Date().getFullYear()} {profile.name}</span>
        <span className="footer-mid">
          React &middot; Node.js &middot; TypeScript &middot; Next.js &middot; GenAI
        </span>
        <span>{profile.locations.join(" · ")}, India</span>
      </div>
    </footer>
  );
}
