// app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono, Anton } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import {Nav} from "@/app/ui/nav";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const anton = Anton({
  weight: "400", // or some other valid weight value
  variable: "--font-anton",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Moises Duarte",
  description: "Desarrollador fullstack.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${anton.variable} text-white bg-primary antialiased`}
      >       
          
          <main className="">{children}</main>
        
      </body>
    </html>
  );
}
