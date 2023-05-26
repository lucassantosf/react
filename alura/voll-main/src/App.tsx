import React from 'react'
import './App.css';
import Header from './components/header';
import Container from './components/container';
import Title from './components/title';
import Footer from './components/footer';
import TableS from './components/table';
import useDadosConsulta from './useDadosConsulta';
import Chart from './components/chart';
import useDadosProfissional from './useDadosProfissional';
import Assess from './components/assess';
import ButtonStyled from './components/button';
import SubTitleStyled from './components/subtitle';

function App() {
  const {dados: consultas, erro: consultaErro} = useDadosConsulta();
  const {dados: profissionais,erro: profissionaisErro} = useDadosProfissional();

  if(consultaErro || profissionaisErro){
    console.log("Erro na api")
  }

  return (
    <>
      <Header />
      <Container>
        <Title>Área Administrativa</Title>
        <ButtonStyled>Cadastrar especialista</ButtonStyled>
        <Title>Consulta do dia</Title>
        <TableS consultas={consultas} />
        <Title>Consultas mensais por especialista</Title> 
        <SubTitleStyled>Dezembro/22</SubTitleStyled>
        <Chart consultas={consultas} profissionais={profissionais}/>
        <Title>Avaliações de especialistas</Title>
        <Assess profissionais={profissionais}/>
      </Container>
      <Footer/>
    </>
  );
}

export default App;
