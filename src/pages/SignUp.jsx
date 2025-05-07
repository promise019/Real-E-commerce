import { useContext, useState } from "react";
import Input from "../ReusableComponent/Input";
import { Link, useNavigate } from "react-router";
import arrowBack from '../assets/icons/Arrow back.svg'
import { EmailValidator, NameValidator, PasswordValidator } from "../utility/input-validator";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../context/AuthContext";

export default function SignUp() {
    const navigate = useNavigate()

    const {setSignupData} = useContext(AuthContext)

    const [userData, setUserData] = useState({
        name:'',
        email:'',
        password:''
    })

    const [emailError, setEmailError] = useState([])
    const [nameError, setNameError] = useState([])
    const [passwordError, setPasswordError] = useState([])

    const emailValidator = EmailValidator(userData.email)
    const nameValidator = NameValidator(userData.name)
    const passwordValidator = PasswordValidator(userData.password)


    

    function handleSubmit(e) {
        e.preventDefault()

        if (userData.name.length < 1 || userData.email.length < 1 || userData.password.length < 1 || !userData.password.match(/[a-z]/)
            || !userData.password.match(/[A-Z]/) || !userData.password.match(/[0-9]/) || !/@(gmail\.com|yahoomail\.com)$/.test(userData.email)) {

            setEmailError(emailValidator)
            setPasswordError(passwordValidator)
            setNameError(nameValidator)

            return

        } else {

            setSignupData(userData)
            setEmailError([])
            setPasswordError([])
            setNameError([])

            toast.success('signup successfull')

            setTimeout(()=>{
                navigate('/signin')
            },1000)
        }
    }

    return(
        <div>
            <ToastContainer/>
            <img src={arrowBack} onClick={()=> navigate('/')} className="w-7 absolute top-3 left-2 rounded-full p-1 border" />

          <form onSubmit={(e)=>handleSubmit(e)} className="registration">

            <h1 className="font-bold text-lg">Welcome To Ideal Commerce</h1>

            <p>Type in your password and email to proceed or login</p>

            <Input value={userData.name} placeholder={'input UserName'}
             onChange={(e)=> setUserData({...userData, name:e.target.value})} />
             {nameError.length > 0 && <p className="reg-error">{nameError}</p>}

             <Input value={userData.email} placeholder={'input Email'}
             onChange={(e)=> setUserData({...userData, email:e.target.value})} />
             {emailError.length > 0 && <p className="reg-erro">{emailError}</p>}

             <Input value={userData.password} placeholder={'input password'}
             onChange={(e)=> setUserData({...userData, password:e.target.value})} />
             {passwordError.length > 0 && <p className="reg-error">{passwordError}</p>}

             <button className="continue">
                Continue
             </button>

             <p className="text-center">already have an account? <Link to='/signin' className="text-red-400">login</Link></p>
          </form>
        </div>
    )
}