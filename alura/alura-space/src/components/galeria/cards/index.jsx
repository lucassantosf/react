import React from 'react'
import Item from './item'

export default function Cards({itens,styles}) {
  return (
    <ul className={styles.galeria__cards}>
        {itens.map((foto)=>{
            return (
                <Item foto={foto} styles={styles} />
            )
        })}
    </ul>
  )
}