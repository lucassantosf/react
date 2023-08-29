import React, { useState } from 'react';
import { NavbarWrapper, NavItems, NavItem, DropdownContent, DropdownItem } from './styles';
import { useNavigate } from 'react-router-dom';

const Dropdown = () => {
    const navigate = useNavigate()
    const [dropdownOpenCadastro, setDropdownOpenCadastro] = useState(false);
    const [dropdownOpenEstoque, setDropdownOpenEstoque] = useState(false);
    const [dropdownOpenRelatorio, setDropdownOpenRelatorio] = useState(false);

    const toggleDropdownCadastro = () => {
        setDropdownOpenCadastro(!dropdownOpenCadastro);
        setDropdownOpenEstoque(false)
        setDropdownOpenRelatorio(false)
    };

    const toggleDropdownEstoque = () => {
        setDropdownOpenEstoque(!dropdownOpenEstoque);
        setDropdownOpenCadastro(false);
        setDropdownOpenRelatorio(false);
    };

    const toggleDropdownRelatorio = () => {
        setDropdownOpenRelatorio(!dropdownOpenRelatorio);
        setDropdownOpenCadastro(false);
        setDropdownOpenEstoque(false)
    };

    return (
        <NavbarWrapper>
            <NavItems>
                <NavItem onClick={toggleDropdownCadastro}>
                    Cadastro
                    <DropdownContent open={dropdownOpenCadastro}>
                        <DropdownItem onClick={()=>navigate('alunos')}>Alunos</DropdownItem>
                        <DropdownItem onClick={()=>navigate('planos')}>Planos</DropdownItem>
                        <DropdownItem>Produtos</DropdownItem>
                        <DropdownItem>Modalidades</DropdownItem>
                        <DropdownItem>Turmas</DropdownItem>
                        <DropdownItem>Fornecedores</DropdownItem>
                    </DropdownContent>
                </NavItem>
                <NavItem onClick={toggleDropdownEstoque}>
                    Estoque
                    <DropdownContent open={dropdownOpenEstoque}>
                        <DropdownItem>Lançar Compra</DropdownItem>
                        <DropdownItem>Balanço</DropdownItem>
                        <DropdownItem>Cardex</DropdownItem>
                        <DropdownItem>Disponibilidade</DropdownItem>
                    </DropdownContent>
                </NavItem>
                <NavItem onClick={toggleDropdownRelatorio}>
                    Relatórios
                    <DropdownContent open={dropdownOpenRelatorio}>
                        <DropdownItem>Faturamento</DropdownItem>
                        <DropdownItem>Receita</DropdownItem>
                        <DropdownItem>Alunos</DropdownItem>
                        <DropdownItem>Parcelas</DropdownItem>
                    </DropdownContent>
                </NavItem>
            </NavItems>
        </NavbarWrapper>
    );
};

export default Dropdown;