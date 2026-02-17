/**
 * TechCategory.tsx — A card that groups skills under a category heading.
 *
 * Used inside TechStack to render one card per category (e.g. "Frontend",
 * "Backend"). Each card maps its skills array to SkillBadge components.
 *
 * Features a colored accent border on the left and a subtle gradient header
 * bar that uses the category's brand color for visual identity.
 *
 * Each skill is an object with a `name` string and an optional `icon`
 * (a React node such as an <SiReact /> component from react-icons).
 */

import { ReactNode } from "react";
import SkillBadge from "@/components/ui/SkillBadge";

/** Shape of a single skill item passed into this component. */
export interface Skill {
  name: string;
  icon?: ReactNode;
}

interface TechCategoryProps {
  title: string;
  skills: Skill[];
  /** Brand color for the category accent (hex string, e.g. "#2563eb") */
  color?: string;
}

export default function TechCategory({
  title,
  skills,
  color = "#2563eb",
}: TechCategoryProps) {
  return (
    <div
      className="bg-white rounded-xl overflow-hidden border border-gray-200
                 hover:shadow-xl transition-all duration-300 hover:scale-[1.01]"
      style={{ borderLeft: `4px solid ${color}` }}
    >
      {/* Category header with subtle gradient tint */}
      <div
        className="px-6 py-4"
        style={{
          background: `linear-gradient(135deg, ${color}08, ${color}15)`,
        }}
      >
        <h4 className="text-xl font-bold" style={{ color }}>
          {title}
        </h4>
      </div>

      {/* Skill badges */}
      <div className="px-6 pb-6 pt-4">
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <SkillBadge
              key={skill.name}
              skill={skill.name}
              icon={skill.icon}
              accentColor={color}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
