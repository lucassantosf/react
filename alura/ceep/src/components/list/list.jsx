import React, { Component } from 'react'
import Card from '../card';
import "./style.css"

class ListNotes extends Component{
    render(){
        return (
            <ul className="lista-notas">
                {
                    this.props.notas.map((nota,index)=>{
                        return (
                            <li className="lista-notas_li" key={index}>
                                <Card titulo={nota.titulo} texto={nota.texto}/>
                            </li>
                        );
                    })
                } 
            </ul>
        )
    }
}

export default ListNotes
