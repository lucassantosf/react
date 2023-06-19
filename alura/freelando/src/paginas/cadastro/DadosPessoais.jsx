import { Tipografia } from "../../componentes/Tipografia/Tipografia"
import { Col, Row } from "react-grid-system"
import { Botao } from "../../componentes/Botao/Botao"
import { Link } from "react-router-dom"
import { CampoTexto } from "../../componentes/CampoTexto/CampoTexto"
import { ListaSupensa } from "../../componentes/ListaSuspensa/ListaSuspensa"
import estadosBrasileiros from "./estadosBrasileiros"
import { useCadastroUsuarioContext } from "../../contexto/CadastroUsuario"

const DadosPessoais = () => {

    const { 
        usuario, 
        setNomeCompleto, 
        setCidade, 
        setUf, 
        setEmail, 
        setSenha, 
        setSenhaConfirmada,
        submeterUsuario,
    } = useCadastroUsuarioContext()

    const finalizarCadastro = (event)=>{
        event.preventDefault();
        submeterUsuario()
    }

    return (
        <form onSubmit={finalizarCadastro}>
            <div style={{ textAlign: 'center' }}>
                <Tipografia variante="h1" componente="h1">
                    Crie seu cadastro
                </Tipografia>
                <Tipografia variante="body" componente="body">
                    Crie seu perfil gratuitamente para começar a trabalhar com os melhores freelancers. Em seguida, você poderá dar mais detalhes sobre suas demandas e sobre sua forma de trabalho.
                </Tipografia>
            </div>
            <Row>
                <Col>
                    <CampoTexto 
                        titulo="Nome Completo" 
                        valor={usuario.nomeCompleto} 
                        onChange={setNomeCompleto}
                    />
                </Col>
            </Row>
            <Row>
                <Col lg={4} md={4} sm={4}>
                    <ListaSupensa 
                        titulo="Estado" 
                        opcoes={estadosBrasileiros} 
                        valor={usuario.Uf}
                        onChange={setUf}
                    />
                </Col>
                <Col lg={8} md={8} sm={8}>
                    <CampoTexto 
                        titulo="Cidade" 
                        valor={usuario.cidade}
                        onChange={setCidade}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <CampoTexto     
                        titulo="E-mail" 
                        valor={usuario.email}
                        onChange={setEmail}
                        tipo="email"
                    />
                </Col>
            </Row>
            <Row>
                <Col lg={6} md={6} sm={6}>
                    <CampoTexto 
                        titulo="Senha" 
                        valor={usuario.senha}
                        onChange={setSenha}
                        tipo="password"
                    />
                </Col>
                <Col lg={6} md={6} sm={6}>
                    <CampoTexto 
                        titulo="Repita a Senha" 
                        valor={usuario.senhaConfirmada}
                        onChange={setSenhaConfirmada}
                        tipo="password"
                    />
                </Col>
            </Row>
            <Row>
                <Col lg={6} md={6} sm={6}>
                    <Link to="/cadastro/interesses">
                        <Botao variante="secundaria">
                            Anterior
                        </Botao>
                    </Link>
                </Col>
                <Col lg={6} md={6} sm={6}>
                    <div style={{ textAlign: 'right' }}>
                        {/* <Link to="/cadastro/concluido"> */}
                        <Botao>
                            Próxima
                        </Botao>
                        {/* </Link> */}
                    </div>
                </Col>
            </Row>
        </form>
    )
}

export default DadosPessoais
