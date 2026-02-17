/**
 * [slug]/page.tsx — Individual project detail page (/projects/:slug).
 *
 * This dynamic route renders a full breakdown of a single project:
 *   - Dark gradient header with title, description, and action buttons
 *   - Image gallery
 *   - Overview (long description)
 *   - Technologies used
 *   - Key features, technical challenges, and outcomes
 *
 * The header uses the site-wide dark gradient theme with decorative orbs
 * for visual consistency with the hero and other page headers.
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
    <main className="min-h-screen bg-gray-50">
      {/* ---- Dark gradient project header ---- */}
      <section
        className="relative overflow-hidden py-12 md:py-16"
        style={{
          background:
            "linear-gradient(135deg, #0f172a 0%, #1e3a5f 25%, #2563eb 60%, #7c3aed 100%)",
        }}
      >
        {/* Decorative floating orbs */}
        <div
          className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, #60a5fa, transparent)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-15 blur-3xl"
          style={{ background: "radial-gradient(circle, #a78bfa, transparent)" }}
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back navigation */}
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-blue-200/70 hover:text-white transition-colors mb-6"
          >
            <FaArrowLeft className="w-4 h-4" />
            <span>Back to Projects</span>
          </Link>

          {/* Project title */}
          <h1 className="text-4xl md:text-5xl font-bold gradient-text-hero mb-4">
            {project.title}
          </h1>

          {/* Short description */}
          <p className="text-blue-200/80 text-lg md:text-xl mb-8 max-w-3xl">
            {project.description}
          </p>

          {/* Action buttons — GitHub and optional live demo */}
          <div className="flex gap-4 flex-wrap">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium
                           text-white transition-all duration-200
                           border border-white/20 hover:bg-white/10"
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
                className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium
                           bg-white text-gray-900 hover:bg-blue-50
                           transition-colors duration-200"
              >
                <HiExternalLink className="w-5 h-5" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </section>

      {/* ---- Main content ---- */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Image gallery — 2-column grid on desktop */}
        {project.images && project.images.length > 0 && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Project Images
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.images.map((image, index) => (
                <div
                  key={index}
                  className="relative h-80 bg-gray-100 rounded-xl overflow-hidden border border-gray-200 shadow-sm"
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
          <div className="prose prose-lg max-w-none text-gray-600 whitespace-pre-line leading-relaxed">
            {project.longDescription}
          </div>
        </div>

        {/* Technologies used */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-white text-blue-700 font-medium rounded-lg
                           border border-blue-200 shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Key features */}
        {project.features && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Key Features
            </h2>
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-green-500 text-xl mt-0.5">✓</span>
                  <span className="text-gray-600 text-lg">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technical challenges */}
        {project.challenges && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Technical Challenges
            </h2>
            <ul className="space-y-3">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-purple-500 text-xl mt-0.5">•</span>
                  <span className="text-gray-600 text-lg">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Outcomes & impact */}
        {project.outcomes && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Outcomes &amp; Impact
            </h2>
            <ul className="space-y-3">
              {project.outcomes.map((outcome, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-amber-500 text-xl mt-0.5">★</span>
                  <span className="text-gray-600 text-lg">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </main>
  );
}
