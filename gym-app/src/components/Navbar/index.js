import { NavbarWrapper, NavBrand, NavItems, NavItem} from "./styles";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <NavBrand>GymApp</NavBrand>
      <NavItems>
        <NavItem>Home</NavItem>
        <NavItem>About</NavItem>
        <NavItem>Contact</NavItem>
      </NavItems>
    </NavbarWrapper>
  );
};

export default Navbar