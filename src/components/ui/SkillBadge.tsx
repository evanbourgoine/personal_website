/**
 * SkillBadge.tsx — Small pill / tag that displays a skill name with an optional icon.
 *
 * Used inside TechCategory cards on the Tech Stack page.
 *
 * Props:
 *   skill       — the technology name displayed as text.
 *   icon        — (optional) a React node (e.g. an <SiReact /> icon) rendered
 *                 inline before the skill name. If omitted, only text is shown.
 *   accentColor — (optional) hex color for hover border/text accent.
 *   variant     — visual style:
 *     "default"  — white background, subtle border, themed accent on hover.
 *     "featured" — solid blue background with white text.
 */

"use client";

import { ReactNode } from "react";

interface SkillBadgeProps {
  skill: string;
  icon?: ReactNode;
  accentColor?: string;
  variant?: "default" | "featured";
}

export default function SkillBadge({
  skill,
  icon,
  accentColor,
  variant = "default",
}: SkillBadgeProps) {
  const baseClasses =
    "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200";

  // Featured variant stays the same
  if (variant === "featured") {
    return (
      <span
        className={`${baseClasses} bg-primary text-white border border-primary hover:bg-primary-dark`}
      >
        {icon && <span className="flex-shrink-0 text-[1em]">{icon}</span>}
        {skill}
      </span>
    );
  }

  // Default variant — dynamic accent colour on hover via event handlers
  return (
    <span
      className={`${baseClasses} bg-gray-50 text-gray-700 border border-gray-200 cursor-default
                   hover:shadow-sm`}
      onMouseEnter={(e) => {
        if (accentColor) {
          (e.currentTarget as HTMLElement).style.borderColor = accentColor;
          (e.currentTarget as HTMLElement).style.color = accentColor;
        }
      }}
      onMouseLeave={(e) => {
        if (accentColor) {
          (e.currentTarget as HTMLElement).style.borderColor = "";
          (e.currentTarget as HTMLElement).style.color = "";
        }
      }}
    >
      {icon && <span className="flex-shrink-0 text-[1em]">{icon}</span>}
      {skill}
    </span>
  );
}
