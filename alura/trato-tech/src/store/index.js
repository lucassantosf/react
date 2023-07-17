import { configureStore } from "@reduxjs/toolkit";
import categoriaSlice from "./reducers/categorias";
import itensSlice from './reducers/itens'
import carrinhoSlice from './reducers/carrinho'
import buscaSlice from './reducers/busca'
// import { categoriasListener } from "./middlewares/categorias";
import { itensListener} from "./middlewares/itens";
import createSagaMiddleware from "redux-saga"
import { categoriasSaga } from "./sagas/categorias";
import { carrinhoSaga } from "./sagas/carrinho";

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer:{
        categorias: categoriaSlice,
        itens: itensSlice,
        carrinho: carrinhoSlice,
        busca: buscaSlice,
    },
    middleware: getDefaultMiddleware=>getDefaultMiddleware().prepend(
        // categoriasListener.middleware,
        itensListener.middleware,
        sagaMiddleware
    )
})

sagaMiddleware.run(categoriasSaga)
sagaMiddleware.run(carrinhoSaga)

export default store