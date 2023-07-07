import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import categoriasServices from 'services/categoria';

const initialState = [ ];

export const buscarCategorias = createAsyncThunk(
  'categorias/buscar',
  categoriasServices.buscar
)

const categoriasSlice = createSlice({
  name: 'categorias',
  initialState,
  reducers: {
    adicionarCategorias : (state,{payload})=>{
      state.push(...payload)
    }
  },
  extraReducers: builder=>{
    builder.addCase(
      buscarCategorias.fulfilled,
      (state,{payload})=>{
        state.push(...payload)
      }
    )
  }
});

export const { adicionarCategorias } = categoriasSlice.actions

export default categoriasSlice.reducer;