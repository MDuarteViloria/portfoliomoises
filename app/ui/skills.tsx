'use client'
import { FaReact, FaNodeJs, FaQuestion, FaGithub } from "react-icons/fa";
import { DiSqllite } from "react-icons/di";
import { TbSql } from "react-icons/tb";
import { SiTailwindcss, SiJavascript, SiTypescript, SiNextdotjs, SiMongodb } from "react-icons/si";
import { Card, CardBody, CardHeader } from "@heroui/react";
import AnimatedBackground from "@/app/components/AnimatedBackground";
import GlowingCard from "@/app/components/GlowingCard";
import { useApp } from "@/app/contexts/AppContext";

export default function SkillsSection() {
  const { translations, colorPalette } = useApp();

  const skills = [
    { name: "React", icon: <FaReact className="text-sky-400" />, level: "intermediate" },
    { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white"/>, level: "novice"  },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-300" />, level: "intermediate" },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-300" />, level: "advanced"  },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-400" />, level: "intermediate" },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, level: "advanced" },     
    { name: "GitHub", icon: <FaGithub className="text-gray-600 dark:text-gray-300" />, level: "novice" },
    { name: "Sqlite", icon: <DiSqllite className="text-blue-600" />, level: "novice" },
    { name: "SqlServer", icon: <TbSql className="text-yellow-600" />, level: "intermediate" },
    { name: "Coming soon", icon: <FaQuestion className="text-gray-500" />, level: "???" },
  ];

  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'novice':
        return 'text-red-500';
      case 'intermediate':
        return 'text-yellow-500';
      case 'advanced':
        return 'text-green-500';
      case 'expert':
        return 'text-blue-500';
      default:
        return 'text-gray-500';
    }
  };

  const getLevelText = (level: string) => {
    if (level === '???') return level;
    return translations.skills.levels[level.toLowerCase() as keyof typeof translations.skills.levels] || level;
  };

  return (
    <section 
      id="skills" 
      className="relative py-20 px-4 min-h-screen flex flex-col items-center justify-center"
      style={{
        background: `linear-gradient(135deg, 
          transparent 0%, 
          ${colorPalette.colors.accent}10 50%, 
          transparent 100%)`
      }}
    >
      <AnimatedBackground />
      
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <div className="mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(135deg, ${colorPalette.colors.primary}, ${colorPalette.colors.highlight})`
            }}
          >
            {translations.skills.title}
          </h2>
          <div 
            className="w-24 h-1 mx-auto rounded-full"
            style={{ backgroundColor: colorPalette.colors.primary }}
          />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <GlowingCard 
              key={index} 
              className="group"
              glowIntensity="low"
            >
              <Card className="bg-transparent border-none shadow-none h-full">
                <CardBody className="flex flex-col items-center justify-center p-6 h-full">
                  {/* Icon */}
                  <div className="text-4xl md:text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  
                  {/* Skill Name */}
                  <h3 className="text-sm md:text-base font-semibold text-center mb-2 text-gray-800 dark:text-gray-200">
                    {skill.name}
                  </h3>
                  
                  {/* Level */}
                  <span className={`text-xs md:text-sm font-medium ${getLevelColor(skill.level)}`}>
                    {getLevelText(skill.level)}
                  </span>
                  
                  {/* Progress Bar */}
                  {skill.level !== '???' && (
                    <div className="w-full mt-3">
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                        <div 
                          className="h-1.5 rounded-full transition-all duration-1000 ease-out"
                          style={{
                            backgroundColor: colorPalette.colors.primary,
                            width: skill.level === 'novice' ? '25%' : 
                                   skill.level === 'intermediate' ? '60%' : 
                                   skill.level === 'advanced' ? '85%' : '100%'
                          }}
                        />
                      </div>
                    </div>
                  )}
                </CardBody>
              </Card>
            </GlowingCard>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full opacity-20 animate-pulse"
             style={{ backgroundColor: colorPalette.colors.primary }} />
        <div className="absolute bottom-10 right-10 w-16 h-16 rounded-full opacity-20 animate-pulse"
             style={{ backgroundColor: colorPalette.colors.highlight, animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-5 w-12 h-12 rounded-full opacity-20 animate-pulse"
             style={{ backgroundColor: colorPalette.colors.secondary, animationDelay: '2s' }} />
      </div>
    </section>
  );
}