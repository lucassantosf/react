import { NavbarWrapper, NavBrand, NavItems, NavItem } from "./styles";
import { useNavigate } from 'react-router-dom';
import Dropdown from "../../components/DropDown";

const Navbar = () => {
  const navigate = useNavigate()
  const login = true
  
  return (
    <NavbarWrapper>
      <NavBrand onClick={()=> login ? navigate('/dashboard') : navigate('/')}>GymApp</NavBrand>
      <NavItems>
        {login ?
            <><Dropdown /></>
            :
            <>
              <NavItem onClick={() => navigate('/')}>Home</NavItem>
              <NavItem onClick={() => navigate('/about')}>About</NavItem>
              <NavItem onClick={() => navigate('/contact')}>Contact</NavItem>
            </>
        }
      </NavItems>
    </NavbarWrapper>
  );
};

export default Navbar