import styled from 'styled-components';

export const NavbarWrapper = styled.nav`
  background-color: #333;
  color: #fff;
  padding: 10px;
`;

export const NavItems = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-end;
`;

export const NavItem = styled.li`
  margin-left: 20px;
  position: relative;
  cursor: pointer;
`;

export const DropdownContent = styled.div`
  display: ${props => (props.open ? 'block' : 'none')};
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #333;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  min-width: 150px;
  padding: 10px;
  z-index: 1;
`;

export const DropdownItem = styled.div`
  padding: 5px;
  cursor: pointer;
  color: #fff;

  &:hover {
    background-color: #ddd;
  }
`;