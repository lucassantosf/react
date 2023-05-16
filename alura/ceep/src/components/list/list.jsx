import React, { Component } from 'react'
import Card from '../card';
import "./style.css"

class ListNotes extends Component{
    render(){
        return (
            <ul className="lista-notas">
                {
                    Array.of("Trabalho","Trabalho2","Estudos").map((categoria,index)=>{
                        return (
                            <li className="lista-notas_li" key={index}>
                                <Card/>
                            </li>
                        );
                    })
                } 
            </ul>
        )
    }
}

export default ListNotes
