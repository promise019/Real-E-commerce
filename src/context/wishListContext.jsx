import { createContext, useEffect, useState } from "react"

export const wishlistContext = createContext()

export default function WishlistProvider({children}) {
    const [wishList, setWishlist] = useState(JSON.parse(localStorage.getItem('wishlist')) || [])

    useEffect(()=>{
        localStorage.setItem('wishlist', JSON.stringify(wishList))
    },[wishList])

    // function wishLogic(item) {
        function addWishlist(item) {
            setWishlist([
                ...wishList,
                {...item, wish:true}
            ])
        }
    
        function removeWishlist(id) {
            setWishlist(wishList.filter(item=> item.id !== id))
        }
    // }

    return(
        <wishlistContext.Provider value={{addWishlist, removeWishlist, wishList, setWishlist}}>
            {children}
        </wishlistContext.Provider>
    )
}