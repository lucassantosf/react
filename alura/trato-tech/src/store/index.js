import { configureStore } from "@reduxjs/toolkit";
import categoriaSlice from "./reducers/categorias";
import itensSlice from './reducers/itens'
import carrinhoSlice from './reducers/carrinho'
import buscaSlice from './reducers/busca'
import { listener } from "./middlewares/categorias";

const store = configureStore({
    reducer:{
        categorias: categoriaSlice,
        itens: itensSlice,
        carrinho: carrinhoSlice,
        busca: buscaSlice,
    },
    middleware: getDefaultMiddleware=>getDefaultMiddleware().prepend(listener.middleware)
})

export default store