import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaArrowRight } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";

interface CurrentProjectProps {
  title: string;
  tagline: string;
  description: string;
  image?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  projectSlug?: string;
  stats?: {
    label: string;
    value: string;
  }[];
}

export default function CurrentProject({
  title,
  tagline,
  description,
  image,
  technologies,
  githubUrl,
  liveUrl,
  projectSlug,
  stats,
}: CurrentProjectProps) {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-light text-primary rounded-full text-sm font-semibold mb-4">
            <span className="animate-pulse-slow">🚀</span>
            <span>Currently Building</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">
            {title}
          </h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{tagline}</p>
        </div>

        {/* Main Content Card */}
        <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-xl overflow-hidden border border-blue-100 animate-scale-in delay-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Image Side */}
            <div className="relative h-64 md:h-80 lg:h-auto bg-gradient-to-br from-primary-light to-blue-100">
              {image ? (
                <Image
                  src={image}
                  alt={`${title} preview`}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center animate-float">
                    <span className="text-8xl mb-4 block">🎯</span>
                    <p className="text-primary font-semibold">
                      Project Preview
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Content Side */}
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {description}
              </p>

              {/* Stats */}
              {stats && stats.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="text-center p-3 bg-white rounded-lg border border-blue-100"
                    >
                      <div className="text-2xl font-bold text-primary">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-600 mb-3">
                  Built with:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white text-primary text-sm font-medium rounded-full border border-blue-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                {projectSlug && (
                  <Link
                    href={`/projects/${projectSlug}`}
                    className="flex items-center gap-2 px-5 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all duration-200 font-medium shadow-md hover:shadow-lg hover:scale-105"
                  >
                    <span>View Details</span>
                    <FaArrowRight className="w-4 h-4" />
                  </Link>
                )}
                {githubUrl && (
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-200 font-medium shadow-md hover:shadow-lg hover:scale-105"
                  >
                    <FaGithub className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                )}
                {liveUrl && (
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-3 bg-white text-primary border-2 border-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-200 font-medium shadow-md hover:shadow-lg hover:scale-105"
                  >
                    <HiExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
