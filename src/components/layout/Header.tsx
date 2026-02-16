/**
 * Header.tsx — Sticky site-wide navigation bar.
 *
 * Renders at the top of every page via the root layout.
 *
 * Features:
 *   - Brand name on the left links back to home.
 *   - Desktop nav links on the right (hidden on mobile).
 *   - Mobile hamburger menu that toggles a dropdown nav.
 *
 * Navigation links point to separate pages (/tech-stack, /projects)
 * rather than anchor links on one long page.
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
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Brand name — links home */}
          <Link
            href="/"
            className="text-xl sm:text-2xl font-bold text-primary hover:opacity-80 transition-opacity"
          >
            Evan Bourgoine
          </Link>

          {/* Desktop navigation — visible at md breakpoint and up */}
          <div className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger button — visible below md breakpoint */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-600 hover:text-primary transition-colors"
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
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={toggleMenu}
                  className="text-gray-600 hover:text-primary transition-colors duration-200 text-lg"
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
