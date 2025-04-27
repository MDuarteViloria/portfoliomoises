// app/components/SkillsSection.tsx
'use client'
import { FaReact, FaNodeJs, FaQuestion, FaGithub } from "react-icons/fa";
import { DiSqllite } from "react-icons/di";
import { TbSql } from "react-icons/tb";
import { SiTailwindcss, SiJavascript, SiTypescript, SiNextdotjs, SiMongodb } from "react-icons/si";
import { Card, CardBody, CardHeader } from "@heroui/react";
import ParticlesBackground from "@/app/components/ParticlesBackground";
export default function SkillsSection() {
  const skills = [
    { name: "React", icon: <FaReact className="text-sky-400" />, level: "Intermediate" },
    { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white"/>, level: "Novice"  },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-300" />, level: "Intermediate" },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-300" />, level: "Advanced"  },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-400" />, level: "Intermediate" },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, level: "Advanced" },     
    { name: "GitHub", icon: <FaGithub className="text-black-300" />, level: "Novice" },
    { name: "Sqlite", icon: <DiSqllite className="text-black-300" />, level: "Novice" },
    { name: "SqlServer", icon: <TbSql className="text-yellow-300" />, level: "intermediate" },
    { name: "Coming soon", icon: <FaQuestion className="text-black-300" />, level: "???" },
    
  ];

  return (
    <section id="skills" className=" w-full flex flex-col items-center text-center bg-white dark:bg-gray-800 to-secondary">
    <ParticlesBackground />   
       
      <h2 className="text-3xl font-bold mb-8 text-black dark:text-white">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl">
        {skills.map((skill, index) => (
          <Card
            key={index}
            className="flex-col items-start bg-secondary-color rounded-xl shadow-lg p-6 hover:scale-105 transition-transform duration-300"
          >
            <CardHeader className="justify-center mb-4">
            <p className="text-sm font-semibold text-center">{skill.name}</p>
              </CardHeader>
            <CardBody className="flex flex-col items-center justify-center h-full">
            <div className="text-4xl mb-2">{skill.icon}</div>
            <p className="text-sm text-gray-500 dark:text-gray-200">{skill.level}</p>
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  );
}
