import { createContext, useEffect, useState } from "react";
import products from "../assets/database/Database";

export const productContext = createContext();

export default function ProductProvider({children}) {
    const [storedProducts, setStoredProducts] = useState(JSON.parse(localStorage.getItem('stored products')) || products)

    useEffect(()=>{
        localStorage.setItem('stored products', JSON.stringify(storedProducts))
    },[storedProducts])

    return(
        <productContext.Provider value={{storedProducts}}>
            {children}
        </productContext.Provider>
    )
}