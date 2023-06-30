import { configureStore } from "@reduxjs/toolkit";

import categoriaSlice from "./reducers/categorias";
import itensSlice from './reducers/itens'
import carrinhoSlice from './reducers/carrinho'
import buscaSlice from './reducers/busca'

const store = configureStore({
    reducer:{
        categorias: categoriaSlice,
        itens: itensSlice,
        carrinho: carrinhoSlice,
        busca: buscaSlice,
    }
})

export default store