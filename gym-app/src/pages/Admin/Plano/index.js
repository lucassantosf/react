import Table from "components/Table";
import Button from '../../../components/Button'
import { HeaderIndex } from './styles'
import { useNavigate } from "react-router-dom";

const data = [
    { id: 1, descricao: 'Plano Mensal', duracao: '1', valor: 100},
];

const headers = [
    {
        "property": "id",
        "description": "Cod"
    },
    {
        "property": "descricao",
        "description": "Descrição"
    },
    {
        "property": "duracao",
        "description": "Duração"
    },
    {
        "property": "valor",
        "description": "Valor"
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
                <h1>Planos</h1>
                <Button label="Cadastrar" onClick={() => navigate('/alunos/cadastrar')} />
            </HeaderIndex>

            <Table headers={headers} data={data} />
        </div>
    )
}

export default Aluno