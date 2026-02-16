/**
 * ResumeButton.tsx — Styled download link for the resume PDF.
 *
 * Renders as an <a> tag with the `download` attribute so the browser
 * triggers a file download instead of navigating.
 *
 * Variants:
 *   "primary"   — solid blue background.
 *   "secondary" — white background with blue border.
 */

import { HiDownload } from "react-icons/hi";

interface ResumeButtonProps {
  resumePath: string;
  variant?: "primary" | "secondary";
}

export default function ResumeButton({
  resumePath,
  variant = "primary",
}: ResumeButtonProps) {
  const isPrimary = variant === "primary";

  const buttonClasses = isPrimary
    ? "bg-primary text-white hover:bg-primary-dark border-2 border-primary"
    : "bg-white text-primary hover:bg-blue-50 border-2 border-primary";

  return (
    <a
      href={resumePath}
      download
      className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105 ${buttonClasses}`}
    >
      <HiDownload className="w-5 h-5" />
      <span>Download Resume</span>
    </a>
  );
}
