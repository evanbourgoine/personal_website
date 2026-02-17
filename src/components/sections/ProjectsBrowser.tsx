/**
 * ProjectsBrowser.tsx — Client component that powers the /projects page.
 *
 * Two-step browsing experience:
 *   1. Category view (default) — a grid of CategoryCard components.
 *      Each card shows a project category (iOS, Full-Stack, etc.) with
 *      a project count badge.
 *   2. Project view (after clicking a category) — shows the projects
 *      belonging to that category, or a friendly empty-state message
 *      if no projects exist yet.
 *
 * State:
 *   selectedCategory — null (category view) or a ProjectCategory string.
 */

"use client";

import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

// Data & helpers
import {
  projectCategories,
  getProjectsByCategory,
} from "@/data/projects";
import type { ProjectCategory } from "@/data/types";

// Components
import CategoryCard from "@/components/sections/CategoryCard";
import ProjectCard from "@/components/sections/ProjectCard";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function ProjectsBrowser() {
  // null = show categories, string = show that category's projects
  const [selectedCategory, setSelectedCategory] =
    useState<ProjectCategory | null>(null);

  // ------------------------------------------------------------------
  // Helper: get the category info object for the currently selected id
  // ------------------------------------------------------------------
  const activeCategoryInfo = selectedCategory
    ? projectCategories.find((c) => c.id === selectedCategory)
    : null;

  // ------------------------------------------------------------------
  // Helper: filtered project list for the selected category
  // ------------------------------------------------------------------
  const filteredProjects = selectedCategory
    ? getProjectsByCategory(selectedCategory)
    : [];

  // ------------------------------------------------------------------
  // RENDER — Category grid (default view)
  // ------------------------------------------------------------------
  if (!selectedCategory) {
    return (
      <div>
        {/* Category cards in a responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectCategories.map((category, index) => {
            // Count how many projects belong to this category
            const count = getProjectsByCategory(category.id).length;

            return (
              <AnimatedSection
                key={category.id}
                animation="fade-in"
                delay={(index + 1) * 100}
              >
                <CategoryCard
                  title={category.title}
                  description={category.description}
                  icon={category.icon}
                  color={category.color}
                  projectCount={count}
                  onClick={() => setSelectedCategory(category.id)}
                />
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    );
  }

  // ------------------------------------------------------------------
  // RENDER — Projects for the selected category
  // ------------------------------------------------------------------
  return (
    <div>
      {/* Back button + category heading */}
      <div className="mb-8">
        <button
          onClick={() => setSelectedCategory(null)}
          className="inline-flex items-center gap-2 text-primary hover:text-primary-dark
                     transition-colors mb-4 cursor-pointer"
        >
          <FaArrowLeft className="w-4 h-4" />
          <span>Back to Categories</span>
        </button>

        {/* Category title with icon */}
        {activeCategoryInfo && (
          <div className="flex items-center gap-3">
            <span className="text-3xl">{activeCategoryInfo.icon}</span>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              {activeCategoryInfo.title}
            </h3>
          </div>
        )}
      </div>

      {/* Project cards — or empty state */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
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
      ) : (
        /* ---- Empty state ---- */
        <AnimatedSection animation="fade-in">
          <div className="text-center py-16 px-4">
            <span className="text-5xl mb-4 block">🚧</span>
            <h4 className="text-xl font-semibold text-gray-700 mb-2">
              No projects at the moment
            </h4>
            <p className="text-gray-500 max-w-md mx-auto">
              I&apos;m currently working on projects in this category.
              Check back soon!
            </p>
          </div>
        </AnimatedSection>
      )}
    </div>
  );
}
