import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaorant from "../utils/useRestaorant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantMenu = () => {
    const menu = ['Menu1', 'Menu2', 'Menu3', 'Menu4', 'Menu5'];
    const { id } = useParams();
    const restaurant = useRestaorant(id);
    const dispatch = useDispatch();
    const addFoodItem = (id) => {
        // console.log("Item Added", id);
        dispatch(addItem(id));
    }
    if (restaurant.length === 0) {
        return <Shimmer />;
    }
    return (
        <div>
            <h1>Restaurant Id: {id}</h1>
            <h2>Name:{restaurant.title}</h2>
            <h3>UsedId:{restaurant.userId}</h3>
            {menu.map((item, index) => (
                <div key={index} className="flex p-2 m-2">
                    <li>{id + " - "+ item}</li>
                    <button
                        data-testid="addBtn"
                        className=" bg-green-50 border-2"
                        onClick={() => addFoodItem(id)}
                    >
                        Add
                    </button>
                </div>
            ))}

        </div>
    );
};

export default RestaurantMenu;