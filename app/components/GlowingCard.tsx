"use client";

import { ReactNode } from "react";
import { useApp } from "@/app/contexts/AppContext";

interface GlowingCardProps {
  children: ReactNode;
  className?: string;
  glowIntensity?: 'low' | 'medium' | 'high';
}

export default function GlowingCard({ 
  children, 
  className = "", 
  glowIntensity = 'medium' 
}: GlowingCardProps) {
  const { colorPalette } = useApp();
  
  const glowStyles = {
    low: `0 0 20px ${colorPalette.colors.primary}20`,
    medium: `0 0 30px ${colorPalette.colors.primary}30, 0 0 60px ${colorPalette.colors.primary}10`,
    high: `0 0 40px ${colorPalette.colors.primary}40, 0 0 80px ${colorPalette.colors.primary}20`
  };

  return (
    <div
      className={`relative group transition-all duration-500 hover:scale-105 ${className}`}
      style={{
        boxShadow: glowStyles[glowIntensity],
      }}
    >
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
           style={{
             background: `linear-gradient(45deg, ${colorPalette.colors.primary}10, ${colorPalette.colors.highlight}10)`,
             filter: 'blur(8px)',
           }}
      />
      <div className="relative z-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50">
        {children}
      </div>
    </div>
  );
}