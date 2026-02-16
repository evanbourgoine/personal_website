/**
 * Footer.tsx — Simple site footer with copyright notice.
 *
 * Rendered at the bottom of every page via the root layout.
 */

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 md:py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-400 text-sm md:text-base">
          &copy; {new Date().getFullYear()} Evan Bourgoine. Built with Next.js
          &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
