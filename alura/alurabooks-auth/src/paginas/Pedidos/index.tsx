import { AbBotao } from "ds-alurabooks"
import axios from 'axios'
import './Pedidos.css'
import { useEffect, useState } from "react"
import { IPedido } from "../../interfaces/IPedido"

const Pedidos = ()=>{

    const formatador = Intl.NumberFormat('pt-br',{style: 'currency', currency: 'BRL'})
    const [pedidos,setPedidos] = useState<IPedido[]>([])

    useEffect(()=>{
        const token = sessionStorage.getItem("token")
        
        axios.get<IPedido[]>('http://localhost:8000/pedidos',{
            headers:{
                'Authorization': `Bearer ${token}`
            }
        }).then(response=>{
            setPedidos(response.data)
        }).catch(error=>{
            console.log(error)
        })
    },[])

    const excluir = (pedido: IPedido) => {
        const token = sessionStorage.getItem('token')
        axios.delete('http://localhost:8000/pedidos/' + pedido.id, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(() => {
            setPedidos(pedidos.filter(p => p.id !== pedido.id))
        })
        .catch(erro => console.log(erro))
    }

    return (
        <section className="pedidos">
            <h1>Meus Pedidos</h1>
            {pedidos.map(pedido=>{
                return (
                    <div className="pedido" key={pedido.id}>
                        <ul>
                            <li>Pedido: <strong>{pedido.id}</strong></li>
                            <li>Data do Pedido: <strong>{new Date(pedido.data).toLocaleDateString()}</strong></li>
                            <li>Valor Total: <strong>{formatador.format(pedido.total)}</strong></li>
                            <li>Entrega realizada em : <strong>{new Date(pedido.entrega).toLocaleDateString()}</strong></li>
                            <li>
                                <button onClick={() => excluir(pedido)}>Excluir</button>
                            </li>
                        </ul>
                        <AbBotao texto="Detalhes"/>
                    </div>
                )
            })}
        </section>
    )
}

export default Pedidos