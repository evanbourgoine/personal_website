/**
 * FocusAreas.tsx — Showcases core areas of expertise.
 *
 * Displays 3 cards for the user's main focus areas:
 *   1. Full-Stack Development
 *   2. Data & Analytics
 *   3. Cloud & DevOps
 *
 * Each card has a gradient-colored icon, description, and tech tag pills.
 * The section sits on a light blue-tinted background to visually separate
 * it from the white AboutMe section above and the dark CTA below.
 */

import { HiCode, HiChartBar, HiCloud } from "react-icons/hi";
import AnimatedSection from "@/components/ui/AnimatedSection";

/** Data shape for each focus area card. */
interface FocusArea {
  icon: React.ReactNode;
  gradient: string; // CSS gradient for the icon circle
  title: string;
  description: string;
  tags: string[];
}

export default function FocusAreas() {
  const areas: FocusArea[] = [
    {
      icon: <HiCode className="w-8 h-8 text-white" />,
      gradient: "linear-gradient(135deg, #2563eb, #60a5fa)",
      title: "Full-Stack Development",
      description:
        "End-to-end web applications with React, Next.js, Node.js, and Spring Boot. From database design to polished UI.",
      tags: ["React", "Next.js", "Spring Boot", "Node.js"],
    },
    {
      icon: <HiChartBar className="w-8 h-8 text-white" />,
      gradient: "linear-gradient(135deg, #7c3aed, #a78bfa)",
      title: "Data & Analytics",
      description:
        "Transforming raw data into actionable insights through analysis, visualization, and data-driven applications.",
      tags: ["Python", "SQL", "MongoDB", "Redis"],
    },
    {
      icon: <HiCloud className="w-8 h-8 text-white" />,
      gradient: "linear-gradient(135deg, #14b8a6, #5eead4)",
      title: "Cloud & DevOps",
      description:
        "Deploying and scaling applications with containerization, CI/CD pipelines, and cloud infrastructure.",
      tags: ["AWS", "Docker", "GitHub Actions"],
    },
  ];

  // Animation direction per card: left, center (fade-in), right
  const animations: Array<"fade-in-left" | "fade-in" | "fade-in-right"> = [
    "fade-in-left",
    "fade-in",
    "fade-in-right",
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-blue-50/50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <AnimatedSection animation="fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 gradient-text-hero">
            What I Focus On
          </h2>
          <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
            Building tools and systems that make an impact
          </p>
        </AnimatedSection>

        {/* Focus cards — 1 col on mobile, 3 cols on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <AnimatedSection
              key={area.title}
              animation={animations[index]}
              delay={(index + 1) * 100}
            >
              <div
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm
                           hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
              >
                {/* Gradient icon circle */}
                <div
                  className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center
                             group-hover:scale-110 transition-transform duration-300"
                  style={{ background: area.gradient }}
                >
                  {area.icon}
                </div>

                {/* Title */}
                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  {area.title}
                </h4>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                  {area.description}
                </p>

                {/* Tech tag pills */}
                <div className="flex flex-wrap gap-2">
                  {area.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-50 text-gray-600 text-xs font-medium
                                 rounded-full border border-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
