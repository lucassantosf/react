import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import IProfissional from "../../types/IProfissional";
import IConsulta from "../../types/IConsulta";
import useDadosGrafico from "./useDadosGrafico";
import styled from "styled-components";

interface Props{
    profissionais: IProfissional[] | null,
    consultas: IConsulta[] | null,
}
interface IDados{
    nome:string,
    consultas: number
}

const SessaoStyled = styled.section`
    background-color: var(--branco),
    border-radius: 16px
`

function Chart({profissionais,consultas}:Props){
    let dados: Array<IDados> = useDadosGrafico({profissionais,consultas});

    return (
        <SessaoStyled>
            <ResponsiveContainer width="100%" height={350}>
                <BarChart layout="vertical" data={dados} margin={{top:25,right:40,left:40,bottom:20}}>
                    <XAxis type="number"></XAxis>
                    <YAxis type="category" dataKey="nome"></YAxis>
                    <Bar dataKey="consultas" fill="#083860" barSize={30}></Bar>
                </BarChart>
            </ResponsiveContainer>
        </SessaoStyled>
    )
}

export default Chart