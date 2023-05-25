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
        <TableS consultas={consultas} />
        <Chart consultas={consultas} profissionais={profissionais}/>
      </Container>
      <Footer/>
    </>
  );
}

export default App;
