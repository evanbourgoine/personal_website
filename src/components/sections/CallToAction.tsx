/**
 * CallToAction.tsx — Closing CTA section before the footer.
 *
 * Uses the same dark gradient as the hero to create visual bookends.
 * Provides clear navigation to the Projects page, Tech Stack page,
 * and resume download, plus a contact email and social links.
 */

import Link from "next/link";
import { FaGithub, FaLinkedin, FaRocket } from "react-icons/fa";
import { HiCode, HiDownload, HiMail } from "react-icons/hi";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface CallToActionProps {
  resumePath: string;
  email?: string;
  linkedin?: string;
  github?: string;
}

export default function CallToAction({
  resumePath,
  email = "evan.bourgoine@gmail.com",
  linkedin = "https://linkedin.com/in/evan-bourgoine",
  github = "https://github.com/evanbourgoine",
}: CallToActionProps) {
  return (
    <section
      className="relative py-20 md:py-28 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e3a5f 30%, #2563eb 70%, #7c3aed 100%)",
      }}
    >
      {/* Decorative orbs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-10 -right-16 w-56 h-56 bg-blue-500/15 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 -left-16 w-48 h-48 bg-purple-500/15 rounded-full blur-3xl animate-float delay-300" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <AnimatedSection animation="fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Let&apos;s Build Something Great
          </h2>
        </AnimatedSection>

        <AnimatedSection animation="fade-in" delay={100}>
          <p className="text-lg text-blue-200/80 max-w-2xl mx-auto mb-10">
            Interested in working together? Check out my work or get in touch.
          </p>
        </AnimatedSection>

        {/* Navigation / action buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <AnimatedSection animation="scale-in" delay={200}>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900
                         rounded-xl font-semibold shadow-lg hover:shadow-xl hover:bg-blue-50
                         transition-all duration-200"
            >
              <FaRocket className="w-4 h-4" />
              View Projects
            </Link>
          </AnimatedSection>

          <AnimatedSection animation="scale-in" delay={300}>
            <Link
              href="/tech-stack"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30
                         text-white rounded-xl font-semibold hover:bg-white/10
                         transition-all duration-200"
            >
              <HiCode className="w-5 h-5" />
              Tech Stack
            </Link>
          </AnimatedSection>

          <AnimatedSection animation="scale-in" delay={400}>
            <a
              href={resumePath}
              download
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30
                         text-white rounded-xl font-semibold hover:bg-white/10
                         transition-all duration-200"
            >
              <HiDownload className="w-5 h-5" />
              Download Resume
            </a>
          </AnimatedSection>
        </div>

        {/* Contact row */}
        <AnimatedSection animation="fade-in" delay={500}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {/* Email link */}
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition-colors"
            >
              <HiMail className="w-5 h-5" />
              {email}
            </a>

            {/* Social icons */}
            <div className="flex gap-3">
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-3 badge-glass rounded-full text-white hover:bg-white/20
                           hover:scale-110 transition-all duration-200"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-3 badge-glass rounded-full text-white hover:bg-white/20
                           hover:scale-110 transition-all duration-200"
              >
                <FaGithub className="w-5 h-5" />
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
