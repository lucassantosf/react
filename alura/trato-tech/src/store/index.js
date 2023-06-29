import { configureStore } from "@reduxjs/toolkit";

import categoriaSlice from "./reducers/categorias";
import itensSlice from './reducers/itens'
import carrinhoSlice from './reducers/carrinho'

const store = configureStore({
    reducer:{
        categorias: categoriaSlice,
        itens: itensSlice,
        carrinho: carrinhoSlice,
    }
})

export default store