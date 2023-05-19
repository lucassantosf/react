import React,{useState} from 'react'
import Tags from 'components/tags'
import styles from './styles.module.scss'
import Cards from './cards'
import fotos from './fotos.json' 

export default function Galeria() {
  const [itens,setItens] = useState(fotos)
  const tags = [...new Set(fotos.map((foto)=>foto.tag))]

  const filtrarFotos = (tag)=>{
    const novasFotos = fotos.filter((foto)=>{
      return foto.tag === tag;
    })

    setItens(novasFotos)
  }

  return (
    <section className={styles.galeria}>
      <h2>Navegue pela galeria</h2>
      <Tags tags={tags} filtrarFotos={filtrarFotos} setItens={setItens} />  
      <Cards itens={itens} styles={styles} />
    </section> 
  )
}