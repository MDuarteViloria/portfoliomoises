import HomeSection from "./ui/home";
import SkillsSection from "./ui/skills";

export default function Home() {
  return (
    <div className="relative bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen">
      <HomeSection />      
      <SkillsSection />
    </div>
  );
}