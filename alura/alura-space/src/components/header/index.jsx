import logo from './logo.png';
import search from './search.png';
import styles from './style.module.scss'

export default function Header(){
    return (
        <header className={styles.cabecalho}>
            <img src={logo} alt="Logo AluraSpace" />
            <div className={styles.cabecalho__container}>
                <input className={styles.cabecalho__input} type="text" placeholder="O que vc procura?" />
                <img src={search} alt="icone de lupa" />
            </div>
        </header>
    )
}