import Cabecera from "Components/Cabecera/Cabecera"
import Container from "Components/Container/Index"
import Footer from "Components/Footer/Footer"
import FavoritoProvider from "Context/Favoritos"
import { Outlet } from "react-router-dom"

function PaginaBase(){
    return(
        <main>
            <Cabecera/>
            <FavoritoProvider>
                <Container>
                    <Outlet/>
                </Container>
            </FavoritoProvider>
            <Footer/>
        </main>
    )
}

export default PaginaBase