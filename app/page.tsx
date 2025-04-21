// app/page.tsx

import { Nav } from "./ui/nav";
import SkillsSection from "./ui/skills";
import HomeSection from "./ui/home";

export default function Home() {
  return (
      <div className="relative bg-secondary">
      {/* Fondo de partículas */}
      <Nav />
      <HomeSection />      
      <SkillsSection  />
      </div>
    
  );
}
