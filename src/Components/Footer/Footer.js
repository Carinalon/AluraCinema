import styles from "./Footer.module.css"
import logo from "./logo-alura.png"


function Footer (){
    return(
        <footer  className={styles.footer}>
            <h2>Desarrollado por Carina Alonzo </h2>
            <img src={logo} alt="Logo Alura"/>
        </footer>

    )

}

export default Footer