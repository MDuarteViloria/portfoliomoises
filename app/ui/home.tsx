"use client";
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiTypescript, SiNextdotjs, SiMongodb } from "react-icons/si";
import ParticlesBackground from "@/app/components/ParticlesBackground";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { Anton } from "next/font/google";
import {
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import image from "@/public/vercel.svg";
//import {anton} from "@/app/layout"; // Importa la fuente Anton
const anton = Anton({
  weight: "400", // or some other valid weight value
  variable: "--font-anton",
  subsets: ["latin"],
});

export default function HomeSection() {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-screen text-center bg-gradient-to-b from-secondary to-primary text-tertiary px-4 overflow-hidden"
    >
      {/* Fondo de partículas */}
      <ParticlesBackground />

      {/* Título con la fuente Anton heredada */}
      <h1 className= {`${anton.variable} text-5xl md:text-6xl font-bold tracking-wide mb-6 text-highlight`}>
        <TypeAnimation
          sequence={[
            "Soy Moises Duarte",
            1500, // Espera 2 segundos
            "Soy Fullstack Developer",
          1500, // Espera 2 segundos
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </h1>

      <p className="max-w-xl text-base md:text-lg mb-4">
        ¡Hola! Soy Moises, un desarrollador fullstack apasionado por crear
        soluciones elegantes y funcionales. Me encanta aprender y
        experimentar con nuevas tecnologías. Actualmente estoy buscando
        oportunidades para crecer y contribuir en proyectos emocionantes.
      </p>

      <p className="max-w-xl text-base md:text-lg mb-8">
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
        <a href="mailto:moisesduarte28072000@gmail.com" target="_blank">
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
}