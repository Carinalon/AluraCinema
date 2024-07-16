import { createContext, useContext, useState } from "react";

export const FavoritosContext = createContext();

FavoritosContext.displayName = "Favoritos";

export default function FavoritoProvider({ children }){
const [favorito, setFavorito]= useState([]);

    return (
     <FavoritosContext.Provider value={{ favorito, setFavorito }}>
        {children}
     </FavoritosContext.Provider>
    );
}
export function useFavoritosContext(){
    const {favorito, setFavorito} = useContext(FavoritosContext);

    function agregarFavorito(nuevofavorito){
        const favoritoRepetido = favorito.some(
            (item) => item.id === nuevofavorito.id
        );
            let nuevaLista= [...favorito]
            if(!favoritoRepetido){
                nuevaLista.push(nuevofavorito)
                return setFavorito(nuevaLista)
            }

            nuevaLista = favorito.filter(item=> item.id !== nuevofavorito.id);
            return setFavorito(nuevaLista);
    }
    return { favorito, agregarFavorito};

}