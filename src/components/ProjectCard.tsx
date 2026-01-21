import { FaGithub } from 'react-icons/fa';
import { HiExternalLink } from 'react-icons/hi';
import Image from 'next/image';
import Link from 'next/link';

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
    <div className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-primary transition-all duration-300 hover:shadow-xl flex flex-col">
      {/* Clickable Image/Preview */}
      <Link href={`/projects/${slug}`}>
        {image ? (
          <div className="relative w-full h-48 bg-gray-100 cursor-pointer overflow-hidden group">
            <Image
              src={image}
              alt={`${title} preview`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
          </div>
        ) : (
          <div className="w-full h-48 bg-gradient-to-br from-primary-light to-blue-100 flex items-center justify-center cursor-pointer group">
            <span className="text-6xl group-hover:scale-110 transition-transform duration-300">💻</span>
          </div>
        )}
      </Link>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <Link href={`/projects/${slug}`} className="group">
          <h4 className="text-2xl font-bold text-primary mb-3 group-hover:text-primary-dark transition-colors">
            {title}
          </h4>
        </Link>
        <p className="text-gray-700 mb-4 flex-grow leading-relaxed">{description}</p>
        
        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-blue-50 text-primary text-xs font-medium rounded-full border border-blue-200"
            >
              {tech}
            </span>
          ))}
          {technologies.length > 4 && (
            <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
              +{technologies.length - 4} more
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex gap-3 mt-auto pt-4 border-t border-gray-100">
          <Link
            href={`/projects/${slug}`}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-200 text-sm font-medium"
          >
            <span>View Details</span>
          </Link>
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
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
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-200 text-sm font-medium"
            >
              <HiExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}