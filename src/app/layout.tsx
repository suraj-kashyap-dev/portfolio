import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono-stack"
});

export const metadata: Metadata = {
  title: "Suraj Kashyap — Full-Stack Engineer (MERN, Next.js, TypeScript)",
  description:
    "Portfolio of Suraj Kashyap, a Full-Stack Engineer with 4.5+ years building production-grade MERN products with React, Next.js, Node.js, TypeScript, MongoDB, and AI-assisted workflows."
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#07070b"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
