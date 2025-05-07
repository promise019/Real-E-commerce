import { useEffect, useState } from "react"
import xbox from '../assets/add-animation/xbox.png'
import xboxStation from '../assets/add-animation/full.png'
import laptop from '../assets/add-animation/laptop.jpg'

let ads = [
    {dir:laptop, description: 'better jbl, better sound, blast off the heat with this steak'},
    // {dir:controller, description:'black xbox controller, your win is our pride'},
    {dir:xbox, description:'pink xbox controller pack, your win is our pride'},
    {dir:xboxStation, description:'white xbox station, your win is our pride'}
]

export default function SlideAnimation() {
    const [slideIndex, setSlideIndex] = useState(0)

    useEffect(()=>{
        const slideInterval = setInterval(()=>{
            setSlideIndex(slide => slide < 2 ? slide + 1 : 0)
        },3000)

        return ()=>{
            clearInterval(slideInterval)
        }
    },[])

    return (
        <div className="bg-linear-90 from-black to-gray-800 w-[100vw] h-[200px] mt-25 flex space-x-2 p-2 justify-between md:px-20 md:mt-15
         lg:w-[90%] lg:ml-[5%] xl:w-[80%] xl:ml-[10%]
        ">
           {
            <>
            <img src={ads[slideIndex].dir} className="w-[100px] slide-animate rounded-full" />
            <h1 className="text-white text-center mt-13">{ads[slideIndex].description}</h1>
            </>
           }
        </div>
    )
}