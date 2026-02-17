/**
 * Footer.tsx — Site-wide footer with dark gradient theme.
 *
 * Matches the hero/CTA dark gradient aesthetic for a cohesive look.
 * Features a gradient divider line at the top and frosted glass feel.
 *
 * Rendered at the bottom of every page via the root layout.
 */

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #1a1a4e 100%)",
      }}
    >
      {/* Gradient divider line at the top */}
      <div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(96,165,250,0.5), rgba(167,139,250,0.5), transparent)",
        }}
      />

      {/* Decorative floating orb — subtle background depth */}
      <div
        className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full opacity-10 blur-3xl"
        style={{
          background: "radial-gradient(circle, #7c3aed, transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
        {/* Top row: brand + nav links + social icons */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
          {/* Brand */}
          <Link
            href="/"
            className="text-xl font-bold gradient-text-hero hover:opacity-80 transition-opacity"
          >
            Evan Bourgoine
          </Link>

          {/* Nav links */}
          <nav className="flex gap-6">
            <Link
              href="/"
              className="text-blue-200/70 hover:text-white transition-colors text-sm"
            >
              Home
            </Link>
            <Link
              href="/tech-stack"
              className="text-blue-200/70 hover:text-white transition-colors text-sm"
            >
              Tech Stack
            </Link>
            <Link
              href="/projects"
              className="text-blue-200/70 hover:text-white transition-colors text-sm"
            >
              Projects
            </Link>
          </nav>

          {/* Social icons */}
          <div className="flex gap-3">
            <a
              href="https://github.com/evanbourgoine"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full flex items-center justify-center
                         text-blue-200/70 hover:text-white transition-all duration-200
                         border border-white/10 hover:border-white/30
                         hover:bg-white/5"
              aria-label="GitHub"
            >
              <FaGithub className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/evan-bourgoine"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full flex items-center justify-center
                         text-blue-200/70 hover:text-white transition-all duration-200
                         border border-white/10 hover:border-white/30
                         hover:bg-white/5"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:evan.bourgoine@gmail.com"
              className="w-9 h-9 rounded-full flex items-center justify-center
                         text-blue-200/70 hover:text-white transition-all duration-200
                         border border-white/10 hover:border-white/30
                         hover:bg-white/5"
              aria-label="Email"
            >
              <HiMail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-white/10 mb-6" />

        {/* Copyright */}
        <p className="text-blue-200/50 text-sm text-center">
          &copy; {currentYear} Evan Bourgoine. Built with Next.js &amp;
          Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
