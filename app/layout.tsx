import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Muhammad Safian - MERN Stack Developer |  Frontend Developer | Backend Developer",
  description: "Experienced Frontend & Backend Developer specializing in MERN Stack development. Building modern web applications with MongoDB, Express.js, React, and Node.js.",
  keywords: "Muhammad Safian, Frontend Developer, Frontend Engineer, MERN Stack Developer, MERN Stack Engineer, Full Stack Developer,  Backend Developer, Backend Engineer, Web Developer",
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
