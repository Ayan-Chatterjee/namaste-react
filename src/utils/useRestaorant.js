import { useEffect, useState } from "react";
import { TO_DO } from "../constants";

const useRestaorant = (id) => {
    //logic to fetch data from api
    const [restaurant, setRestaurant] = useState([]);
    useEffect(() => {
        // console.log("useEffect - RestaurantMenu");
        getResInfo();
    }, []);
    const idMod = id % 10;
    // console.log("Modified Id:", idMod);
    async function getResInfo(params) {
        try {
            // console.log("Modified Id:", idMod);
            const data = await fetch(TO_DO+idMod);
            const json = await data.json();
            // console.log("Fetching Menu Info", json);
            setRestaurant(json);
        } catch (error) {
            console.log("Error while fetching restaurant menu info:", error);
        }
    }
    return restaurant;
};

export default useRestaorant;