import FlashSales from "../layout/FlashSales" 
import Header from "../layout/Header"
import JAMBBOX from '../assets/image/Frame 600.png'
import Frame from "../assets/image/Frame 684.png"
import Favourites from "../layout/Favourites"
import ContactAndAbout from "../layout/Contact_About_button"
import { useState } from "react"
import { useNavigate } from "react-router"

function HomePage() {
    const [showOptions, setShowOptions] = useState(false)
    const navigate = useNavigate()

    return(
        <div className="lg:overflow-x-hidden">
            <Header/>
            <br />
            <div className="mt-18 p-2 lg:mt-10 xl:mt-15 xl:w-[80vw] xl:ml-[10%] xl:bg-amber-200">
             <img src={JAMBBOX} alt="" className="xl:w-[50%]"/>

             <img src={Frame} alt=""
              className="hidden xl:block xl:h-[226px] xl:absolute xl:w-auto xl:-mt-[17%] xl:right-40.5" 
             />
            </div>

            <br />
            
            <Favourites/>
            <br />
            <FlashSales/>
            <br />

            <section className={showOptions ? 'w-[20%] p-3 block fixed bg-gray-200 rounded-md shadow-amber-50 right-5 bottom-19 md:hidden' : 'hidden'}>
                <h1 className="font-bold" onClick={()=> navigate('/contact')}>Contact</h1>
                <h1 className="font-bold" onClick={()=> navigate('/about')}>About</h1>
            </section>

            <ContactAndAbout onclick={()=> setShowOptions(!showOptions)} showOptions={showOptions}/>
        </div>
    )
}

export default HomePage