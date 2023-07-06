import Header from 'components/Header';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Anuncie.module.scss';
import Button from 'components/Button';
import { useForm } from 'react-hook-form'
import { cadastrarItem } from 'store/reducers/itens';
import { useParams } from 'react-router-dom';
import Input from 'components/Input';

export default function Carrinho() {
  const dispatch = useDispatch();
  const {nomeCategoria=''} = useParams()
  
  const categorias = useSelector(state=>state.categorias.map(({nome,id})=>({nome,id})))
  const { register, handleSubmit, formState } = useForm({
    defaultValues:{
      categoria: nomeCategoria
    }
  })
  const { errors } = formState;

  function cadastrar(data){
    dispatch(cadastrarItem(data))
  }

  return (
    <div className={styles.container}>
      <Header
        titulo='Anuncie aqui'
        descricao='Anuncie seu produto no melhor site do Brasil'
      />
      <form className={styles.formulario} onSubmit={handleSubmit(cadastrar)}>

        <Input 
          className={errors.titulo ? styles['input-erro'] : ''} 
          {...register('titulo', { required: 'O campo titulo é obrigatório' })} 
          placeholder='titulo do produto' alt='titulo do produto' />
        {errors.titulo && <span className={styles['mensagem-erro']}> {errors.titulo.message} </span>} 

        <Input 
          className={errors.descricao ? styles['input-erro'] : ''} 
          {...register('descricao', { required: 'O campo descricao é obrigatório' })} 
          placeholder='descricao do produto' alt='descricao do produto' />
        {errors.descricao && <span className={styles['mensagem-erro']}> {errors.descricao.message} </span>}

        <Input 
          className={errors.foto ? styles['input-erro'] : ''} 
          {...register('foto', { required: 'O campo foto é obrigatório' })} 
          placeholder='foto do produto' alt='foto do produto' />
        {errors.foto && <span className={styles['mensagem-erro']}> {errors.foto.message} </span>}

        <select 
          className={errors.categoria ? styles['input-erro'] : ''} 
          {...register('categoria',{required:'Catgoria obrigatório'})}
          disabled={nomeCategoria}
          >

          <option value="" disabled>Selecione uma categoria</option>
          {categorias.map(categoria=>(
            <option key={categoria.id} value={categoria.id}>
              {categoria.nome}
            </option>
          ))}
        </select>
        {errors.categoria && <span className={styles['mensagem-erro']}> {errors.categoria.message} </span>}

        <Input type='number'
          className={errors.preco ? styles['input-erro'] : ''} 
          {...register('preco', { required: 'O campo preco é obrigatório' , valueAsNumber: true})} 
          placeholder='preco do produto' alt='preco do produto' />
        {errors.preco && <span className={styles['mensagem-erro']}> {errors.preco.message} </span>}

        <Button type='submit'>Cadastrar produto</Button>
      </form>
    </div>
  )
}