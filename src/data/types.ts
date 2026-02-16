/**
 * types.ts — Shared TypeScript type definitions used across the project.
 *
 * Centralizing types here keeps them consistent and easy to update.
 * Import from "@/data/types" wherever you need project-related types.
 */

// ---------------------------------------------------------------------------
// Project category identifiers — each project belongs to exactly one category.
// ---------------------------------------------------------------------------
export type ProjectCategory =
  | "iOS"
  | "fullstack"
  | "backend"
  | "cloud"
  | "data";

// ---------------------------------------------------------------------------
// Project — the main data shape for every project displayed on the site.
// ---------------------------------------------------------------------------
export interface Project {
  /** Unique URL-safe identifier, also used as the slug for routing. */
  id: string;
  title: string;
  /** Short one-liner shown on cards. */
  description: string;
  /** Extended description shown on the detail page. */
  longDescription?: string;
  technologies: string[];
  category: ProjectCategory;
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  /** Key achievements / bullet points. */
  highlights: string[];
  /** ISO date string (yyyy-mm-dd). */
  date: string;
}

// ---------------------------------------------------------------------------
// ProjectCategoryInfo — metadata for each category (used in filters / cards).
// ---------------------------------------------------------------------------
export interface ProjectCategoryInfo {
  id: ProjectCategory;
  title: string;
  description: string;
  icon: string;
  color: string;
}

// ---------------------------------------------------------------------------
// ProjectDetail — extended project info used on the /projects/[slug] page.
// Contains richer fields like images gallery, features, challenges, outcomes.
// ---------------------------------------------------------------------------
export interface ProjectDetail {
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: string;
  images: string[];
  features: string[];
  challenges: string[];
  outcomes: string[];
}
