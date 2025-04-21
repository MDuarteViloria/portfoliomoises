// app/components/SkillsSection.tsx
import { FaReact, FaNodeJs, FaQuestion, FaGithub } from "react-icons/fa";
import { DiSqllite } from "react-icons/di";
import { TbSql } from "react-icons/tb";
import { SiTailwindcss, SiJavascript, SiTypescript, SiNextdotjs, SiMongodb } from "react-icons/si";
import { Nav } from "@/app/ui/nav";
import ParticlesBackground from "@/app/components/ParticlesBackground";
export default function SkillsSection() {
  const skills = [
    { name: "React", icon: <FaReact className="text-sky-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-300" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-300" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },     
    { name: "GitHub", icon: <FaGithub className="text-gray-300" /> },
    { name: "Sqlite", icon: <DiSqllite className="text-gray-300" /> },
    { name: "SqlServer", icon: <TbSql className="text-gray-300" /> },
    { name: "Coming soon", icon: <FaQuestion className="text-gray-300" /> },
    
  ];

  return (
    <section id="skills" className=" w-full flex flex-col items-center text-center bg-gradient-to-b from-primary to-secondary">
    <ParticlesBackground />   
       
      <h2 className="text-3xl font-bold mb-8 text-highlight">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-secondary-color rounded-xl shadow-lg p-6 hover:scale-105 transition-transform duration-300"
          >
            <div className="text-4xl mb-2">{skill.icon}</div>
            <span className="text-sm font-semibold text-center">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
