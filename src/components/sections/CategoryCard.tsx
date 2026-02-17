/**
 * CategoryCard.tsx — Clickable card for a project category.
 *
 * Displays the category's emoji icon, title, description, and a project
 * count badge. Clicking the card triggers the `onClick` callback so the
 * parent (ProjectsBrowser) can switch to showing that category's projects.
 *
 * The card uses rounded corners, a subtle hover lift, and the category's
 * brand color for the left border accent and header tint — matching the
 * TechCategory card style for visual consistency across the site.
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
      className="w-full text-left bg-white rounded-xl overflow-hidden border border-gray-200
                 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]
                 cursor-pointer group flex flex-col"
      /* Coloured left border applied via inline style since the colour is dynamic */
      style={{ borderLeft: `4px solid ${color}` }}
    >
      {/* Header with subtle gradient tint */}
      <div
        className="px-6 pt-6 pb-3"
        style={{
          background: `linear-gradient(135deg, ${color}08, ${color}12)`,
        }}
      >
        {/* Icon + title row */}
        <div className="flex items-center gap-3">
          <span className="text-3xl">{icon}</span>
          <h4
            className="text-xl font-bold transition-colors"
            style={{ color }}
          >
            {title}
          </h4>
        </div>
      </div>

      {/* Body */}
      <div className="px-6 pb-6 pt-3 flex flex-col flex-grow">
        {/* Category description */}
        <p className="text-gray-600 text-sm mb-4 flex-grow leading-relaxed">
          {description}
        </p>

        {/* Project count badge + arrow hint */}
        <div className="flex items-center justify-between">
          <span
            className="text-xs font-medium px-3 py-1 rounded-full"
            style={{
              backgroundColor: `${color}15`, // ~8% opacity hex suffix
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
          <span
            className="group-hover:translate-x-1 transition-all duration-200 text-lg"
            style={{ color }}
          >
            →
          </span>
        </div>
      </div>
    </button>
  );
}
