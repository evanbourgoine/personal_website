/**
 * Hero.tsx — Full-viewport hero section with dark gradient background.
 *
 * This is the first thing visitors see. It features:
 *   - A bold dark navy-to-blue-to-purple gradient background
 *   - Decorative floating gradient orbs for depth
 *   - Large profile photo with a spinning decorative ring
 *   - Glass badges for location and education
 *   - Gradient-text name, role, and focus subtitle
 *   - "View My Work" and "Download Resume" action buttons
 *   - Social icon row (email, LinkedIn, GitHub)
 *
 * On mobile the layout stacks vertically (photo on top).
 * On desktop it becomes two columns (text left, photo right).
 */

import { FaGithub, FaLinkedin, FaGraduationCap } from "react-icons/fa";
import { HiMail, HiLocationMarker, HiArrowRight, HiDownload } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  name: string;
  role: string;
  focus: string;
  description: string;
  email: string;
  linkedin: string;
  github: string;
  profileImage?: string;
  resumePath?: string;
  location: string;
  education: string;
}

export default function Hero({
  name,
  role,
  focus,
  description,
  email,
  linkedin,
  github,
  profileImage,
  resumePath,
  location,
  education,
}: HeroProps) {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e3a5f 25%, #2563eb 60%, #7c3aed 100%)",
      }}
    >
      {/* ---- Decorative floating orbs (background layer) ---- */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 -left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 -right-20 w-56 h-56 bg-purple-500/20 rounded-full blur-3xl animate-float delay-200" />
        <div className="absolute top-1/2 right-1/4 w-40 h-40 bg-teal-500/10 rounded-full blur-2xl animate-pulse-slow" />
        <div className="absolute bottom-1/3 left-1/3 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl animate-float delay-400" />
      </div>

      {/* ---- Main content ---- */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 lg:gap-16">
          {/* ===== LEFT COLUMN — Text content ===== */}
          <div className="flex-1 text-center md:text-left">
            {/* Glass badges — location & education */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-6 animate-fade-in delay-100">
              <span className="badge-glass inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm text-white/90">
                <HiLocationMarker className="w-4 h-4 text-blue-300" />
                {location}
              </span>
              <span className="badge-glass inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm text-white/90">
                <FaGraduationCap className="w-4 h-4 text-purple-300" />
                {education}
              </span>
            </div>

            {/* Name — large gradient text */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold gradient-text-hero mb-4 animate-fade-in-left delay-200">
              {name}
            </h1>

            {/* Role */}
            <p className="text-2xl md:text-3xl font-semibold text-blue-200 mb-2 animate-fade-in-left delay-300">
              {role}
            </p>

            {/* Focus subtitle */}
            <p className="text-lg text-blue-300/80 mb-6 animate-fade-in delay-400">
              {focus}
            </p>

            {/* Short bio */}
            <p className="text-base md:text-lg text-blue-100/70 max-w-xl mx-auto md:mx-0 mb-8 animate-fade-in delay-400">
              {description}
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-xl
                           font-semibold shadow-lg hover:shadow-xl hover:bg-blue-50
                           transition-all duration-200 animate-fade-in delay-500"
              >
                View My Work
                <HiArrowRight className="w-5 h-5" />
              </Link>
              {resumePath && (
                <a
                  href={resumePath}
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white/30
                             text-white rounded-xl font-semibold backdrop-blur-sm
                             hover:bg-white/10 transition-all duration-200 animate-fade-in delay-600"
                >
                  <HiDownload className="w-5 h-5" />
                  Download Resume
                </a>
              )}
            </div>

            {/* Social icons */}
            <div className="flex gap-3 justify-center md:justify-start">
              <a
                href={`mailto:${email}`}
                aria-label="Email"
                className="p-3 badge-glass rounded-full text-white hover:bg-white/20
                           hover:scale-110 transition-all duration-200 animate-scale-in delay-600"
              >
                <HiMail className="w-5 h-5" />
              </a>
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-3 badge-glass rounded-full text-white hover:bg-white/20
                           hover:scale-110 transition-all duration-200 animate-scale-in delay-700"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-3 badge-glass rounded-full text-white hover:bg-white/20
                           hover:scale-110 transition-all duration-200 animate-scale-in delay-700"
              >
                <FaGithub className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* ===== RIGHT COLUMN — Profile photo ===== */}
          <div className="flex-shrink-0 relative animate-scale-in">
            {/* Decorative spinning ring behind the photo */}
            <div
              className="absolute -inset-4 rounded-full animate-spin-slow"
              style={{
                background:
                  "conic-gradient(from 0deg, #2563eb, #7c3aed, #14b8a6, #2563eb)",
                opacity: 0.3,
              }}
              aria-hidden="true"
            />

            {/* Profile photo */}
            {profileImage ? (
              <div className="relative w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden shadow-2xl ring-4 ring-white/20 animate-float">
                <Image
                  src={profileImage}
                  alt={`${name} profile photo`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            ) : (
              /* Fallback: initials in a gradient circle */
              <div
                className="relative w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full flex items-center justify-center text-white text-5xl md:text-6xl font-bold shadow-2xl ring-4 ring-white/20 animate-float"
                style={{
                  background: "linear-gradient(135deg, #2563eb, #7c3aed)",
                }}
              >
                {name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
