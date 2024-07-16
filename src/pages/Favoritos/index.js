import Banner from "Components/Banner/Index";
import styles from "./Favoritos.module.css";
import Titulo from "Components/Titulo/Titulo";
import Card from "Components/Card";
import { useFavoritosContext } from "Context/Favoritos";

function Favoritos() {
  const { favorito } = useFavoritosContext();
  return (
    <>
      <Banner img="favoritos" color="#44d97d" />
      <Titulo>
        <h1>Mis favoritos</h1>
      </Titulo>
      <section className={styles.container}>
        {favorito.map((fav) => {
          return <Card {...fav} key={fav.id} />;
        })}
      </section>
    </>
  );
}

export default Favoritos;
