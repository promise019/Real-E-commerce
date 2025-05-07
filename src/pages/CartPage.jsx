import { useContext } from "react"
import { cartContext } from "../context/cartContext"
import home from '../assets/icons/Home.svg'
import Header from "../layout/Header"
import { useNavigate, Link } from "react-router"
import { NavigationTrackContext } from "../context/NavigationTrackContecxt"


export default function CartPage() {
    const {cart, dispatch} = useContext(cartContext)
    const {setPreviousPage} = useContext(NavigationTrackContext)

    const items = cart.reduce((acc, i)=> (acc + i.price * i.quantity),0)
    const shipping = 18.00

    const navigate = useNavigate()
    return(
        <div className="bg-gray-400 h-[fit-content]">
            <Header/>

            <img onClick={()=> navigate('/')}
             src={home} className="hidden z-11 fixed w-6.5 left-[50%] top-2 sm:left-[62%] md:hidden" />
            
            <div className="absolute w-[98vw] grid space-y-2 bg-white mt-25 pl-2 sm:pl-3 md:w-[50dvw] lg:w-[50vw] xl:w-[70vw] xl:pl-[7%]">
             {cart.length < 1 && <div className="text-center">No Item Added To cart</div>}
             {cart?.map(item=>
                <div key={item.id} className="shadow shadow-amber-300 py-2 px-1 mb-3">
                    <Link to={`/detailspage/${item.id}`}>
                    <img src={item.directory} alt={item.name}  className="inline-block w-[87px] h-[87px]"/>
                    <div className="inline-block w-[260px] p-2 lg:flex lg:justify-between lg:ml-26 lg:-mt-17 lg:w-[540px] xl:w-[750px] xl:ml-30 xl:-mt-23 ">
                        <p>{item.name}</p>
                        <h1 className="font-bold text-lg">${item.price.toFixed(2)}</h1>
                    </div>
                    </Link>

                    <div className="flex justify-between pt-2 h-[42px] lg:mt-7 xl:mt-10">
                        <button onClick={()=> dispatch({type:'cart/remove', payload:item.id})} className="text-red-400 rounded-lg">
                            Remove
                        </button>

                        <div className="">
                            <button onClick={()=> dispatch({type:'cart/decrement', payload:item.id})} disabled={parseInt(item.quantity) === 1}
                                className="p-1 text-xl font-bold border w-[30px] bg-amber-400 text-white rounded-lg disabled:bg-gray-400">
                                    -
                            </button>

                            <div className="inline-block w-[60px] text-center">{item.quantity}</div>

                            <button onClick={()=> dispatch({type:'cart/increment', payload:item.id})}
                                className="p-1 text-xl font-bold border w-[30px] bg-amber-400 text-white rounded-lg">
                                    +
                            </button>
                        </div>
                    </div>

                </div>
                )}
                <div className="grid mt-4 shadow shadow-amber-200 pb-3 md:fixed md:top-25 md:right-6 md:w-[40dvw] md:p-1 lg:top-23 lg:w-[26vw] lg:right-13 xl:w-[20vw] xl:p-3 xl:right-20 xl:top-17">
                <div className="flex justify-between p-2">
                    <span><b>Shipping-Fee</b></span> ${shipping.toFixed(2)}
                </div>
                <button onClick={()=>{localStorage.getItem('E-commerce Login') ? navigate('/checkout') : (setPreviousPage('/cartpage'),navigate('/signin'))}} className="bg-amber-400 p-2 rounded-lg text-white font-bold">Checkout ${items}</button>
                </div>
            </div>
        </div>
    )
}