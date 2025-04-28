import { useContext } from "react";
import { cartContext } from "../context/cartContext";
import { wishlistContext } from "../context/wishListContext";
import wishlistIcon from '../assets/icons/Heart.svg'
import back from '../assets/icons/Arrow left.svg'
import { Link } from "react-router";
import { productContext } from "../context/productsContext";

export default function WishListPage() {
    const {wishList, addWishlist, removeWishlist} = useContext(wishlistContext)
    const {dispatch, cart} = useContext(cartContext)

    return(
        <div className="p-2 mt-12 md:ml-4 lg:ml-[5%]">
            <button onClick={()=> window.history.back()}
             className="fixed top-3 left-3 z-3 border border-black rounded-full w-7"
            >
                <img src={back} alt="" />
            </button>
            {wishList.length < 1 && <div className="text-center">No Item Added To WishList</div>}
            {wishList.map(item=>
                    <div key={item.id} 
                     className="w-[45%] h-[188px] inline-block p-1 border border-gray-400 rounded-2xl mb-3 ml-[3%] mr-[1%]
                     sm:w-[42%] sm:h-[200px] md:w-[22%] md:h-[187px] md:ml-1 lg:w-[21%] lg:ml-3 xl:w-[18%] xl:ml-0 xl:mr-[2%] xl:h-[200px]"
                    >
                    
                    
                        <div className="absolute bg-red-400 text-white p-1 rounded-br-2xl">
                            ${item.price}
                        </div>
                        
                        <img onClick={()=>{ addWishlist(item)
                          wishList.findIndex(i=> i.id === item.id ? removeWishlist(item.id) : null)
                        }}
                         src={wishlistIcon} alt=""
                         className={"w-7 absolute bg-green-300 rounded-full p-1 ml-[32%] mt-1 md:ml-[15%] lg:ml-[17%] xl:ml-[13%]"}
                        />
                    <Link to={`/detailspage/${item.id}`}>
                        <img src={item.directory} alt={item.name}
                         className="w-[100%] h-[120px] mb-1 xl:h-[130px]"
                        />

                        <h1 className="inline">{item.name.length > 10 ?
                         item.name.slice(0,10)+'...' : item.name}
                        </h1>

                        <h3 className="inline float-right text-green-700">{item.rating}</h3>
                    
                    </Link>

                        <button onClick={()=>dispatch({type:'cart/add', payload:{...item, isAdded:true}})}
                         disabled={cart.find(i=> i.id === item.id)}
                         className="w-[100%] bg-black text-white font-bold p-1 rounded-xl disabled:bg-red-300">
                            Add to cart
                        </button>
                        
                    </div>
                )}
        </div>
    )
}