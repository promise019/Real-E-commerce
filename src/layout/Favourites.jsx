import { Link } from "react-router"
import products from "../assets/database/Database"

export default function Favourites() {

    const favourites = products.filter(item => item.rating > 4.1)

    return(
        <div className="bg-white rounded-lg w-[94vw] ml-3 p-2 flex overflow-x-auto space-x-2 md:w-[97vw] xl:w-[86vw] xl:ml-[7vw]">
            <h1 className="absolute">Favourites</h1>
            {favourites.map(item=> 
                <div key={item.id} className="flex-shrink-0 w-[160px] mt-9">
                    <Link to={`/detailspage/${item.id}`}>
                    <img src={item.directory} className="w-[160px] h-[160px] shadow shadow-gray-200 rounded-md" />
                    <h2>{item.name.length > 20 ? item.name.slice(0, 20) : item.name}</h2>
                    <h1 className="font-bold text-md">${item.price}</h1>
                    </Link>
                </div>
            )}
        </div>
    )
}