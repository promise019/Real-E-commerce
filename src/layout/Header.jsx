import search from '../assets/icons/Search.svg'
import account from '../assets/icons/Account.svg'
import cartimg from '../assets/icons/Cart 3.svg'
import arrow_down from '../assets/icons/Arrow down.svg'
import close from '../assets/icons/Close.svg'
import { useContext, useRef, useState } from "react";
import { searchContext } from "../context/SearchQueryContext";
import Select from '../ReusableComponent/Select';
import { Link, Navigate } from 'react-router';
import { cartContext } from '../context/cartContext';
import { AuthContext } from '../context/AuthContext';

function Header() {
    const {query, setQuery} = useContext(searchContext)
    const {cart, dispatch} = useContext(cartContext)
    const {signupData, loginData} = useContext(AuthContext)

    const [dropdown, setDropdown] = useState(0)
    const [dropdownHide, setDropdownHide] = useState(true)

    const handleSubmit = (e)=>{
        e.preventDefault()

        // if (query === '') return
    }

    return(
        <header className='fixed top-0 z-5 w-screen bg-white px-2 py-3 md:flex md:justify-between lg:px-4 xl:px-23'>
            <h1 className='inline-block font-bold text-2xl xl:text-3xl xl:mt-1.5'>JUMIA</h1>
            <form onSubmit={(e)=> handleSubmit(e)}
             className='w-[100%] md:w-[55%] mt-2 md:mt-0 md:static md:inline-block xl:w-[52%] xl:ml-30 flex space-x-2'
            >
                <img src={search}
                 className="hidden absolute w-6 lg:inline-block lg:mt-2.5 lg:ml-2 xl:mt-0 xl:top-5 xl:ml-5.5" 
                />

                <input type="search" value={query} onChange={(e)=> setQuery(e.target.value)}
                 placeholder='search products brands and categories' 
                 className='w-[80%] py-2 px-1 border border-gray-400 rounded-md lg:pl-10 xl:w-[82%] xl:pl-13 xl:pr-4'
                 
                />

                <button 
                 className='p-2 shadow-sm shadow-gray-400 text-white font-bold bg-amber-500 rounded-md xl:w-[15%] xl:px-3 '
                >
                    Search
                </button>

            </form>

            <nav className='w-[57%] absolute top-3 right-2 flex justify-between space-x-1 md:static md:w-[30%] xl:space-x-3 xl:w-[28%]'>
               
                <Select className='flex justify-between space-x-0.5 xl:space-x-2 xl:w-[30%]'>
                    <img src={account} onClick={()=> setDropdown(1)} className="w-4 xl:w-6" />
                    <h1 onClick={()=> setDropdown(1)} className='mt-1.5 md:mt-2 xl:mt-3'>Account</h1>
                    <img onClick={()=> setDropdown(1)} src={arrow_down} className="w-4" />

                    {dropdown===1 && 
                     <ul className={`absolute top-10 bg-gray-800 text-white w-[100px] p-3 rounded-lg md:top-13 xl:top-15 xl:w-[130px]`}>
                        <h1 onClick={()=> setDropdown(0)} className='absolute font-bold ml-[70px] -mt-2.5 xl:ml-[90px] xl:-mt-2'>x</h1>
                        {loginData && <li className='truncate'>{signupData.name}</li>}
                        <Link to='/signup'><li>SignUp</li></Link>
                        <Link to='/signin'><li>Login </li></Link>
                     </ul> }
                </Select>


                <Select 
                 className='flex justify-between space-x-1 xl:space-x-2 xl:w-[30%]'>
                    <h1 onClick={()=> setDropdown(2)} className='hidden lg:block font-bold xl:text-2xl mt-3 xl:mt-2 '>?</h1>
                    <h1 onClick={()=> setDropdown(2)} className='mt-1.5 md:mt-2 xl:mt-3'>Help</h1>
                    <img onClick={()=> setDropdown(2)} src={arrow_down} className="w-4" />

                    {dropdown===2 && <div className='absolute top-10 bg-gray-800 text-white w-[100px] p-3 rounded-lg md:top-13 xl:top-15 xl:w-[130px]'>
                        <h1 onClick={()=> setDropdown(0)} className='absolute font-bold ml-[70px] -mt-2.5 xl:ml-[90px] xl:-mt-2'>x</h1>
                        <Link to='/about'><h1>About us</h1></Link>
                        <Link to='/contact'><h1>Contact </h1></Link>
                    </div> }
                </Select>


                <Link to='/cartPage' className='flex justify-between xl:mt-3 xl:mr-3'>
                {cart.length > 0 && 
                    <div className='w-[13px] h-[13px] absolute bg-amber-500 rounded-full font-bold text-white text-center text-[9px] md:top-4 xl:w-[15px] xl:h-[15px] xl:top-4.5 xl:ml-3'>
                        {cart.length}
                    </div>
                }
                    <img src={cartimg} className="inline-block w-5 xl:w-7 xl:-mt-2 " />
                    <h1 className='mt-1.5 md:mt-2 xl:-mt-0.5'>Cart</h1>
                </Link>
            </nav>
        </header>
    )
}

export default Header