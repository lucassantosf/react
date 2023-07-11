import { createListenerMiddleware } from "@reduxjs/toolkit"
import categoriasServices from "services/categoria"
import { adicionarTodasAsCategorias, carregarCategorias, carregarUmaCategoria } from "store/reducers/categorias"
import criarTarefa from "./utils/criarTarefa"

export const listener = createListenerMiddleware()

listener.startListening({
    actionCreator: carregarCategorias,
    effect: async (action, { dispatch, fork, unsubscribe }) => {
       await criarTarefa({
        fork,
        dispatch,
        action: adicionarTodasAsCategorias,
        busca: categoriasServices.buscar,
        textoCarregando:'Carregando categorias',
        textoSucesso:'Categorias carregas com sucesso',
        textoErro:'Erro na busca de categorias',
       })
       unsubscribe()
    }
})

listener.startListening({
    actionCreator: carregarUmaCategoria,
    effect: async ()=>{
        console.log('carregar so uma cat')
    }
})