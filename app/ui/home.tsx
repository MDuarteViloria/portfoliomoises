
import { FaReact, FaNodeJs, FaQuestion, FaGithub } from "react-icons/fa";
import { DiSqllite } from "react-icons/di";
import { TbSql } from "react-icons/tb";
import { SiTailwindcss, SiJavascript, SiTypescript, SiNextdotjs, SiMongodb } from "react-icons/si";
import { Nav } from "@/app/ui/nav";
import ParticlesBackground from "@/app/components/ParticlesBackground";
import Image from "next/image";
import {
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";
import image from "@/public/vercel.svg"
export default function HomeSection() {
return (
<section id="home" className="relative flex flex-col items-center justify-center min-h-screen text-center  bg-gradient-to-b from-secondary to-primary text-tertiary px-4 overflow-hidden">
{/* Fondo de partículas */}  


<ParticlesBackground />    
<h1 className="text-5xl text-highlight md:text-6xl font-bold tracking-wide mb-6">
  Moises Duarte
</h1>

<p className="max-w-xl text-base md:text-lg  mb-4">
  ¡Hola! Soy Moises, un desarrollador fullstack apasionado por crear
  soluciones elegantes y funcionales. Me encanta aprender y
  experimentar con nuevas tecnologías. Actualmente estoy buscando
  oportunidades para crecer y contribuir en proyectos emocionantes.
</p>

<p className="  max-w-xl text-base md:text-lg  mb-8">
  Tengo experiencia con React, Next.js, Tailwind CSS, Node.js y más.
  También me encanta diseñar interfaces limpias y resolver problemas con
  código.
</p>

<div className="w-32 h-32 mb-6">
  <Image
    src={image}
    alt="Foto de perfil"
    width={128}
    height={128}
    className="rounded-full border-4 border-primary"
  />
</div>

<div className="flex gap-4 text-xl text-secondary mb-10">
  <a href="https://github.com/mduarteviloria" target="_blank">
    <FaGithub />
  </a>
  <a href="https://linkedin.com/in/mduartedev" target="_blank">
    <FaLinkedin />
  </a>
  
  <a href="mailto:tuemail@ejemplo.com" target="_blank">
    <FaEnvelope />
  </a>
</div>  



</section>   
)
}
