import { useState } from "react"
import menu from '../assets/icons/Options.svg'
import close from '../assets/icons/Close.svg'

export default function ContactAndAbout({onclick, showOptions}) {
    return (
        <button onClick={onclick}>
            <img src={showOptions ? close : menu} className="fixed p-2 rounded-full bg-gray-200 shadow-amber-50 w-8 right-2 bottom-7 md:hidden" />
        </button>
    )
}