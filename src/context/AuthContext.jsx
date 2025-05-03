import { createContext } from "react";
import { useEffect, useState } from "react";

export const AuthContext = createContext()

export default function AuthProvider({children}) {
    const [signupData, setSignupData] = useState(JSON.parse(localStorage.getItem('E-commerce-signup')) || [])
    const [loginData, setLoginData] = useState(JSON.parse(localStorage.getItem('E-commerce Login')))

    useEffect(()=>{
        localStorage.setItem('E-commerce-signup', JSON.stringify(signupData))
    },[signupData])

    return(
        <AuthContext.Provider value={{setSignupData, signupData, loginData, setLoginData}}>
            {children}
        </AuthContext.Provider>
    )   
}