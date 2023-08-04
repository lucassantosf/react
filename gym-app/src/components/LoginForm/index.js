import React from 'react'
import { LoginWrapper, LoginForm as LF, LoginInput, LoginButton } from './styles'

const LoginForm = () => {
    return (
        <>
            <LoginWrapper>
                <LF>
                    <h2>Login</h2>
                    <LoginInput type="text" placeholder="Username" />
                    <LoginInput type="password" placeholder="Password" />
                    <LoginButton>Login</LoginButton>
                </LF>
            </LoginWrapper>
        </>
    )
}

export default LoginForm