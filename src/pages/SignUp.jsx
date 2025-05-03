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
            },6000)
        }
    }

    return(
        <div>
            <ToastContainer/>
            <img src={arrowBack} onClick={()=> navigate('/')} className="w-7 absolute top-3 left-2 rounded-full p-1 border" />

          <form onSubmit={(e)=>handleSubmit(e)} className="w-[90%] h-[fit-content] p-2 ml-[5%] border border-amber-400 mt-[28%] rounded-2xl
            md:w-[60%] md:ml-[20%] lg:w-[50%] lg:ml-[25%] lg:mt-[13%] xl:w-[40%] xl:mt-[9%] xl:ml-[30%] xl:p-7
          ">
            <label htmlFor="UserName">UserName:</label>
            <Input value={userData.name} placeholder={'input UserName'}
             onChange={(e)=> setUserData({...userData, name:e.target.value})} />
             {nameError.length > 0 && <p>{nameError}</p>}

             <br />

             <label htmlFor="Email">Email:</label>
             <Input value={userData.email} placeholder={'input Email'}
             onChange={(e)=> setUserData({...userData, email:e.target.value})} />
             {emailError.length > 0 && <p>{emailError}</p>}

            

             <label htmlFor="Password">Password:</label>
             <Input value={userData.password} placeholder={'input password'}
             onChange={(e)=> setUserData({...userData, password:e.target.value})} />
             {passwordError.length > 0 && <span>{passwordError}</span>}

             <button className="bg-red-400 text-white font-bold p-2 rounded-xl ml-[40%] md:ml-[42%] lg:ml-[43%]">
                submit
             </button>

             <p className="text-center">already have an account? <Link to='/signin' className="text-red-400">login</Link></p>
          </form>
        </div>
    )
}