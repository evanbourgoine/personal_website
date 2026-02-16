/**
 * Hero.tsx — The main introduction / "about me" section.
 *
 * Displays:
 *   - Profile image (circular, with a subtle float animation)
 *   - Name, job title, and bio paragraph
 *   - Resume download button
 *   - Social / contact icon row (email, LinkedIn, GitHub)
 *
 * All content is passed in via props so the component stays reusable.
 * This section is the ONLY content shown on the home page (/).
 */

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import Image from "next/image";
import ResumeButton from "@/components/ui/ResumeButton";

interface HeroProps {
  name: string;
  title: string;
  description: string;
  email: string;
  linkedin: string;
  github: string;
  profileImage?: string;
  resumePath?: string;
}

export default function Hero({
  name,
  title,
  description,
  email,
  linkedin,
  github,
  profileImage,
  resumePath,
}: HeroProps) {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-white to-blue-50 py-12 md:py-20 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ---- Profile header: image + name row ---- */}
        <div className="flex flex-col md:flex-row items-center md:items-center gap-6 mb-8">
          {/* Circular profile photo with scale-in + floating animation */}
          <div className="animate-scale-in">
            {profileImage ? (
              <div className="w-32 h-32 md:w-40 md:h-40 relative rounded-full overflow-hidden shadow-lg border-4 border-white flex-shrink-0 animate-float glow-hover">
                <Image
                  src={profileImage}
                  alt={`${name} profile photo`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            ) : (
              /* Fallback: initials in a blue circle */
              <div className="w-32 h-32 md:w-40 md:h-40 bg-primary rounded-full flex items-center justify-center text-white text-4xl md:text-5xl font-bold shadow-lg flex-shrink-0 animate-float glow-hover">
                {name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
            )}
          </div>

          {/* Name and role */}
          <div className="flex-1 text-center md:text-left animate-fade-in-right delay-200">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-2">
              {name}
            </h2>
            <p className="text-xl md:text-2xl text-gray-600">
              Software Engineer
            </p>
          </div>
        </div>

        {/* ---- Title, bio, and resume button ---- */}
        <div className="mb-8 text-center md:text-left animate-fade-in delay-300">
          <p className="text-lg md:text-xl text-gray-600 mb-4">{title}</p>

          <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto md:mx-0 mb-6">
            {description}
          </p>

          {/* Resume download — only shown when a path is provided */}
          {resumePath && (
            <div className="mb-6 flex justify-center md:justify-start animate-fade-in delay-400">
              <ResumeButton resumePath={resumePath} />
            </div>
          )}
        </div>

        {/* ---- Contact / social icons with staggered animations ---- */}
        <div className="flex gap-4 justify-center md:justify-start">
          <a
            href={`mailto:${email}`}
            aria-label="Email"
            className="p-3 bg-white border-2 border-gray-300 rounded-full hover:border-primary hover:text-primary transition-all duration-200 shadow-sm hover:shadow-md hover:scale-110 animate-scale-in delay-500"
          >
            <HiMail className="w-5 h-5 md:w-6 md:h-6" />
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-3 bg-white border-2 border-gray-300 rounded-full hover:border-primary hover:text-primary transition-all duration-200 shadow-sm hover:shadow-md hover:scale-110 animate-scale-in delay-600"
          >
            <FaLinkedin className="w-5 h-5 md:w-6 md:h-6" />
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-3 bg-white border-2 border-gray-300 rounded-full hover:border-primary hover:text-primary transition-all duration-200 shadow-sm hover:shadow-md hover:scale-110 animate-scale-in delay-700"
          >
            <FaGithub className="w-5 h-5 md:w-6 md:h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
