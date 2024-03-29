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
                        <DropdownItem onClick={()=>navigate('produtos')}>Produtos</DropdownItem>
                        <DropdownItem onClick={()=>navigate('modalidades')}>Modalidades</DropdownItem>
                        <DropdownItem onClick={()=>navigate('turmas')}>Turmas</DropdownItem>
                        <DropdownItem onClick={()=>navigate('fornecedores')}>Fornecedores</DropdownItem>
                    </DropdownContent>
                </NavItem>
                <NavItem onClick={toggleDropdownEstoque}>
                    Estoque
                    <DropdownContent open={dropdownOpenEstoque}>
                        <DropdownItem onClick={()=>navigate('compras')}>Lançar Compra</DropdownItem>
                        <DropdownItem onClick={()=>navigate('balanco')}>Balanço</DropdownItem>
                        <DropdownItem onClick={()=>navigate('cardex')}>Cardex</DropdownItem>
                        <DropdownItem onClick={()=>navigate('disponibilidade')}>Disponibilidade</DropdownItem>
                    </DropdownContent>
                </NavItem>
                <NavItem onClick={toggleDropdownRelatorio}>
                    Relatórios
                    <DropdownContent open={dropdownOpenRelatorio}>
                        <DropdownItem onClick={()=>navigate('relatorios/faturamento')}>Faturamento</DropdownItem>
                        <DropdownItem onClick={()=>navigate('relatorios/receita')}>Receita</DropdownItem>
                        <DropdownItem onClick={()=>navigate('relatorios/alunos')}>Alunos</DropdownItem>
                        <DropdownItem onClick={()=>navigate('relatorios/parcelas')}>Parcelas</DropdownItem>
                    </DropdownContent>
                </NavItem>
            </NavItems>
        </NavbarWrapper>
    );
};

export default Dropdown;