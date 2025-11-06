import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../constants";

const RestaurantMenu = () => {
    const { id } = useParams();
    const [restaurant, setRestaurant] = useState({});
    useEffect(() => {
        // console.log("useEffect - RestaurantMenu");
        getResInfo();
    }, []);
    const idMod = id % 10;
    async function getResInfo(params) {
        try {
            // console.log("Modified Id:", idMod);
            const data = await fetch("https://jsonplaceholder.typicode.com/todos/"+idMod);
            const json = await data.json();
            // console.log("Fetching Menu Info", json);
            setRestaurant(json);
        } catch (error) {
            console.log("Error while fetching restaurant menu info:", error);
        }
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