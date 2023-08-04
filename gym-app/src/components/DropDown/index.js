import React, { useState } from 'react';
import { NavbarWrapper, NavBrand, NavItems, NavItem, DropdownContent, DropdownItem } from './styles';
import brand from '../../assets/brand.jpg'

const Dropdown = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <NavbarWrapper>
            <img src={brand} />
            <NavBrand>MyApp</NavBrand>
            <NavItems>
                <NavItem onClick={toggleDropdown}>
                    Cadastro
                    <DropdownContent open={dropdownOpen}>
                        <DropdownItem>Option 1</DropdownItem>
                        <DropdownItem>Option 2</DropdownItem>
                        <DropdownItem>Option 3</DropdownItem>
                    </DropdownContent>
                </NavItem>
                <NavItem>Home</NavItem>
                <NavItem>About</NavItem>
                <NavItem>Contact</NavItem>
            </NavItems>
        </NavbarWrapper>
    );
};

export default Dropdown;