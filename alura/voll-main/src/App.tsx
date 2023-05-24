import React from 'react'
import './App.css';
import Header from './components/header';
import Container from './components/container';
import Title from './components/title';
import Footer from './components/footer';
import TableS from './components/table';

function App() {
  return (
    <>
      <Header />
      <Container>
        <Title>Área Administrativa</Title>
        <TableS />
      </Container>
      <Footer/>
    </>
  );
}

export default App;
