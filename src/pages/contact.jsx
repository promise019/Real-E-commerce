import Header from "../layout/Header";
import fb from '../assets/image/fb.png'
import discord from '../assets/image/discord.png'
import whatsapp from '../assets/image/whatsapp.png'
import twitter from '../assets/image/x.png'

export default function ContactPage(){
    return (
        <>
            <Header/>
            <div className="p-2 mt-[25%] absolute md:mt-[10%] md:p-10 lg:mt-[6%]">
             <h1 className="text-2xl font-bold">Contact Us</h1>
                We're here to help!
                <br />
                    
                <p>
                    Whether you have a question about your order, need assistance with a product, or just want to say hello—we’d love to hear from you.
                    At ideal commerce, customer satisfaction is at the heart of everything we do, and we’re committed to making your experience as smooth and enjoyable as possible.
                </p>  

                <br />

                <h2 className="font-bold text-lg">Reach Us Anytime:</h2>
                <ul>
                    <li>📧 Email: edetpromise019.gmail.com</li>
                    <li>📞 Phone: +234 8052096286</li>
                    <li>📍 Address: 23 Amazon street</li>
                </ul>

                <br />

                <h2 className="font-bold text-lg">Customer Support Hours:</h2>
                Monday – Friday: 9:00 AM – 6:00 PM <br />
                Saturday & Sunday: Closed (but we’ll get back to you as soon as possible!)
                    
                <br />
                <br />
                    
                <h2 className="font-bold text-lg">Stay Connected:</h2>
                Follow us on social media for updates, offers, and more:
                <br />
                <img src={fb} alt="" className="w-7 inline-block" /> Facebook |
                <img src={discord} alt="" className="w-7 inline-block" /> Discord |
                <img src={twitter} alt="" className="w-7 inline-block" /> Twitter |
                <img src={whatsapp} alt="" className="w-7 inline-block"/> whatsapp

                <br />
                <br />
                    
                We’re always happy to assist you.
                    
                – <i><b>The ideal commerce Team</b></i>
            </div>
        </>
    )
}