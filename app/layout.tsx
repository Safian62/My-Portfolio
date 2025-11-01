import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Muhammad Safian - MERN Stack Developer | Frontend Engineer | Full Stack Developer",
  description: "Experienced Full Stack (MERN) Developer building modern web applications with React, Next.js, Node.js, Express, and MongoDB. Frontend & backend engineering with a focus on performance and UX.",
  keywords: "Muhammad Safian, Frontend Developer, Frontend Engineer, MERN Stack Developer, MERN Stack Engineer, Full Stack Developer, Backend Developer, Backend Engineer, Web Developer, React, Next.js, Node.js, MongoDB",
  authors: [{ name: "Muhammad Safian" }],
  creator: "Muhammad Safian",
  publisher: "Muhammad Safian",
  robots: "index, follow",
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg'
  },
  openGraph: {
    title: "Muhammad Safian - Full Stack & MERN Stack Developer",
    description: "Professional Full Stack Developer specializing in MERN stack development. Creating modern, scalable web applications with React, Node.js, and more.",
    type: 'website',
    // no domain configured — these are relative paths; update when you add a domain
    images: ['/favicon.svg'],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body >
          {children}
      </body>
    </html>
  );
}
