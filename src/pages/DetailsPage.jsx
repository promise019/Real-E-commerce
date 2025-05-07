import { Link, useNavigate, useParams } from "react-router";
import back from '../assets/icons/Arrow left.svg'
import products from "../assets/database/Database";
import { useContext } from "react";
import { cartContext } from "../context/cartContext";
import WishImg from "../assets/icons/Heart.svg";
import { wishlistContext } from "../context/wishListContext";
import { NavigationTrackContext } from "../context/NavigationTrackContecxt";
import { toast, ToastContainer } from "react-toastify";


export default function DetailsPage() {
    const {id} = useParams()
    const navigate = useNavigate()
    const {dispatch, cart} = useContext(cartContext)
    const {wishList, addWishlist, removeWishlist} = useContext(wishlistContext)
    const {previousPage, setPreviousPage} = useContext(NavigationTrackContext)

    return(
        <div className="p-2 md:p-3 overflow-x-hidden bg-gray-200 xl:h-[100vh]">
            <button onClick={()=> navigate('/')} className="fixed z-3 border border-black rounded-full w-7">
                <img src={back}/>
            </button>

          <ToastContainer/>

            {products.map(item => item.id === parseInt(id) &&
                <div key={item.id} className="bg-white p-2 md:p-3 md:flex md:justify-between md:space-x-3 lg:w-[90%] lg:p-2 lg:ml-[5%] xl:flex space-x-3 xl:w-[80%] xl:ml-[10%] xl:p-3">

                 <img src={WishImg} className={!wishList.find(i=> i.id === parseInt(id)) ? " absolute bg-white p-1 right-2 rounded-full w-8 lg:right-15 xl:w-7 xl:right-40 " : " absolute bg-green-500 p-1 right-2 rounded-full w-8 lg:right-15 xl:w-7 xl:right-40 " }
                  onClick={()=>wishList.find(i=> i.id === item.id) ? removeWishlist(item.id) : addWishlist(item)}
                 />

                  <div className="md:w-[50%] xl:w-[50%] xl:h-[20%] xl:flex xl:space-x-2">
                    <div className="hidden xl:block xl:space-y-2 xl:w-[40%] xl:p-1 ">
                      <img src={item.directory} className="xl:w-[100%] xl:h-[160px] xl:rounded-3xl inline-block" />
                      <img src={item.directory} className="xl:w-[100%] xl:h-[160px] xl:rounded-3xl inline-block" />
                      <img src={item.directory} className="xl:w-[100%] xl:h-[160px] xl:rounded-3xl inline-block" />
                    </div>
                    <img src={item.directory} alt={item.name} className="w-[550px] h-[400px] ml-[2%] md:w-[90%] md:rounded-3xl lg:h-[450px] xl:w-[50%] xl:h-[400px] xl:ml-0 xl:h-auto" />
                  </div>

                  <div className="md:w-[50%] xl:w-[50%]">
                    <h1 className="font-bold xl:text-2xl">{item.name}</h1>
                    <br />

                    <h1 className="font-semibold xl:text-2xl">${item.price}.00</h1>

                    <span>Rating: {item.rating}</span>
                    <br />
                    <br />

                    <p>{item.describtion}</p>
                    <br />

                    {!cart.find(i=> i.id === item.id) ? <button onClick={()=> {dispatch({type:'cart/add', payload:item})
                     toast.success('item added to cart')}} className="bg-orange-300 p-2 text-white font-bold w-[100%] rounded-lg xl:mb-3 ">
                      Add to cart
                    </button> :

                    <div className="flex justify-between w-[160px] ml-[29%] sm:ml-0 xl:w-[200px] xl:p-2 ">
                      <button onClick={()=> dispatch({type:'cart/decrement', payload:item.id})}
                       className="detailsPage-quantity-button"
                        >
                          -
                      </button>

                      {cart.map(i=> i.id === item.id && <div key={id} className="w-[60%] p-1 text-center"
                        >
                        {i.quantity}
                        </div>
                      )}

                      <button onClick={()=> dispatch({type:'cart/increment', payload:item.id})}
                        className="detailsPage-quantity-button"
                        >
                          +
                      </button>

                    </div>
                    }

                  <div className="block border-t mt-2 xl:mt-0">

                    <h1 className="font-bold">Product details:</h1>
                    
                    <ul>
                      {item.product_details.map((list, index)=>
                        <li key={index + 1}>{list}</li>
                      )}
                    </ul>

                  </div>

                  <br />
                  
                  <hr />

                    <button onClick={()=> {dispatch({type:'cart/add', payload:item})
                     localStorage.getItem('E-commerce Login') ? navigate('/checkout') : (setPreviousPage(`/detailspage/${item.id}`), navigate('/signin'))
                    }}
                     className="bg-green-400 p-2 text-white font-bold rounded-xl w-[100%] mt-2 xl:mt-3">
                      Buy
                    </button>

                  </div>
                  
                </div>
            )}
        </div>
    )
}