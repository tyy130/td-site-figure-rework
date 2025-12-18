import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TacticDev - Scalable Systems at the Intersection of AI, Automation, and Web Development",
  description: "Building scalable systems that turn complex technology into usable, elegant systems that scale. Explore our AI tools, design systems, and automation frameworks.",
  keywords: "TacticDev, AI, automation, web development, design systems, Next.js, Tux, Linux AI",
  authors: [{ name: "Tyler Hill" }],
  openGraph: {
    title: "TacticDev - AI, Automation, Web Development",
    description: "Building scalable systems that turn complex technology into usable, elegant systems that scale.",
    type: "website",
    url: "https://tacticdev.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "TacticDev - AI, Automation, Web Development",
    description: "Building scalable systems that turn complex technology into usable, elegant systems that scale.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
