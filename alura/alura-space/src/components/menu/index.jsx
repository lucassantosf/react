import React from 'react'
import icones from './icones.json'
import styles from './style.module.scss'

export default function Menu() {
  return (
    <nav className={styles.menu}>
        <ul className={styles.menu__lista}>
            {icones.map((icon)=>{
                return (
                    <li key={icon.id} className={styles.menu__item}>
                        <img src={icon.imagem} alt={icon.titulo}/>
                        <a href='/'>{icon.nome}</a>
                    </li>
                )
            })}
        </ul>
    </nav>
  )
}
