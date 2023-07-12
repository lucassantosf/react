import { createListenerMiddleware } from "@reduxjs/toolkit"
import categoriasServices from "services/categoria"
import { adicionarTodasAsCategorias, adicionarUmaCategoria, carregarCategorias, carregarUmaCategoria } from "store/reducers/categorias"
import criarTarefa from "./utils/criarTarefa"

export const categoriasListener = createListenerMiddleware()

categoriasListener.startListening({
    actionCreator: carregarCategorias,
    effect: async (action, { dispatch, fork, unsubscribe }) => {
       const resposta = await criarTarefa({
        fork,
        dispatch,
        action: adicionarTodasAsCategorias,
        busca: categoriasServices.buscar,
        textoCarregando:'Carregando categorias',
        textoSucesso:'Categorias carregadas com sucesso',
        textoErro:'Erro na busca de categorias',
       })
       if(resposta.status === 'ok' ){
            unsubscribe()
       }
    }
})

categoriasListener.startListening({
    actionCreator: carregarUmaCategoria,
    effect: async (action,{fork,dispatch,getState, unsubscribe})=>{
        const {categorias} = getState()
        const nomeCategoria = action.payload
        const categoriaCarregada = categorias.some(categoria=>categoria.id === nomeCategoria)

        if(categoriaCarregada) return;
        if(categorias.length === 5) unsubscribe();

        await criarTarefa({
            fork,
            dispatch,
            action: adicionarUmaCategoria,
            busca: ()=>categoriasServices.buscarUmaCategoria(nomeCategoria),
            textoCarregando:`Carregando categoria ${nomeCategoria}`,
            textoSucesso:`Categoria ${nomeCategoria} carregada com sucesso`,
            textoErro:`Erro na busca da categoria ${nomeCategoria}`,
        })
    }
})