/**
 * projects/page.tsx — Projects page (/projects).
 *
 * Features a dark gradient hero-style header matching the site theme,
 * then shows project categories (iOS, Full-Stack, Backend, etc.).
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
      {/* ---- Dark gradient page header (matches hero/CTA theme) ---- */}
      <section
        className="relative overflow-hidden py-16 md:py-20"
        style={{
          background:
            "linear-gradient(135deg, #0f172a 0%, #1e3a5f 25%, #2563eb 60%, #7c3aed 100%)",
        }}
      >
        {/* Decorative floating orbs for depth */}
        <div
          className="absolute top-0 left-1/4 w-72 h-72 rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, #60a5fa, transparent)" }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full opacity-15 blur-3xl"
          style={{ background: "radial-gradient(circle, #a78bfa, transparent)" }}
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text-hero">
              Projects
            </h1>
            <p className="text-blue-200/80 text-lg md:text-xl max-w-2xl mx-auto">
              Browse by category to explore the projects I&apos;ve built
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ---- Category → project browser ---- */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectsBrowser />
        </div>
      </section>
    </main>
  );
}
