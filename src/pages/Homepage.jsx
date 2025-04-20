import FlashSales from "../layout/FlashSales"
import Header from "../layout/Header"

function HomePage() {
    return(
        <div>
            <Header/>
            <br />
            <div className="mt-18 p-2 lg:mt-10 xl:mt-15 xl:w-[80vw] xl:ml-[10%] xl:bg-amber-200">
             <img src="/src/assets/image/Frame 600.png" alt=""
                className="xl:w-[50%]"
             />
             <img src="/src/assets/image/Frame 684.png" alt="" className="hidden xl:block xl:h-[226px] 
             xl:absolute xl:w-auto xl:-mt-[17%] xl:right-40.5" />
            </div>
            
            <br />
            <FlashSales/>
        </div>
    )
}

export default HomePage