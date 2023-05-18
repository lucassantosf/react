import React from 'react'
import styles from './styles.module.scss'
import facebook from './facebook.svg'
import twitter from './twitter.svg'
import instagram from './instagram.svg'

export default function Galeria() {
  return (
    <footer className={styles.rodape}> 
      <div className={styles.rodape__icons}>
        <img src={facebook} alt='facebook' />
        <img src={twitter} alt='twitter' />
        <img src={instagram} alt='instagram' />
      </div> 
      <p>Desenvolvido por Lucas</p>
    </footer>
  )
}
