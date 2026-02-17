/**
 * TechCategory.tsx — A card that groups skills under a category heading.
 *
 * Used inside TechStack to render one card per category (e.g. "Frontend",
 * "Backend"). Each card maps its skills array to SkillBadge components.
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
}

export default function TechCategory({ title, skills }: TechCategoryProps) {
  return (
    <div className="bg-blue-50 rounded-lg p-6 border border-blue-100 hover:border-primary transition-colors duration-200">
      <h4 className="text-xl font-semibold text-primary mb-4">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <SkillBadge key={skill.name} skill={skill.name} icon={skill.icon} />
        ))}
      </div>
    </div>
  );
}
