export default function WishImg({className, onClick, src, wish}) {
    return(
        <img src={src}  onClick={onClick}
         className={className? 'w-7 absolute bg-green-500  rounded-full p-1 ml-[32%] mt-1 md:ml-[15%] lg:ml-[15%] xl:ml-[10%]' : 'w-7 absolute bg-white  rounded-full p-1 ml-[32%] mt-1 md:ml-[15%] lg:ml-[15%] xl:ml-[10%]'}
        />
    )
}