import styled from 'styled-components';

export const FooterComponent = styled.footer`
    align-items: center;
    background-color: #333;
    bottom: 0;
    display: flex;
    height: 80px;
    justify-content: space-between;
    padding: 0 50px;
    width: 100%;
    div{
        display: flex;
        gap:50px;
    }
    span{
        color: white;
        font-size: 24px;
        text-align: right;
    }
`