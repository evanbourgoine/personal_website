import SkillBadge from "./SkillBadge";

interface TechCategoryProps {
  title: string;
  skills: string[];
}

export default function TechCategory({ title, skills }: TechCategoryProps) {
  return (
    <div className="bg-blue-50 rounded-lg p-6 border border-blue-100 hover:border-primary transition-colors duration-200">
      <h4 className="text-xl font-semibold text-primary mb-4">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <SkillBadge key={skill} skill={skill} />
        ))}
      </div>
    </div>
  );
}