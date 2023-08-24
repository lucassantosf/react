import { NavbarWrapper, NavBrand, NavItems, NavItem} from "./styles";
import { useHistory } from 'react-router-dom';

const Navbar = () => {
  const history = useHistory();
  return (
    <NavbarWrapper>
      <NavBrand>GymApp</NavBrand>
      <NavItems>
        <NavItem>Home</NavItem>
        <NavItem onClick={()=>history.push('/about')}>About</NavItem>
        <NavItem>Contact</NavItem>
      </NavItems>
    </NavbarWrapper>
  );
};

export default Navbar