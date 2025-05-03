export default function WishImg({className, onClick, src}) {
    return(
        <img src={src}  onClick={onClick} 
         className={className? 'wishAdded' : 'wish-not-added'}
        />
    )
}