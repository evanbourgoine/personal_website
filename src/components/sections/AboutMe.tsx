/**
 * AboutMe.tsx — Quick facts section displayed below the hero.
 *
 * Shows 4 cards in a responsive grid with personal details:
 *   - Location (Boston, MA)
 *   - Education (Virginia Tech)
 *   - Professional focus (Full-Stack & Analytics)
 *   - Fun fact (Avid Runner)
 *
 * Each card has a colored icon, a label, and a value.
 * Cards use scroll-triggered animations via AnimatedSection.
 */

import { HiLocationMarker, HiCode } from "react-icons/hi";
import { FaGraduationCap, FaRunning } from "react-icons/fa";
import AnimatedSection from "@/components/ui/AnimatedSection";

/** Shape of a single fact card. */
interface Fact {
  icon: React.ReactNode;
  iconBg: string;   // Tailwind bg class for the icon circle
  iconColor: string; // Tailwind text color class for the icon
  label: string;
  value: string;
  subtext?: string;
}

export default function AboutMe() {
  const facts: Fact[] = [
    {
      icon: <HiLocationMarker className="w-7 h-7" />,
      iconBg: "bg-blue-50",
      iconColor: "text-blue-500",
      label: "Based In",
      value: "Boston, MA",
    },
    {
      icon: <FaGraduationCap className="w-7 h-7" />,
      iconBg: "bg-purple-50",
      iconColor: "text-purple-500",
      label: "Alma Mater",
      value: "Virginia Tech",
      subtext: "B.S. Computer Science",
    },
    {
      icon: <HiCode className="w-7 h-7" />,
      iconBg: "bg-indigo-50",
      iconColor: "text-indigo-500",
      label: "Focus",
      value: "Full-Stack & Analytics",
    },
    {
      icon: <FaRunning className="w-7 h-7" />,
      iconBg: "bg-teal-50",
      iconColor: "text-teal-500",
      label: "Off The Clock",
      value: "Avid Runner",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <AnimatedSection animation="fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 gradient-text-hero">
            A Little About Me
          </h2>
          <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">
            The quick version — where I&apos;m from, what I studied, and what
            keeps me going
          </p>
        </AnimatedSection>

        {/* Facts grid — 2 cols on mobile, 4 on large screens */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {facts.map((fact, index) => (
            <AnimatedSection
              key={fact.label}
              animation="fade-in"
              delay={(index + 1) * 100}
            >
              <div
                className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm
                           hover:shadow-lg hover:border-blue-200 hover:-translate-y-1
                           transition-all duration-300 text-center h-full"
              >
                {/* Colored icon circle */}
                <div
                  className={`w-14 h-14 mx-auto mb-4 rounded-xl ${fact.iconBg} flex items-center justify-center
                              group-hover:scale-110 transition-transform duration-300`}
                >
                  <span className={fact.iconColor}>{fact.icon}</span>
                </div>

                {/* Label */}
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                  {fact.label}
                </p>

                {/* Value */}
                <p className="text-lg font-bold text-gray-900">{fact.value}</p>

                {/* Optional subtext */}
                {fact.subtext && (
                  <p className="text-sm text-gray-500 mt-1">{fact.subtext}</p>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
