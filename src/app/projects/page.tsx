/**
 * projects/page.tsx — Projects list page (/projects).
 *
 * Displays all projects as a responsive card grid.
 * Each card links to its detail page at /projects/[slug].
 *
 * Project data is imported from the centralized data module
 * so there's a single source of truth for all project info.
 */

import type { Metadata } from "next";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/sections/ProjectCard";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Projects | Evan Bourgoine",
  description:
    "A collection of projects built by Evan Bourgoine — iOS apps, full-stack web apps, and more.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page heading */}
          <AnimatedSection animation="fade-in">
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
              Projects
            </h3>
            <p className="text-center text-gray-600 mb-8 md:mb-12 max-w-2xl mx-auto px-4">
              A collection of projects I&apos;ve built — from iOS apps to
              full-stack web platforms
            </p>
          </AnimatedSection>

          {/* Project cards grid — 1 column on mobile, 2 on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <AnimatedSection
                key={project.id}
                animation={index % 2 === 0 ? "fade-in-left" : "fade-in-right"}
                delay={(index + 1) * 100}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  githubUrl={project.githubUrl}
                  liveUrl={project.liveUrl}
                  image={project.imageUrl}
                  category={project.category}
                  slug={project.id}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
