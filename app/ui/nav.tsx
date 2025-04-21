

export function Nav() {
   return (
<div>
<nav className="flex justify-center text-sm mt-8  space-x-6 text-[#000000] fixed top-0 left-0 w-full z-50">
        <a href="#home" className="hover:text-highlight">
          HOME
        </a>
        <a href="#skills" className="hover:text-highlight">
          SKILLS
        </a>
        <a href="#projects" className="hover:text-highlight">
          PROYECTOS
        </a>        
        <a href="#contact" className="hover:text-highlight">
          CONTACTO
        </a>       
      </nav>
      <hr className="border-t border-secondary-color w-full max-w-lg mb-4" />
      </div>

   )
}