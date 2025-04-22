export function Nav() {
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-b from-primary to-secondary text-tertiary px-4 py-4">
      <nav className="flex justify-center font-bold text-white mt-8  space-x-6 fixed top-0 left-0 w-full z-50">
       
        <a href="#home" className=" hover:glitch">
          HOME
        </a>
        <a href="#skills" className=" hover:text-highlight">
          SKILLS
        </a>
        <a href="#projects" className=" hover:text-highlight">
          PROYECTOS
        </a>
        <a href="#contact" className=" hover:text-highlight">
          CONTACTO
        </a>       
      </nav>
        <hr className="flex justify-center mt-8 text-white space-x-6 fixed top-6 left-auto w-lg z-50" />
      
    </div>
  );
}
