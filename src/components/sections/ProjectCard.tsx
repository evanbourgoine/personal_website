/**
 * ProjectCard.tsx — A card component for displaying a project summary.
 *
 * Shows:
 *   - A clickable image preview (links to the project detail page)
 *   - Title, short description
 *   - Technology tags (first 4, with a "+N more" overflow indicator)
 *   - Action buttons: "View Details", GitHub link, and optional live demo
 *
 * Styled with rounded corners, hover lift, and gradient accents to match
 * the site-wide dark gradient theme.
 *
 * Used on the /projects page to render each project in a grid.
 */

import { FaGithub } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  category?: string;
  slug: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
  image,
  slug,
}: ProjectCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-[1.01] flex flex-col">
      {/* ---- Clickable image / gradient placeholder ---- */}
      <Link href={`/projects/${slug}`}>
        {image ? (
          <div className="relative w-full h-48 bg-gray-100 cursor-pointer overflow-hidden group">
            <Image
              src={image}
              alt={`${title} preview`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {/* Subtle dark overlay on hover */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
          </div>
        ) : (
          /* No image — show a gradient placeholder matching theme */
          <div
            className="w-full h-48 flex items-center justify-center cursor-pointer group"
            style={{
              background:
                "linear-gradient(135deg, #1e3a5f 0%, #2563eb 50%, #7c3aed 100%)",
            }}
          >
            <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
              💻
            </span>
          </div>
        )}
      </Link>

      {/* ---- Card body ---- */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Title links to detail page */}
        <Link href={`/projects/${slug}`} className="group">
          <h4 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
            {title}
          </h4>
        </Link>

        <p className="text-gray-600 mb-4 flex-grow leading-relaxed">
          {description}
        </p>

        {/* Technology tags — show first 4, overflow as "+N more" */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full border border-blue-200"
            >
              {tech}
            </span>
          ))}
          {technologies.length > 4 && (
            <span className="px-3 py-1 bg-purple-50 text-purple-700 text-xs font-medium rounded-full border border-purple-200">
              +{technologies.length - 4} more
            </span>
          )}
        </div>

        {/* ---- Action buttons ---- */}
        <div className="flex gap-3 mt-auto pt-4 border-t border-gray-100">
          <Link
            href={`/projects/${slug}`}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
                       text-white transition-all duration-200"
            style={{
              background: "linear-gradient(135deg, #2563eb, #7c3aed)",
            }}
          >
            <span>View Details</span>
          </Link>
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 text-sm font-medium"
            >
              <FaGithub className="w-4 h-4" />
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
                         text-white transition-all duration-200"
              style={{
                background: "linear-gradient(135deg, #2563eb, #7c3aed)",
              }}
            >
              <HiExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
