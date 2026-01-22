import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Evan Bourgoine | Software Engineer",
  description: "Portfolio website of Evan Bourgoine - Computer Science Graduate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}