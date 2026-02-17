/**
 * projects/page.tsx — Projects page (/projects).
 *
 * Shows project categories first (iOS, Full-Stack, Backend, etc.).
 * Clicking a category reveals the projects within it, or displays
 * a friendly empty state if none exist yet.
 *
 * The interactive browsing logic lives in the ProjectsBrowser client
 * component. This server component just provides metadata and the
 * page heading.
 */

import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ProjectsBrowser from "@/components/sections/ProjectsBrowser";

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
              Browse by category to explore the projects I&apos;ve built
            </p>
          </AnimatedSection>

          {/* Category → project browser (client component) */}
          <ProjectsBrowser />
        </div>
      </section>
    </main>
  );
}
