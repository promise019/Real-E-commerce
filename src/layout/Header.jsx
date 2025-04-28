import NavigationBar from "./NavigationBar";
import search from '../assets/icons/Search.svg'
import { useContext } from "react";
import { searchContext } from "../context/SearchQueryContext";

function Header() {
    const {query, setQuery} = useContext(searchContext)

    return(
        <header className="z-6 bg-white p-2 fixed w-[100vw] -t-[100%] border-b-1 border-gray-500">
            <h1 className="font-bold text-xl lg:mt-3">Ideal Commerce</h1>
            <NavigationBar/>
            <input type="search" placeholder="what are you looking for?" value={query}
             onChange={(e)=> setQuery(e.target.value)}
             className="w-[100%] mt-4 pl-1 pt-1 pr-10 pb-1 border-[1px] border-200-amber rounded-xl
             md:w-[64%] lg:w-[26%] lg:absolute lg:top-1 lg:right-[30%] xl:pr-13 xl:w-[20%] xl:right-[34%]"
            />
            <button className="-ml-7">
            <img src={search} className="inline-block w-5 lg:absolute lg:top-6.5 lg:ml-[68%] xl:ml-[65%] "/>
            </button>
        </header>
    )
}

export default Header