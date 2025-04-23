import { Link, useParams } from "react-router";
import back from '../assets/icons/Arrow left.svg'
import products from "../assets/database/Database";
import { useContext } from "react";
import { cartContext } from "../context/cartContext";


export default function DetailsPage() {
    const {id} = useParams()
    const {dispatch} = useContext(cartContext)

    return(
        <div className="p-2 md:p-3">
            <button onClick={()=> window.history.back()}
             className="fixed z-3 border border-black rounded-full w-7"
            >
                <img src={back} alt="" />
            </button>

            <div className="p-2 mt-6.5">
                {products.map(item => item.id === parseInt(id) &&
                    <div className="" key={item.id}>
                      <div className="flex justify-between xl:w-[50%]">
                        <div className="w-[25%] grid-cols-3 space-y-3.5">
                          <img src={item.directory} alt={item.name} className="rounded-2xl"/>
                          <img src={item.directory} alt={item.name} className="rounded-2xl"/>
                          <img src={item.directory} alt={item.name} className="rounded-2xl"/>
                        </div>
                        <img src={item.directory} alt={item.name}
                         className="w-[70%] rounded-2xl"
                        />
                      </div>

                     <div className="xl:w-[50%] xl:absolute xl:ml-[50%] xl:top-[30%]">
                      <h2 className="text-center text-2xl mt-3 font-bold">{item.name}</h2>
                      <p className="text-center">{item.describtion}</p>

                      
                      <Link to={`/checkout/${item.id}`} >
                        <button onClick={()=> dispatch({type:'cart/add', payload:item})}
                         className="w-[30%] p-1 rounded-xl ml-[35%] bg-green-500 text-white font-bold md:mt-2 md:ml-[35%]">
                            Buy
                        </button>
                      </Link>

                     </div>
                    </div>
                )}

            </div>
        </div>
    )
}