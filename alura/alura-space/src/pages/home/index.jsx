import banner from './banner.png';
import styles from './styles.module.scss';

import Galeria from "components/galeria";
import Rodape from "components/rodape";
import Header from "components/header";
import Menu from "components/menu";
import Populares from "components/populares";

export default function Home(){
    return (
        <>
            <Header/>
            <main>
                <section className={styles.principal}>
                    <Menu />
                    <div className={styles.principal__imagem}>
                        <h1>A galeria mais completa do espaço</h1>
                        <img src={banner} alt="A imagem da terra vista do espaço"/>
                    </div>
                </section> 
                <div className={styles.galeria}>
                    <Galeria/>
                    <Populares/>
                </div>
            </main>
            <Rodape/>
        </>
    )
}