import { useContext } from "react"
import { cartContext } from "../context/cartContext"
import { useParams } from "react-router";
import back from '../assets/icons/Arrow back.svg'

export default function CheckOutPage() {
    const {cart, dispatch} = useContext(cartContext);
    const {id} = useParams()
    return(
        <div className="p-2 md:p-3">
            <button onClick={()=> window.history.back()}
             className="fixed z-3 border border-black rounded-full w-7"
            >
                <img src={back} alt="" />
            </button>

            <div className="p-2 mt-6.5">
                {cart.map(item => item.id === parseInt(id) &&
                    <div className="">
                      <div className="flex justify-between xl:w-[50%]">
                        <div className="w-[25%] grid-cols-3 space-y-3.5">
                          <img src={item.directory} alt={item.name} className="rounded-2xl"/>
                          <img src={item.directory} alt={item.name} className="rounded-2xl" />
                          <img src={item.directory} alt={item.name} className="rounded-2xl" />
                        </div>
                        <img src={item.directory} alt={item.name}
                         className="w-[70%] rounded-2xl"
                        />
                      </div>

                     <div className="xl:w-[50%] xl:absolute xl:ml-[50%] xl:top-[30%]">
                      <h2 className="text-center text-2xl mt-3 font-bold">{item.name}</h2>
                      <p className="text-center">{item.describtion}</p>

                      <br />

                      <select name="bank" className="border ml-[3%] rounded-l-xl  bg-blue-800 text-white p-1 md:ml-[25%]">
                        <option value="">Bank</option>
                        <option value="PayPal">PayPal</option>
                        <option value="Stripe">Stripe</option>
                        <option value="Opay">Opay</option>
                      </select>

                      <input type="number" placeholder="input your credit card No."
                       className="border rounded-r-xl text-center w-[70%] md:w-[40%]" 
                      />

                       <br />

                      <button className="w-[30%] border p-1 rounded-xl ml-[35%] bg-green-500 text-white font-bold md:mt-2 md:ml-[41%] md:w-[20%]">
                        Order
                      </button>
        

                     </div>
                    </div>
                )}

            </div>
        </div>
    )
}