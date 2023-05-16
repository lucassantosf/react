import React, { Component } from "react";
import "./style.css"

class Form extends Component{
    render(){
        return (
            <form className="form-cadastro" >
                <input type="text" placeholder='Titulo' className="form-cadastro_input"  />
                <textarea rows={15} placeholder='Escreva sua nota' className="form-cadastro_input"  />
                <button type='submit' className="form-cadastro_input form-cadastro_submit" >Criar Nota</button>
            </form>
        )
    }
}

export default Form