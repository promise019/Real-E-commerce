import { useContext, useEffect, useRef, useState } from "react"
import products from "../assets/database/Database"
import wishlistIcon from '../assets/icons/Heart.svg'
import { cartContext } from "../context/cartContext"
import { wishlistContext } from "../context/wishListContext"
import { Link } from "react-router"
import { searchContext } from "../context/SearchQueryContext"
import { productContext } from "../context/productsContext"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify'
import WishImg from "../ReusableComponent/wishListImg"

function FlashSales() {
    //all products
    const {storedProducts} = useContext(productContext)

    //search logic
    const {query, setQuery} = useContext(searchContext)
    const search = storedProducts.filter(item=> item.cartegory.toLowerCase().includes(query.toLowerCase()) || item.describtion.toLowerCase().includes(query.toLowerCase())
        || item.name.toLowerCase().includes(query.toLowerCase()))

    //pagination
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 11;

    //calculating index for slice function
    let lastItemIndex = currentPage * itemsPerPage
    let firstIndex = lastItemIndex - itemsPerPage

    let current = search.slice(firstIndex, lastItemIndex)

    let totalPage = Math.ceil(storedProducts.length /itemsPerPage)

    useEffect(()=>{
        setCurrentPage(1)
    },[query])

    //smooth scrolll
    const scrollRef = useRef(null)


    function Previous() {
        if (currentPage > 1 ) {
            setCurrentPage(prev=> prev - 1)
            scrollRef.current.scrollIntoView({behaviour: 'smooth'})
        } else {
            return
        }
    }

    function Next() {
        if (currentPage < totalPage) {
            setCurrentPage(next=> next + 1)
            scrollRef.current.scrollIntoView({behaviour: 'smooth'})
        }
    }

    //all cart logiv
    const {cart,dispatch} = useContext(cartContext)

    //all wishlist logic
    const {addWishlist, removeWishlist, wishList} = useContext(wishlistContext)

    //page number buttons logic
    let page = []
    for (let index = 0; index < totalPage; index++) {
        page.push(index)
    }
    
    
    return(
        <div  className="w-[100vw] pl-3 sm:pl-15 md:pl-3 lg:ml-[4%] xl:w-[80vw] xl:ml-[10%] ">

            {/* scroll to elememnt */}
            <div className="absolute top-0" ref={scrollRef}/>

            <ToastContainer/>

            <h1 className="absolute mb-[1%]">Flash Sales</h1>
            <br />

            <div className="overflow-x-scroll overflow-y-hidden ">
                {current.map(item=>
                    <div key={item.id}
                     className="w-[45%] h-[190px] inline-block p-1 border border-gray-400 rounded-2xl mb-4 ml-[1%] mr-[3%]
                     sm:w-[42%] md:w-[22%] md:ml-0 lg:w-[20%] xl:w-[18%] xl:ml-0 xl:mr-[2%] xl:h-[200px]">
                      
                        <div className="absolute bg-red-400 text-white p-1 rounded-br-2xl">
                            ${item.price}
                        </div>
                        
                        {/* wishlist icon and logic */}
                        <WishImg 
                         onClick={()=>{ const inwishList = wishList.some(i=> i.id === item.id);
                          inwishList ? (removeWishlist(item.id), toast.info('removed from wishlist')) 
                          : (addWishlist(item), toast.success('item added to wishlist'))}}
                         src={wishlistIcon} className={wishList.find(i=> i.id === item.id )} 
                        />
                        
                        {/* detail page link */}
                        <Link to={`/detailspage/${item.id}`}>
                            <img src={item.directory} alt={item.name} className="w-[100%] h-[120px] lg:w-[90%] lg:ml-[5%] mb-1 xl:h-[130px]"/>

                            <h1 className="inline">{item.name.length > 10 ? item.name.slice(0,10)+'...' : item.name}</h1>

                            <h3 className="inline float-right text-green-700">{item.rating}</h3>

                        </Link>
                    
                            {/* add to cart button */}
                        <button disabled={cart.find(i => item.id == i.id )} onClick={()=>{ let inCart = cart.some(i=> i.id === item.id)
                            inCart ? toast.info('item already added to cart') : (dispatch({type:'cart/add', payload:item}), toast.success('item added to cart'))  }}
                         className="w-[100%] bg-black text-white font-bold p-1 rounded-xl disabled:bg-red-300">
                            Add to cart
                        </button>
                        
                    </div>
                )}

                {/* out of stock */}
                {search.length < 1 && <h1>out of stock</h1>}


                <div className="grid grid-flow-col space-x-2 w-[70%] ml-[14%] mt-5 text-center md:w-[50%] md:ml-[25%] lg:ml-[26%] lg:w-[40%] xl:text-center">
                    {/* <p className="block">Page {currentPage} of {totalPage}</p> */}
                    
                    <button onClick={Previous} disabled={currentPage < 2} className="page-buttons">
                        Prev
                    </button>

                        {page.map(i=>
                            <button key={i.id} disabled={i+1 === currentPage} className="page-buttons" 
                             onClick={()=>{ setCurrentPage(i+1), scrollRef.current.scrollIntoView({behaviour: 'smooth'})}}>
                                {i+1}
                            </button>
                        )}

                    <button onClick={Next} disabled={currentPage === totalPage} className="page-buttons">
                        Next
                    </button>
                </div>
                
            </div>

        </div>
    )
}

export default FlashSales