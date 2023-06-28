import { configureStore } from "@reduxjs/toolkit";

import categoriaSlice from "./reducers/categorias";
import itensSlice from './reducers/itens'

const store = configureStore({
    reducer:{
        categorias: categoriaSlice,
        itens: itensSlice
    }
})

export default store