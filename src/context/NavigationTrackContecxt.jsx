import { createContext, useState } from "react"

export const NavigationTrackContext = createContext();

export default function NavigationTrackProvider({children}) {
    const [previousPage, setPreviousPage] = useState('/')

    return (
        <NavigationTrackContext.Provider value={{previousPage, setPreviousPage}}>
            {children}
        </NavigationTrackContext.Provider>
    )
}