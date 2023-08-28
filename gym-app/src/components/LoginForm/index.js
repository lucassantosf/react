import React from 'react'
import { LoginWrapper, LoginForm as LF, LoginInput, LoginButton } from './styles'
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const navigate = useNavigate()

    return (
        <>
            <LoginWrapper>
                <LF>
                    <h2>Login</h2>
                    <LoginInput type="text" placeholder="Username" />
                    <LoginInput type="password" placeholder="Password" />
                    <LoginButton onClick={() => navigate('/dashboard')} >Login</LoginButton>
                </LF>
            </LoginWrapper>
        </>
    )
}

export default LoginForm