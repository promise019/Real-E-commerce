import FlashSales from "../layout/FlashSales" 
import Header from "../layout/Header"
import JAMBBOX from '../assets/image/Frame 600.png'
import Frame from "../assets/image/Frame 684.png"
import Favourites from "../layout/Favourites"
import ContactAndAbout from "../layout/Contact_About_button"
import { useState } from "react"
import { useNavigate } from "react-router"
import SlideAnimation from "../layout/SlideAnimation"

function HomePage() {
    const [showOptions, setShowOptions] = useState(false)
    const navigate = useNavigate()

    return(
        <div className="bg-amber-500 lg:overflow-x-hidden pb-10">
            <Header/>
            <br />
            <SlideAnimation/>

            <br />
            
            <Favourites/>
            <br />
            <FlashSales/>
            <br />

        </div>
    )
}

export default HomePage