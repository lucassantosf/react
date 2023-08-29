import React from "react";
import { Container , Title } from './styles'

const Dashboard = ()=>{
    return (
        <>
            <Container>
                <Title>
                    Olá {`user.name`}, seja bem vindo ao GymApp !
                </Title>
            </Container>
        </>
    )
}

export default Dashboard