import {IMG_CDN_URL} from "../constants";

const RestaurantCard = ({name,cuisines,cloudinaryImageId,avgRating}) => {
    return(
    <div className="w-[200px] p-5 m-5 shadow-lg bg-pink-50 hover:bg-pink-100 rounded-lg">
        <img src={IMG_CDN_URL+cloudinaryImageId}/>
        <h2 className="font-bold text-xl">{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{avgRating}</h4>
    </div>
)};
export default RestaurantCard;
