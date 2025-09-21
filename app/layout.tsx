import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Safian Portfolio",
  description: "Personal portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gray-50 text-gray-900">{children}</body>
    </html>
  );
}
