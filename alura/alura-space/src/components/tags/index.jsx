import React from 'react'
import styles from './styles.module.scss'
import fotos from 'components/galeria/fotos.json'

export default function Tags({tags, filtrarFotos, setItens}) {
  return (
    <div className={styles.tags}>
      <p>Filtre por tags:</p>
      <ul className={styles.tags__itens}>
        {tags.map(tag=>{
          return (
            <li key={tag} onClick={()=>filtrarFotos(tag)}>{tag}</li>
          )  
        })}
        <li onClick={()=>setItens(fotos)}>Todas</li>
      </ul>
    </div>
  )
}