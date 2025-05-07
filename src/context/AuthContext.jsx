import { createContext } from "react";
import { useEffect, useState } from "react";

export const AuthContext = createContext()

export default function AuthProvider({children}) {
    const [signupData, setSignupData] = useState(JSON.parse(localStorage.getItem('E-commerce-signup')) || [])
    const loginData = JSON.parse(localStorage.getItem('E-commerce Login'))

    useEffect(()=>{
        localStorage.setItem('E-commerce-signup', JSON.stringify(signupData))
    },[signupData])

    return(
        <AuthContext.Provider value={{setSignupData, signupData, loginData}}>
            {children}
        </AuthContext.Provider>
    )   
}