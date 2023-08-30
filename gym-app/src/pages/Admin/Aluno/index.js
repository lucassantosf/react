import Table from "components/Table";
import Button from '../../../components/Button'
import { HeaderIndex } from './styles'
import { useNavigate } from "react-router-dom";

const data = [
    { id: 1, nome: 'Lucas', status: 'Ativo' },
    { id: 2, nome: 'Ferreira', status: 'Ativo A Vencer' },
    { id: 3, nome: 'Santos', status: 'Vencido' },
];

const headers = [
    {
        "property": "id",
        "description": "Cod"
    },
    {
        "property": "nome",
        "description": "Nome"
    },
    {
        "property": "status",
        "description": "Situação"
    },
    {
        "property": "acoes",
        "description": "Ações"
    }
]

const Aluno = () => {
    const navigate = useNavigate()

    return (
        <div>
            <HeaderIndex>
                <Button label="Voltar" onClick={() => navigate(-1)} />
                <h1>Alunos</h1>
                <Button label="Cadastrar" onClick={() => navigate('/alunos/cadastrar')} />
            </HeaderIndex>

            <Table headers={headers} data={data} />
        </div>
    )
}

export default Aluno