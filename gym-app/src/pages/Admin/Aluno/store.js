import { useNavigate } from "react-router-dom"
import { HeaderIndex } from "./styles"
import Button from "components/Button"


const AlunoStore = ()=>{
    const navigate = useNavigate()

    return (

            <div>
                <HeaderIndex>
                    <Button label="Voltar" onClick={() => navigate(-1)} />
                    <h1>Alunos</h1>
                    <Button label="Cadastrar" onClick={() => navigate('/alunos/cadastrar')} />
                </HeaderIndex>
            </div>
        )
}

export default AlunoStore