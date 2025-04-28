import { NavLink, useNavigate } from "react-router";
import wishlistIcon from '../assets/icons/Heart.svg'
import cartIcon from '../assets/icons/Cart 3.svg'
import account from '../assets/icons/Account.svg'
import { useContext, useRef } from "react";
import { cartContext } from "../context/cartContext";
import { wishlistContext } from "../context/wishListContext";

function NavigationBar() {
    const {cart} = useContext(cartContext)
    const {wishList} = useContext(wishlistContext)
    const isLoggedIn = JSON.parse(localStorage.getItem('E-commerce Login'))
    const userData = JSON.parse(localStorage.getItem('E-commerce-signup'))

    const dropdownRef = useRef(null)

    const navigate = useNavigate()

    return(
        <>
        <section className="hidden md:block md:absolute md:top-3 md:right-6 lg:block lg:left-[19%] lg:top-5.5 xl:flex xl:justify-between
         xl:w-[20%]">
        <NavLink to='/' className={({isActive})=> isActive ? 'active' : ''}>
            Home
        </NavLink>
        {' '}

        <NavLink to='/contact' className={({isActive})=> isActive ? 'active' : ''}>
            contact
        </NavLink>
        {' '}

        <NavLink to='/about' className={({isActive})=> isActive ? 'active' : ''}>
            about
        </NavLink>
        {' '}

        {isLoggedIn? `` : <NavLink to='/signin' className={({isActive})=> isActive ? 'active' : ''}>
            signup
        </NavLink> }
        {' '}
        </section>

        

        <div className="w-[20%] flex absolute top-2 ml-[60%] sm:ml-[70%]
        md:w-[10%] md:top-13 md:ml-[69%] lg:w-[8%] lg:top-5.5 lg:ml-[73%] xl:ml-[70%] xl:w-[6%]" >
            <div onClick={()=> navigate('/wishlist')}
             className="w-[12px] h-[fit-content] p-[1%] text-center bg-red-400 rounded-full text-[50%] 
                 font-bold text-white absolute ml-4">
                <span>{wishList.length}</span>
            </div>
            <img onClick={()=> navigate('/wishlist')} src={wishlistIcon} className="inline-block w-7 mr-[30%]"/>
            
            <div onClick={()=> navigate('/cartPage')}
             className="w-[12px] inline-block h-[fit-content] p-[0.6%] text-center bg-red-400 rounded-full text-[50%] 
              font-bold text-white absolute ml-17">
                <span>{cart.length}</span>
            </div>
            <img onClick={()=> navigate('/cartPage')} src={cartIcon} className="inline-block w-7 mr-[30%]"/>

            <img onClick={()=> dropdown} src={account} className="inline-block w-7 rounded-full bg-gray-400 p-1" />
            {' '}
            <span className="hidden sm:inline">{isLoggedIn && ` ${userData.name}`}</span>

            <br />

            
        </div>
        </>

    )
}

export default NavigationBar

// E-commerce Login {"password":"123qweQWE","email":"edetpromise019@gmail.com"}