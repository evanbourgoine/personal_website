interface SkillBadgeProps {
  skill: string;
  variant?: 'default' | 'featured';
}

export default function SkillBadge({ skill, variant = 'default' }: SkillBadgeProps) {
  const baseClasses = "px-3 py-1 rounded-full text-sm transition-all duration-200";
  
  const variantClasses = variant === 'featured'
    ? "bg-primary text-white border border-primary hover:bg-primary-dark"
    : "bg-white text-gray-700 border border-gray-200 hover:border-primary hover:text-primary";

  return (
    <span className={`${baseClasses} ${variantClasses}`}>
      {skill}
    </span>
  );
}