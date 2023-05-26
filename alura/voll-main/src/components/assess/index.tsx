import styled from "styled-components"
import IProfissional from "../../types/IProfissional"
import Card from "./card"
import ButtonStyled from "../button";

const SectionCard = styled.section`
    display:flex;
    flex-wrap: wrap;
    justify-content:space-between;
    width: 100%;
`;

function Assess({profissionais} : {profissionais: IProfissional[] | null}){
    return (
        <>
            <SectionCard>
                {profissionais?.map(profissional=>{
                    return <Card profissional={profissional} />
                })}
            </SectionCard>
            <ButtonStyled>Ver mais</ButtonStyled>
        </>
    )
}

export default Assess