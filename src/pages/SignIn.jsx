import { useState } from "react";
import Input from "../ReusableComponent/Input";
import { Link } from "react-router";
import arrowBack from '../assets/icons/Arrow back.svg'
import { toast, ToastContainer } from "react-toastify";

export default function SignIn() {
    const [loginData, setLoginData] = useState(JSON.parse(localStorage.getItem('E-commerce Login')) || [])
    const [signupData, setSignUp] = useState(JSON.parse(localStorage.getItem('E-commerce-signup')))

    const [userData, setUserData] = useState({
        password:'',
        email:''
    })

    function handleSubmit(e) {
        e.preventDefault()

        if (userData.email.length < 1 || userData.password.length < 1) {
            toast.error('email and password required')
        } else if(signupData.email === userData.email && signupData.password === userData.password){
            toast.success('login successfull')
            localStorage.setItem('E-commerce Login', JSON.stringify(userData))
            window.history.back(-2)
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
        <img src={arrowBack} onClick={()=> navigate('/')} className="w-7 absolute top-3 left-2 rounded-full p-1 border" />

        <form onSubmit={(e)=>handleSubmit(e)} className="w-[90%] h-[fit-content] p-2 ml-[5%] border border-amber-400 mt-[28%] rounded-2xl 
         md:w-[60%] md:ml-[20%] lg:w-[50%] lg:ml-[25%] lg:mt-[13%] xl:w-[40%] xl:mt-[9%] xl:ml-[30%] xl:p-7">

            <label htmlFor="Email">Email:</label>
            <Input value={userData.email} placeholder={'input Email'}
             onChange={(e)=> setUserData({...userData, email:e.target.value})} />

             <br />

            <label htmlFor="password">Password:</label>
             <Input value={userData.password} placeholder={'input Password'}
             onChange={(e)=> setUserData({...userData, password:e.target.value})} />

             <br />

             <button className="bg-red-400 text-white font-bold p-2 rounded-xl ml-[40%] md:ml-[42%] lg:ml-[43%]">submit</button>

             <p className="text-center">dont't have an account? <Link to='/signup' className="text-red-400">signup</Link></p>
        </form>
     </div>
    )
}