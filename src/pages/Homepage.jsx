import FlashSales from "../layout/FlashSales" 
import Header from "../layout/Header"
import JAMBBOX from '../assets/image/Frame 600.png'
import Frame from "../assets/image/Frame 684.png"
import Favourites from "../layout/Favourites"

function HomePage() {
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
        </div>
    )
}

export default HomePage