/**
 * [slug]/page.tsx — Individual project detail page (/projects/:slug).
 *
 * This dynamic route renders a full breakdown of a single project:
 *   - Header with title, description, and action buttons
 *   - Image gallery
 *   - Overview (long description)
 *   - Technologies used
 *   - Key features, technical challenges, and outcomes
 *
 * Data is loaded from the centralized `projectDetails` map in @/data/projects.
 * `generateStaticParams` pre-renders all known slugs at build time.
 */

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaArrowLeft } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
import { projectDetails, getAllProjectSlugs } from "@/data/projects";

// ---------------------------------------------------------------------------
// Static param generation — tells Next.js which slugs to pre-render.
// ---------------------------------------------------------------------------
export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectDetails[slug];

  // If the slug doesn't match any project, show the Next.js 404 page.
  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      {/* ---- Back navigation ---- */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors"
        >
          <FaArrowLeft className="w-4 h-4" />
          <span>Back to Projects</span>
        </Link>
      </div>

      {/* ---- Project header with gradient background ---- */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-primary mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-gray-700 mb-6">{project.description}</p>

          {/* Action buttons — GitHub and optional live demo */}
          <div className="flex gap-4 flex-wrap">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium"
              >
                <FaGithub className="w-5 h-5" />
                <span>View on GitHub</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-200 font-medium"
              >
                <HiExternalLink className="w-5 h-5" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* ---- Main content ---- */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Image gallery — 2-column grid on desktop */}
        {project.images && project.images.length > 0 && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Project Images
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.images.map((image, index) => (
                <div
                  key={index}
                  className="relative h-80 bg-gray-100 rounded-lg overflow-hidden border border-gray-200"
                >
                  <Image
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Overview */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-primary mb-6">Overview</h2>
          <div className="prose prose-lg max-w-none text-gray-700 whitespace-pre-line">
            {project.longDescription}
          </div>
        </div>

        {/* Technologies used */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-blue-50 text-primary font-medium rounded-lg border border-blue-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Key features */}
        {project.features && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Key Features
            </h2>
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-primary text-xl">✓</span>
                  <span className="text-gray-700 text-lg">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technical challenges */}
        {project.challenges && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Technical Challenges
            </h2>
            <ul className="space-y-3">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-primary text-xl">•</span>
                  <span className="text-gray-700 text-lg">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Outcomes & impact */}
        {project.outcomes && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Outcomes &amp; Impact
            </h2>
            <ul className="space-y-3">
              {project.outcomes.map((outcome, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-primary text-xl">★</span>
                  <span className="text-gray-700 text-lg">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </main>
  );
}
