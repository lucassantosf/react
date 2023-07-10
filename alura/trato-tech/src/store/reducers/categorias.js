import { createStandaloneToast } from '@chakra-ui/toast';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import categoriasServices from 'services/categoria';

const { toast } = createStandaloneToast()

export const buscarCategorias = createAsyncThunk(
  'categorias/buscar',
  categoriasServices.buscar
)

const categoriasSlice = createSlice({
  name: 'categorias',
  initialState: [], 
  extraReducers: builder=>{
    builder 
    .addCase(
      buscarCategorias.fulfilled,
      (state,{payload})=>{
        toast({
          title:'Sucesso!',
          description:'Categorias carregas com sucesso',
          status:'success',
          duration:2000,
          isClosable:true
        })
        return payload
      }
    )
    .addCase(
      buscarCategorias.pending,
      (state,{payload})=>{
        toast({
          title:'Carregando',
          description:'Carregando categorias',
          status:'loading',
          duration:2000,
          isClosable:true
        })
      }
    )
    .addCase(
      buscarCategorias.rejected,
      (state,{payload})=>{
        toast({
          title:'Erro',
          description:'Erro na busca de categorias',
          status:'error',
          duration:2000,
          isClosable:true
        })
      }
    ) 
  }
});

export default categoriasSlice.reducer;