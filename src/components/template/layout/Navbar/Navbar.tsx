import { Logo } from "@/components/template/ui";
import { NavbarContainer } from "./NavbarContainer";
import { NavLinks } from "./NavLinks";

function Navbar() {
  return (
    <NavbarContainer>
      <Logo />
      <NavLinks />
    </NavbarContainer>
  );
}

export { Navbar };
