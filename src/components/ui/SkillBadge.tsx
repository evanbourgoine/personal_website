/**
 * SkillBadge.tsx — Small pill / tag that displays a skill name with an optional icon.
 *
 * Used inside TechCategory cards on the Tech Stack page.
 *
 * Props:
 *   skill   — the technology name displayed as text.
 *   icon    — (optional) a React node (e.g. an <SiReact /> icon) rendered
 *             inline before the skill name. If omitted, only text is shown.
 *   variant — visual style:
 *     "default"  — white background, subtle border, turns blue on hover.
 *     "featured" — solid blue background with white text.
 */

import { ReactNode } from "react";

interface SkillBadgeProps {
  skill: string;
  icon?: ReactNode;
  variant?: "default" | "featured";
}

export default function SkillBadge({
  skill,
  icon,
  variant = "default",
}: SkillBadgeProps) {
  const baseClasses =
    "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm transition-all duration-200";

  const variantClasses =
    variant === "featured"
      ? "bg-primary text-white border border-primary hover:bg-primary-dark"
      : "bg-white text-gray-700 border border-gray-200 hover:border-primary hover:text-primary";

  return (
    <span className={`${baseClasses} ${variantClasses}`}>
      {/* Icon rendered inline before the label (only if provided) */}
      {icon && <span className="flex-shrink-0 text-[1em]">{icon}</span>}
      {skill}
    </span>
  );
}
