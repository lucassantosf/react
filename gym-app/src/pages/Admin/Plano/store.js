import { useNavigate } from "react-router-dom"
import { HeaderIndex } from "./styles"
import Button from "components/Button"

const PlanoStore = ()=>{
    const navigate = useNavigate()

    return (
            <div>
                <HeaderIndex>
                    <Button label="Voltar" onClick={() => navigate(-1)} />
                    <h1>Plano cadastro</h1>
                    <Button label="Cadastrar" onClick={() => navigate('/planos/cadastrar')} />
                </HeaderIndex>
            </div>
        )
}

export default PlanoStore