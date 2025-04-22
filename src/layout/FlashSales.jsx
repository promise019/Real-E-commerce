import { useContext } from "react"
import products from "../assets/database/Database"
import wishlistIcon from '../assets/icons/Heart.svg'
import { cartContext } from "../context/cartContext"
import { wishlistContext } from "../context/wishListContext"
import { Link } from "react-router"
import { searchContext } from "../context/SearchQueryContext"

function FlashSales() {
    const {dispatch} = useContext(cartContext)
    const {addWishlist, removeWishlist, wishList} = useContext(wishlistContext)
    const {query, setQuery} = useContext(searchContext)
    const search = products.filter(item=> item.cartegory.toLowerCase().includes(query.toLowerCase()) || item.describtion.toLowerCase().includes(query.toLowerCase())
        || item.name.toLowerCase().includes(query.toLowerCase()))
    
    return(
        <div className="w-[100vw] pl-3 sm:pl-15 md:pl-3 xl:w-[80vw] xl:ml-[10%] ">
            <h1 className="absolute mb-[1%]">Flash Sales</h1>
            <br />
            <div className="overflow-x-scroll overflow-y-hidden ">
                {search.map(item=>
                    <div key={item.id} 
                     className="w-[45%] h-[190px] inline-block p-1 border border-gray-400 rounded-2xl mb-4 ml-[1%] mr-[3%]
                     sm:w-[42%] md:w-[22%] md:ml-0 xl:w-[18%] xl:ml-0 xl:mr-[2%] xl:h-[200px]"
                    >
                      
                        <div className="absolute bg-red-400 text-white p-1 rounded-br-2xl">
                            ${item.price}
                        </div>
                        
                        <img onClick={()=>{ addWishlist(item)
                          wishList.findIndex(i=> i.id === item.id ? removeWishlist(item.id) : null)
                        }}
                         src={wishlistIcon} alt=""
                         className={"w-7 absolute bg-white rounded-full p-1 ml-[32%] mt-1 md:ml-[15%] lg:ml-[17%] xl:ml-[10%]"}
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
                         className="w-[100%] bg-black text-white font-bold p-1 rounded-xl">
                            Add to cart
                        </button>
                        
                    </div>
                )}
                {search.length < 1 && <h1>out of stock</h1>}
            </div>
        </div>
    )
}

export default FlashSales