/**
 * TechStack.tsx — Displays all technical skills organized by category.
 *
 * Renders a 2-column grid (on desktop) of TechCategory cards.
 * Each card fades in with a staggered animation using AnimatedSection.
 *
 * Every skill includes a technology icon from the react-icons Simple Icons
 * (Si) set. Skills without a well-known logo omit the icon and display
 * as text-only badges.
 */

import TechCategory from "@/components/sections/TechCategory";
import AnimatedSection from "@/components/ui/AnimatedSection";
import type { Skill } from "@/components/sections/TechCategory";

// ---------------------------------------------------------------------------
// Icon imports — all from the Simple Icons (Si) set in react-icons.
// Each icon is a lightweight inline SVG component.
// ---------------------------------------------------------------------------

// Frontend icons
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiSwift,
  SiTailwindcss,
  SiHtml5,
} from "react-icons/si";

// Backend icons
import {
  SiSpringboot,
  SiNodedotjs,
  SiPostgresql,
  SiFirebase,
} from "react-icons/si";

// Tools & Platforms icons
import {
  SiGit,
  SiDocker,
  SiAmazonwebservices,
  SiPostman,
  SiXcode,
  SiLinux,
} from "react-icons/si";

// VS Code icon lives in the VS Code Icons (Vsc) set, not Simple Icons.
import { VscVscode } from "react-icons/vsc";

// Other icons
import {
  SiPython,
  SiC,
  SiMongodb,
  SiRedis,
  SiGraphql,
} from "react-icons/si";

// Java doesn't have a Simple Icon — use Devicons instead.
import { DiJava } from "react-icons/di";

export default function TechStack() {
  // ---- Skill lists grouped by category ----
  // Each skill has a `name` (displayed text) and an optional `icon`.

  const frontend: Skill[] = [
    { name: "React", icon: <SiReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "SwiftUI", icon: <SiSwift /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "HTML/CSS", icon: <SiHtml5 /> },
  ];

  const backend: Skill[] = [
    { name: "Java", icon: <DiJava /> },
    { name: "Spring Boot", icon: <SiSpringboot /> },
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "REST APIs" }, // No well-known logo — text only
    { name: "Microservices" }, // No well-known logo — text only
  ];

  const tools: Skill[] = [
    { name: "Git", icon: <SiGit /> },
    { name: "Docker", icon: <SiDocker /> },
    { name: "AWS", icon: <SiAmazonwebservices /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "VS Code", icon: <VscVscode /> },
    { name: "Xcode", icon: <SiXcode /> },
    { name: "Linux/Unix", icon: <SiLinux /> },
  ];

  const other: Skill[] = [
    { name: "Python", icon: <SiPython /> },
    { name: "C", icon: <SiC /> },
    { name: "SQL" }, // No well-known logo — text only
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Redis", icon: <SiRedis /> },
    { name: "GraphQL", icon: <SiGraphql /> },
  ];

  return (
    <section id="tech-stack" className="py-12 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <AnimatedSection animation="fade-in">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
            Tech Stack
          </h3>
          <p className="text-center text-gray-600 mb-8 md:mb-12 max-w-2xl mx-auto px-4">
            Technologies and tools I&apos;ve worked with across different
            projects and experiences
          </p>
        </AnimatedSection>

        {/* 2-column grid of category cards with staggered animations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          <AnimatedSection animation="fade-in-left" delay={100}>
            <TechCategory title="Frontend" skills={frontend} />
          </AnimatedSection>
          <AnimatedSection animation="fade-in-right" delay={200}>
            <TechCategory title="Backend" skills={backend} />
          </AnimatedSection>
          <AnimatedSection animation="fade-in-left" delay={300}>
            <TechCategory title="Tools & Platforms" skills={tools} />
          </AnimatedSection>
          <AnimatedSection animation="fade-in-right" delay={400}>
            <TechCategory title="Other" skills={other} />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
