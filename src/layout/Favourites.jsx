import { useContext } from "react"
import { productContext } from "../context/productsContext"
import { Link } from "react-router"

export default function Favourites() {

    const {storedProducts} = useContext(productContext)
    const favourites = storedProducts.filter(item => item.rating > 4.1)

    return(
        <div className="w-[100vw] pl-3 sm:pl-15 md:pl-3 xl:w-[80vw] xl:ml-[10%] ">
            
            <h1 className="absolute mb-[1%]">Favourites</h1>
            <br />

            <div className="flex flex-row space-x-4 overflow-x-scroll overflow-y-hidden">
                {favourites.map(item=>
                    <div key={item.id}
                     className="flex-shrink-0 w-[150px] h-[188px] p-1 border border-gray-400 rounded-2xl mb-4 ml-[1%] mr-[3%]
                     sm:w-[200px] md:w-[180px] md:h-[185px] md:ml-0 xl:w-[200px] xl:ml-0 xl:mr-[2%] xl:h-[200px]" >
                      
                        <div className="relative w-[fit-content] bg-red-400 text-white p-1 rounded-br-2xl">
                            ${item.price}
                        </div>
                        
                        <Link to={`/detailspage/${item.id}`}>
                            <img src={item.directory} alt={item.name} className="w-[100%] h-[120px] mb-1 xl:h-[130px]"/>
                            <h1 className="inline">{item.name.length > 10 ? item.name.slice(0,10)+'...' : item.name}</h1>
                            <h3 className="inline float-right text-green-700">{item.rating}</h3>
                        </Link>
                      
                    </div>
                )}
                
            </div>

        </div>
    )
}