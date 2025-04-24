import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@heroui/react";
export function Nav() {
  return (    
    <div className="fixed top-0 left-0 w-full z-50 bg-secondary backdrop-blur-sm shadow-md">
        <Navbar position="static">
      <NavbarBrand>        
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#home">
          HOME
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link aria-current="page" href="#skills">
            Skills
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Projects
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Contact Me!</Link>
        </NavbarItem>
        
      </NavbarContent>
    </Navbar>
    </div>
    
  );
}
