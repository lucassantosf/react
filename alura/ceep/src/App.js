import React, { Component } from "react";
import List from "./components/list";
import Form from "./components/form";
import "./assets/App.css";
import './assets/index.css';

class App extends Component {

  constructor(){
    super()
    this.state = {
      notas:[]
    }
  }

  criarNota(titulo,texto){
    const novaNota = {titulo,texto}
    const novoArrayNotas = [...this.state.notas,novaNota]

    const novoEstado = {notas: novoArrayNotas}
    this.setState(novoEstado)
  }

  render() {
    return (
      <section className="conteudo">
        <Form criarNota={this.criarNota.bind(this)} />
        <List notas={this.state.notas}/>
      </section>
    );
  }
}

export default App;
