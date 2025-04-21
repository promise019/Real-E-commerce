import { createContext, useEffect, useReducer } from "react"

export const cartContext = createContext();

function cartReducer(state, action) {
    switch (action.type) {
        case 'cart/add':
            const exist = state.find(item=> item.id === action.payload.id)
            if (exist) {
               return state.map(item=> item.id === action.payload.id ?
                   (alert('already added to cart'), {...item, quantity:item.quantity + action.payload.quantity} ): item
                )
            }else{
                return [...state, action.payload]
            }

            break;

        case 'cart/remove':
            return state.filter(item => item.id !== action.payload)
            break;

        case 'cart/increment':
            return state.map(item=> item.id === action.payload ?
                 {...item, quantity: item.quantity + 1} : item)
            break;
    
        case 'cart/decrement':
            return state.map(item=> item.id === action.payload ? 
                {...item, quantity:(item.quantity < 2 ? 1 : item.quantity - 1)} : item)
            break;
        
        default:
            break;
    }
}

export default function CartProvider({children}) {
    const [cart, dispatch] = useReducer(cartReducer, JSON.parse(localStorage.getItem('Ecart')) || [])

    useEffect(()=>{
        localStorage.setItem('Ecart', JSON.stringify(cart))
    },[cart])

    return(
        <cartContext.Provider value={{cart, dispatch}}>
            {children}
        </cartContext.Provider>
    )
}