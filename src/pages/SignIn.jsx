import { useContext, useState } from "react";
import Input from "../ReusableComponent/Input";
import { Link, useNavigate } from "react-router";
import arrowBack from '../assets/icons/Arrow back.svg'
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../context/AuthContext";
import { NavigationTrackContext } from "../context/NavigationTrackContecxt";

export default function SignIn() {
    const {signupData, setLoginData} = useContext(AuthContext)
    const {previousPage} = useContext(NavigationTrackContext)

    const [userData, setUserData] = useState({
        password:'',
        email:''
    })

    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()

        if (userData.email.length < 1 || userData.password.length < 1) {
            toast.error('email and password required')
            
        } else if(signupData.email === userData.email && signupData.password === userData.password){
            toast.success('login successfull')
            localStorage.setItem('E-commerce Login', JSON.stringify(userData))
            navigate(previousPage)

        }else if(signupData.email !== userData.email || signupData.password !== userData.password){
            toast.error('incorrect email or password')
            
        }else if(!signupData){
            toast.error('user not found')
            
        } else {
            toast.error('err')
        }
    }

    return(
     <div>
        <ToastContainer/>
        <img src={arrowBack} onClick={()=> navigate(previousPage)} className="w-7 absolute top-3 left-2 rounded-full p-1 border" />

        <form onSubmit={(e)=>handleSubmit(e)} className="registration">

            <h1 className="font-bold text-lg">Welcome To Ideal Commerce</h1>

            <p>Type in your password and email to proceed or create an account</p>

            <Input value={userData.email} placeholder={'input Email'}
             onChange={(e)=> setUserData({...userData, email:e.target.value})} />

             <br />

             <Input value={userData.password} placeholder={'input Password'}
             onChange={(e)=> setUserData({...userData, password:e.target.value})} />

             <br />

             <button className="continue">Continue</button>

             <p className="text-center">dont't have an account? <Link to='/signup' className="text-red-400">signup</Link></p>
        </form>
     </div>
    )
}