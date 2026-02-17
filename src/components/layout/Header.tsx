/**
 * Header.tsx — Sticky site-wide navigation bar with dark gradient theme.
 *
 * Matches the hero/CTA dark gradient aesthetic. Uses a frosted glass
 * (backdrop-blur) effect so page content is subtly visible behind it.
 *
 * Features:
 *   - Brand name on the left (gradient text) links back to home.
 *   - Desktop nav links on the right (hidden on mobile).
 *   - Mobile hamburger menu that toggles a dropdown nav.
 */

"use client";

import { useState } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Navigation links — each points to its own page route.
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/tech-stack", label: "Tech Stack" },
    { href: "/projects", label: "Projects" },
  ];

  return (
    <header
      className="sticky top-0 z-50 border-b border-white/10"
      style={{
        background:
          "linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,58,95,0.95))",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Brand name — gradient text, links home */}
          <Link
            href="/"
            className="text-xl sm:text-2xl font-bold gradient-text-hero hover:opacity-80 transition-opacity"
          >
            Evan Bourgoine
          </Link>

          {/* Desktop navigation — visible at md breakpoint and up */}
          <div className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-blue-200/80 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger button — visible below md breakpoint */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-blue-200/80 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile dropdown navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={toggleMenu}
                  className="text-blue-200/80 hover:text-white transition-colors duration-200 text-lg"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
