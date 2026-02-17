/**
 * CategoryCard.tsx — Clickable card for a project category.
 *
 * Displays the category's emoji icon, title, description, and a project
 * count badge. Clicking the card triggers the `onClick` callback so the
 * parent (ProjectsBrowser) can switch to showing that category's projects.
 *
 * The card's left border uses the category's brand color for visual identity.
 */

interface CategoryCardProps {
  title: string;
  description: string;
  icon: string;
  color: string;
  projectCount: number;
  onClick: () => void;
}

export default function CategoryCard({
  title,
  description,
  icon,
  color,
  projectCount,
  onClick,
}: CategoryCardProps) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left bg-white rounded-lg overflow-hidden border border-gray-200
                 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]
                 cursor-pointer group p-6 flex flex-col"
      /* Coloured left border applied via inline style since the colour is dynamic */
      style={{ borderLeft: `4px solid ${color}` }}
    >
      {/* Icon + title row */}
      <div className="flex items-center gap-3 mb-3">
        <span className="text-3xl">{icon}</span>
        <h4 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
          {title}
        </h4>
      </div>

      {/* Category description */}
      <p className="text-gray-600 text-sm mb-4 flex-grow leading-relaxed">
        {description}
      </p>

      {/* Project count badge */}
      <div className="flex items-center justify-between">
        <span
          className="text-xs font-medium px-3 py-1 rounded-full"
          style={{
            backgroundColor: `${color}15`, // 15 = ~8% opacity hex suffix
            color: color,
          }}
        >
          {projectCount === 0
            ? "No projects yet"
            : projectCount === 1
            ? "1 project"
            : `${projectCount} projects`}
        </span>

        {/* Arrow hint */}
        <span className="text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all duration-200 text-lg">
          →
        </span>
      </div>
    </button>
  );
}
