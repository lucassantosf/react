import React from 'react'
import './App.css';
import Header from './components/header';
import Container from './components/container';
import Title from './components/title';
import Footer from './components/footer';

function App() {
  return (
    <>
      <Header />
      <Container>
        <Title>Área Administrativa</Title>
      </Container>
      <Footer/>
    </>
  );
}

export default App;
