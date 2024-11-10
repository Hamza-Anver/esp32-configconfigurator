import {Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/react";

export default function TitleBar() {
  return (
    <Navbar isBordered>
      <NavbarBrand>
        <p className="font-bold text-inherit">ESP 32 Config Page Configurator</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          Stuff will be here
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}