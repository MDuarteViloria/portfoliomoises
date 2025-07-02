import type { Metadata } from "next";
import { Geist, Geist_Mono, Anton, Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "./ui/nav";
import { ThemeProvider } from "@/app/components/theme-provider";
import { Providers } from "./providers";
import { AppProvider } from "./contexts/AppContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const anton = Anton({
  weight: "400",
  variable: "--font-anton",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Moises Duarte - Fullstack Developer",
  description: "Desarrollador fullstack apasionado por crear soluciones elegantes y funcionales.",
  keywords: ["fullstack developer", "react", "nextjs", "typescript", "nodejs"],
  authors: [{ name: "Moises Duarte" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`scroll-smooth ${geistSans.variable} ${geistMono.variable} ${anton.variable} ${inter.variable} text-black dark:text-white bg-white dark:bg-gray-900 antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Providers>
            <AppProvider>
              <header className="flex justify-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-md fixed top-0 left-0 w-full z-50 border-b border-gray-200/50 dark:border-gray-700/50">
                <Nav />
              </header>
              <main className="relative">{children}</main>
            </AppProvider>
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}