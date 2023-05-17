import React, { Component } from "react";
import "./style.css"

class Form extends Component{
    constructor(props){
        super(props)
        this.titulo = ""
        this.texto = ""
    }

    _handleMudancaTitulo(evento){
        evento.stopPropagation()
        this.titulo = evento.target.value
    }

    _handleMudancaTexto(evento){
        evento.stopPropagation()
        this.texto = evento.target.value
    }

    _handleCriarNota(evento){
        evento.preventDefault()
        evento.stopPropagation()
        console.log('criar')
        this.props.criarNota(this.titulo,this.texto)
    }

    render(){
        return (
            <form className="form-cadastro" onSubmit={this._handleCriarNota.bind(this)}>
                <input type="text" placeholder='Titulo' className="form-cadastro_input" onChange={this._handleMudancaTitulo.bind(this)} />
                <textarea rows={15} placeholder='Escreva sua nota' onChange={this._handleMudancaTexto.bind(this)} className="form-cadastro_input"  />
                <button type='submit' className="form-cadastro_input form-cadastro_submit" >Criar Nota</button>
            </form>
        )
    }
}

export default Form