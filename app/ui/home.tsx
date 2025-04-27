"use client";
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiTypescript, SiNextdotjs, SiMongodb } from "react-icons/si";
import ParticlesBackground from "@/app/components/ParticlesBackground";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { Anton } from "next/font/google";
import { Link } from "@heroui/react";
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
      className="mt-16 relative flex flex-col items-center justify-center min-h-screen text-black dark:text-white bg-white dark:bg-gray-800 px-4 overflow-hidden"
    >
      {/* Fondo de partículas */}
      

      {/* Título con la fuente Anton heredada */}
      <h1 className= {`${anton.variable} text-5xl md:text-6xl font-bold tracking-wide mb-6 text-black dark:text-white`}>
        <TypeAnimation
          sequence={[
            "Moises Duarte",
            1500, // Espera 2 segundos
            "Fullstack Developer",
          1500, // Espera 2 segundos
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </h1>
      <div className="flex flex-col items-center mb-6">
      <p className="max-w-xl text-base md:text-lg mb-4">
        ¡Hola! Soy Moises, un desarrollador fullstack apasionado por crear
        soluciones elegantes y funcionales. Me encanta aprender y
        experimentar con nuevas tecnologías. Actualmente estoy buscando
        oportunidades para crecer y contribuir en proyectos emocionantes.
      </p>      

      <div className="w-32 h-32 mb-6">
        <Image
          src={image}
          alt="Foto de perfil"
          width={128}
          height={128}
          className="rounded-full border-4  border-black dark:border-white shadow-lg"
        />
      </div>

      <div className="flex gap-4 text-md text-secondary mb-10">
        <Link href="https://github.com/mduarteviloria" className="flex rounded-xl border-1 p-1 border-secondary flex-row gap-2 hover:transform hover:scale-105 transition-transform duration-300 hover:bg-gray-300 dark:hover:bg-gray-700 " target="_blank">
          Github
          <FaGithub className="text-indigo-800 dark:text-indigo-400 mb-1" />
        </Link>
        <a href="https://linkedin.com/in/mduartedev" className="flex rounded-xl border-1 p-1 border-secondary flex-row gap-2 hover:transform hover:scale-105 transition-transform duration-300 hover:bg-gray-300 dark:hover:bg-gray-700 " target="_blank">
          Linkedin
          <FaLinkedin className="text-blue-500 mt-1 " />
        </a>
        <a href="mailto:moisesduarte28072000@gmail.com" className="flex rounded-xl border-1 p-1 border-secondary flex-row gap-2 hover:transform hover:scale-105 transition-transform duration-300 hover:bg-gray-300 dark:hover:bg-gray-700 " target="_blank">
          Email
          <FaEnvelope className=" mt-1 text-black dark:text-white" />
        </a>
      </div>
      </div>
    </section>
  );
}