import { Col, Row } from "react-grid-system"
import { Tipografia } from "../../componentes/Tipografia/Tipografia"
import { Link } from "../../componentes/Link/Link"

import { Link as RouterLink } from 'react-router-dom'

import cliente from "./assets/cliente.png"
import freela from "./assets/freela.png"

const SelecaoCliente  = ()=>{
    return (
        <div style={{textAlign: 'center'}}>
            <Tipografia variante="h1" componente="h1">
                Crie seu cadastro
            </Tipografia>
            <Tipografia variante="h3" componente="h2">
                Como podemos te ajudar?
            </Tipografia>
            <Row>
                <Col md={6} sm={12}>
                    <RouterLink to="interesses">
                        <img src={cliente} alt="" />
                        <Tipografia variante="body" componente="body">
                            Sou cliente preciso de um freela
                        </Tipografia>
                    </RouterLink>
                </Col>
                <Col md={6} sm={12}>
                    <img src={freela} alt="" />
                    <Tipografia variante="body" componente="body">
                        Sou um freela e preciso de um cliente
                    </Tipografia>
                </Col>
            </Row>
            <div>
                <Tipografia variante="body2" componente="body2">Ja tem conta?</Tipografia>
                <p>
                    <Link variante="secundaria">Faça Login</Link>
                </p>
            </div>
        </div>
    )

}

export default SelecaoCliente