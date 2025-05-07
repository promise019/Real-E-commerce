import { useContext, useEffect, useRef, useState } from "react"
import products from "../assets/database/Database"
import wishlistIcon from '../assets/icons/Heart.svg'
import { cartContext } from "../context/cartContext"
import { wishlistContext } from "../context/wishListContext"
import { Link } from "react-router"
import { searchContext } from "../context/SearchQueryContext"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify'
import WishImg from "../ReusableComponent/wishListImg"

function FlashSales() {

    //search logic
    const {query, setQuery} = useContext(searchContext)
    const search = products.filter(item=> item.cartegory.toLowerCase().includes(query.toLowerCase()) || item.describtion.toLowerCase().includes(query.toLowerCase())
        || item.name.toLowerCase().includes(query.toLowerCase()))

    //pagination
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 11;

    //calculating index for slice function
    let lastItemIndex = currentPage * itemsPerPage
    let firstIndex = lastItemIndex - itemsPerPage

    let current = search.slice(firstIndex, lastItemIndex)

    let totalPage = Math.ceil(products.length /itemsPerPage)

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


    //all wishlist logic
    const {addWishlist, removeWishlist, wishList} = useContext(wishlistContext)

    //page number buttons logic
    let page = []
    for (let index = 0; index < totalPage; index++) {
        page.push(index)
    }
    
    
    return(
        <div  className="bg-white rounded-lg w-[96%] ml-[2%] pl-1.5 py-2 md:pl-2.5 space-x-2 space-y-4 md:w-[96vw] lg:space-x-3.5 xl:w-[86vw] xl:ml-[7vw]">

            {/* scroll to elememnt */}
            <div className="absolute top-0" ref={scrollRef}/>

            <ToastContainer/>

            {current.map(item=>
                <div key={item.id} className="w-[47.5%] inline-grid shadow shadow-gray-300 p-2 md:w-[23.5%] lg:w-[180px]">
                    <WishImg src={wishlistIcon}
                        onClick={()=>{
                            addWishlist(item)
                            wishList.find(i=> i.id === item.id) ? removeWishlist(item.id) : addWishlist(item)
                        }}
                        className={wishList.find(i=> i.id === item.id)}
                    />
                    <Link to={`/detailspage/${item.id}`}>
                    <img src={item.directory} className="w-[100%] h-[168px] rounded-lg md:w-[100%] md:h-[169px]" />
                    <h1>{item.name.length > 20 ? item.name.slice(0, 20) : item.name}</h1>
                    <h2 className="font-bold">$ {item.price}</h2>
                    </Link>
                </div>
            )}

            <div className="absolute w-[70%] mt-6 ml-[13%] flex justify-between md:w-[40%] md:ml-[28%] lg:w-[30%] lg:ml-[33%] xl:ml-[29%]">
                <button onClick={()=> {setCurrentPage(currentPage - 1), scrollRef.current.scrollIntoView({behaviour: 'smooth'})}}
                 disabled={currentPage===1}
                 className="bg-white text-black p-1 font-bold disabled:text-amber-400"
                >
                    Prev
                </button>

                {page.map(index=>
                    <button onClick={()=> {setCurrentPage(index + 1), scrollRef.current.scrollIntoView({behaviour: 'smooth'})}}
                     disabled={index+1 === currentPage}
                     className="bg-white w-[30px] text-black p-1 disabled:text-amber-400"
                    >
                        {index + 1}
                    </button>
                )}

                <button onClick={()=> {setCurrentPage(currentPage + 1), scrollRef.current.scrollIntoView({behaviour: 'smooth'}), scrollRef.current.scrollIntoView({behaviour: 'smooth'})}}
                 disabled={currentPage===totalPage}
                 className="bg-white text-black p-1 font-bold disabled:text-amber-400"
                >
                    Next
                </button>
            </div>
           

            
        </div>
    )
}

export default FlashSales