import { createListenerMiddleware } from "@reduxjs/toolkit"
import criarTarefa from "./utils/criarTarefa"
import { carregarUmaCategoria } from "store/reducers/categorias"
import itensServices from "services/itens"
import { adicionarItens } from "store/reducers/itens"

export const itensListener = createListenerMiddleware()

itensListener.startListening({
    actionCreator: carregarUmaCategoria,
    effect: async (action, { dispatch, fork, unsubscribe, getState }) => {
        const {itens} = getState()

        if(itens.length === 25) return unsubscribe();

        const nomeCategoria = action.payload

        const itensCarregados = itens.some(item=>item.categoria === nomeCategoria)

        if(itensCarregados) return;

        await criarTarefa({
            fork,
            dispatch,
            action: adicionarItens,
            busca: ()=>itensServices.buscarDeCategorias(nomeCategoria),
            textoCarregando:`Carregando itens da categoria ${nomeCategoria}`,
            textoSucesso:`Itens da categoria ${nomeCategoria} carregado com sucesso`,
            textoErro:'Erro na busca de itens',
        }) 
    }
}) 