"use client";
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiTypescript, SiNextdotjs, SiMongodb } from "react-icons/si";
import AnimatedBackground from "@/app/components/AnimatedBackground";
import GlowingCard from "@/app/components/GlowingCard";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { Anton } from "next/font/google";
import { Link } from "@heroui/react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useApp } from "@/app/contexts/AppContext";
import image from "@/public/vercel.svg";

const anton = Anton({
  weight: "400",
  variable: "--font-anton",
  subsets: ["latin"],
});

export default function HomeSection() {
  const { translations, language, colorPalette } = useApp();

  const typeSequence = [
    translations.home.title,
    2000,
    translations.home.subtitle,
    2000,
  ];

  return (
    <section
      id="home"
      className="mt-20 relative flex flex-col items-center justify-center min-h-screen text-black dark:text-white px-4 overflow-hidden"
      style={{
        background: `linear-gradient(135deg, 
          ${colorPalette.colors.accent}20 0%, 
          transparent 50%, 
          ${colorPalette.colors.primary}10 100%)`
      }}
    >
      <AnimatedBackground />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Animated Title */}
        <div className="mb-8">
          <h1 className={`${anton.variable} text-4xl md:text-6xl lg:text-7xl font-bold tracking-wide mb-4 bg-gradient-to-r from-primary via-highlight to-secondary bg-clip-text text-transparent`}
              style={{
                backgroundImage: `linear-gradient(135deg, ${colorPalette.colors.primary}, ${colorPalette.colors.highlight}, ${colorPalette.colors.secondary})`
              }}>
            <TypeAnimation
              sequence={typeSequence}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              cursor={true}
            />
          </h1>
        </div>

        {/* Profile Section */}
        <GlowingCard className="mb-8" glowIntensity="medium">
          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Profile Image */}
              <div className="relative">
                <div className="w-32 h-32 md:w-40 md:h-40 relative">
                  <div 
                    className="absolute inset-0 rounded-full animate-pulse"
                    style={{
                      background: `linear-gradient(45deg, ${colorPalette.colors.primary}40, ${colorPalette.colors.highlight}40)`,
                      filter: 'blur(8px)',
                    }}
                  />
                  <Image
                    src={image}
                    alt="Foto de perfil"
                    width={160}
                    height={160}
                    className="relative z-10 rounded-full border-4 border-white dark:border-gray-800 shadow-2xl"
                  />
                </div>
              </div>

              {/* Description */}
              <div className="flex-1 text-left">
                <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                  {translations.home.description}
                </p>

                {/* Social Links */}
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <Link 
                    href="https://github.com/mduarteviloria" 
                    className="group flex items-center gap-2 px-4 py-2 rounded-xl border-2 transition-all duration-300 hover:scale-105"
                    style={{
                      borderColor: colorPalette.colors.primary,
                      color: colorPalette.colors.primary,
                    }}
                    target="_blank"
                  >
                    <span className="font-medium">{translations.home.github}</span>
                    <FaGithub className="text-xl group-hover:rotate-12 transition-transform duration-300" />
                  </Link>
                  
                  <a 
                    href="https://linkedin.com/in/mduartedev" 
                    className="group flex items-center gap-2 px-4 py-2 rounded-xl border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-105" 
                    target="_blank"
                  >
                    <span className="font-medium">{translations.home.linkedin}</span>
                    <FaLinkedin className="text-xl group-hover:rotate-12 transition-transform duration-300" />
                  </a>
                  
                  <a 
                    href="mailto:moisesduarte28072000@gmail.com" 
                    className="group flex items-center gap-2 px-4 py-2 rounded-xl border-2 border-gray-600 text-gray-600 dark:border-gray-400 dark:text-gray-400 hover:bg-gray-600 hover:text-white dark:hover:bg-gray-400 dark:hover:text-gray-900 transition-all duration-300 hover:scale-105" 
                    target="_blank"
                  >
                    <span className="font-medium">{translations.home.email}</span>
                    <FaEnvelope className="text-xl group-hover:rotate-12 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </GlowingCard>

        {/* Floating Tech Icons */}
        <div className="hidden lg:block">
          <div className="absolute top-20 left-10 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}>
            <FaReact className="text-4xl text-cyan-400 opacity-60" />
          </div>
          <div className="absolute top-40 right-20 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}>
            <SiNextdotjs className="text-4xl text-black dark:text-white opacity-60" />
          </div>
          <div className="absolute bottom-40 left-20 animate-bounce" style={{ animationDelay: '2s', animationDuration: '3.5s' }}>
            <FaNodeJs className="text-4xl text-green-500 opacity-60" />
          </div>
          <div className="absolute bottom-20 right-10 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '4.5s' }}>
            <SiTailwindcss className="text-4xl text-cyan-300 opacity-60" />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
            <div 
              className="w-1 h-3 rounded-full mt-2 animate-pulse"
              style={{ backgroundColor: colorPalette.colors.primary }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}