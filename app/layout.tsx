// app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono, Anton } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { Nav } from "./ui/nav";
import { ThemeProvider } from "@/app/components/theme-provider"
import {Providers} from "./providers";
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
    <html lang="en" suppressHydrationWarning>
      <body
  className={`scroll-smooth ${geistSans.variable} ${geistMono.variable} ${anton.variable} text-black dark:text-white bg-white dark:bg-gray-800 antialiased`}
>
<ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
      <Providers>
        <header className="flex justify-center bg-white dark:bg-gray-800 fixed top-0 left-0 w-full z-50">
          <Nav />
        </header>
          <main>{children}</main>
        </Providers>
      </ThemeProvider>
      </body>
    </html>
  );
}