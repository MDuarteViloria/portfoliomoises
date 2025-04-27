// app/page.tsx

import {Nav} from "./ui/nav";
import SkillsSection from "./ui/skills";
import HomeSection from "./ui/home";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@heroui/react";
export default function Home() {
  return (
      <div className="relative bg-white dark:bg-gray-800 min-h-screen">
      {/* Fondo de partículas */}      
      <HomeSection />      
      <SkillsSection  />
      </div>
    
  );
}
