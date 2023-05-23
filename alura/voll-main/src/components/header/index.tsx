import styled from 'styled-components';
import logo from './assets/logo.png'
import perfil from './assets/perfil.png'

const HeaderStyled = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2em 4em;
`;

const ContainerStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-grow: .1;
`;

const AStyled = styled.a`
    color: var(--azul-escuro);
    font-weight: 700;
`;

function Header(){
    return (
        <HeaderStyled>
            <img src={logo} alt="logo da empresa Voll"/>
            <ContainerStyled>
                <img src={perfil} alt="perfil do usuario"/>
                <AStyled href='#'>Sair</AStyled>
            </ContainerStyled>
        </HeaderStyled>
    )
}

export default Header
