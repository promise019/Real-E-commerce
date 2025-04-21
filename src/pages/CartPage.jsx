import { useContext } from "react"
import { cartContext } from "../context/cartContext"
import home from '../assets/icons/Home.svg'
import Header from "../layout/Header"
import { useNavigate, Link } from "react-router"


export default function CartPage() {
    const {cart, dispatch} = useContext(cartContext)
    const navigate = useNavigate()
    return(
        <div>
            <Header/>

            <img onClick={()=> navigate('/')}
             src={home} className="z-11 fixed w-6.5 left-[50%] top-2 sm:left-[62%] md:hidden" />
            
            <div className="absolute w-[100vw] mt-25 pl-2 sm:pl-3 xl:w-[100vw] xl:pl-[6%]">
            {cart.length < 1 && <div className="text-center">No Item Added To cart</div>}
            {cart?.map(item=>
                <div key={item.id} 
                 className="w-[43%] h-[220px] inline-block ml-4 p-1 border border-gray-400 rounded-2xl mb-4 sm:ml-[5%] sm:mr-[3%]
                 sm:w-[40%]
                 md:w-[21%] md:ml-1.5 xl:w-[17%] xl:ml-0 xl:mr-[2%] xl:h-[230px]"
                >
                  <Link to={`/checkout/${item.id}`}>
                    <div className="absolute bg-red-400 text-white p-1 rounded-br-2xl">
                        ${item.price * item.quantity }
                    </div>

                    <img src={item.directory} alt={item.name}
                     className="w-[100%] h-[120px] mb-1 xl:h-[130px]"
                    />

                    <h1 className="inline">{item.name.length > 10 ?
                     item.name.slice(0,10)+'...' : item.name}
                    </h1>

                    <h3 className="inline float-right text-green-700">{item.rating}</h3>
                 </Link>

                    <div className="flex justify-between p-1">
                        <button onClick={()=> dispatch({type:'cart/decrement', payload:item.id})}
                            className="bg-red-100 w-[15%] font-bold text-xl">
                                -
                        </button>

                        <span>{item.quantity}</span>

                        <button onClick={()=> dispatch({type:'cart/increment', payload:item.id})}
                            className="bg-green-100 w-[15%] font-bold text-xl">
                                +
                        </button>
                    </div>

                    <button onClick={()=>dispatch({type:'cart/remove', payload:item.id})}
                     className="w-[100%] bg-black text-white font-bold p-1 rounded-xl text-[13px]">
                        remove from cart
                    </button>
                        
                </div>
            )}
            </div>
        </div>
    )
}