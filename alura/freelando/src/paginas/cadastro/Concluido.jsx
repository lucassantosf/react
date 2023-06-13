import { Link } from "react-router-dom"
import { Tipografia } from "../../componentes/Tipografia/Tipografia"
import clienteConcluido from './assets/cliente-concluido.png'
import { Botao } from "../../componentes/Botao/Botao"
import styled from "@emotion/styled"
import { Col, Row } from "react-grid-system"

const ImagemEstilizada = styled.img`
    max-width: 100%;
    border-radius: 16px;
`

const Concluido = () => {
    return (
        <>
            <Tipografia variante="h1" componente="h1">
                Seu perfil esta completo!
            </Tipografia>
            <Tipografia variante="body" componente="body">
                Agora é só começar a se conectar com os melhores freelancers do mercado!
            </Tipografia>
            <div>
                <ImagemEstilizada src={clienteConcluido} alt="Foto da etapa concluido do cadastro" />
            </div>
            <Row justify="center">
                <Col lg={6} md={6} sm={6} style={{ textAlign: 'center' }}>
                    <Link to="/cadastro">
                        <Botao variante="secundaria">
                            Voltar para home
                        </Botao>
                    </Link>
                </Col>
            </Row>
        </>
    )
}

export default Concluido