import { useParams } from "react-router-dom";

import Shimmer from "./Shimmer";
import useRestaorant from "../utils/useRestaorant";

const RestaurantMenu = () => {
    const { id } = useParams();
    const restaurant = useRestaorant(id);
    if(restaurant.length===0){
        return <Shimmer/>;
    }
    return (
        <div>
            <h1>Restaurant Id: {id}</h1>
            <h2>Name:{restaurant.title}</h2>
            <h3>UsedId:{restaurant.userId}</h3>
        </div>
    );
};

export default RestaurantMenu;