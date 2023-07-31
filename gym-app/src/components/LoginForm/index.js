import React from 'react'
import { Container, LoginFormA, Title, Input, SubmitButton } from './styles'

const LoginForm = () => {
    return (
        <Container>
            <LoginFormA>
                <Title>Login</Title>
                <Input type="email" placeholder="E-mail" />
                <Input type="password" placeholder="Senha" />
                <SubmitButton>Entrar</SubmitButton>
            </LoginFormA>
        </Container>
    )
}

export default LoginForm