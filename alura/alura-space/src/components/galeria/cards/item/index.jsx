import React from 'react'
import open from './open.png'
import favorito from './favorito.png'

export default function Item({foto,styles}) {
  return (
    <li key={foto.id} className={styles.galeria__card}>
        <img className={styles.galeria__imagem} src={foto.imagem} alt={foto.titulo} />
        <p className={styles.galeria__descricao}>{foto.titulo}</p>
        <div>
        <p>{foto.creditos}</p>
        <span>
            <img src={favorito} alt="icone coracao de curtir" />
            <img src={open} alt="icone de abrir modal" />
        </span>
        </div>
    </li>
  )
}
