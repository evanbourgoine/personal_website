/**
 * layout.tsx — Root layout applied to every page.
 *
 * This is the outermost wrapper. It sets:
 *   - HTML metadata (title, description)
 *   - Global CSS import
 *   - The shared Header and Footer that appear on all pages
 *
 * Every page's content is injected as {children} between the Header
 * and Footer, so individual pages only need to define their own content.
 */

import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Evan Bourgoine | Software Engineer",
  description:
    "Portfolio website of Evan Bourgoine — Computer Science Graduate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {/* Shared header — sticky nav on every page */}
        <Header />

        {/* Page-specific content is rendered here */}
        {children}

        {/* Shared footer on every page */}
        <Footer />
      </body>
    </html>
  );
}
