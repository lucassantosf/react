import { createStandaloneToast } from '@chakra-ui/toast';
import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import categoriasServices from 'services/categoria';

const { toast } = createStandaloneToast()

export const carregarCategorias = createAction('categorias/carregarCategorias')
export const carregarUmaCategoria = createAction('categorias/carregarUmaCategoria')

export const buscarCategorias = createAsyncThunk(
  'categorias/buscar',
  categoriasServices.buscar
)

const categoriasSlice = createSlice({
  name: 'categorias',
  initialState: [], 
  reducers:{
    adicionarTodasAsCategorias: (state,{payload})=>{
      return payload
    }
  },
  // extraReducers: builder=>{
  //   builder 
  // }
});

export const { adicionarTodasAsCategorias } = categoriasSlice.actions

export default categoriasSlice.reducer;