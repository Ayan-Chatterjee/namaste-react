import { API_URL } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, use } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/Helper";
import useOnline from "../utils/useOnline";

// function filterData(searchText, restaurants) {
//     const filteredData = restaurants.filter((restaurant) =>
//         restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
//     );
//     return filteredData;
// }

const Body = () => {
    // searchText is a local state variable
    const [searchText, setSearchText] = useState("");
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    useEffect(() => {
        // console.log("useEffect called");
        getRestaurants();
    }, [])
    async function getRestaurants(params) {
        const data = await fetch(API_URL);
        const json = await data.json();
        // console.log("Fetched Data:", json);
        const restaurantData = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        // console.log(restaurantData);
        setAllRestaurants(restaurantData);
        setFilteredRestaurants(restaurantData);
    }
    // console.log("Body Rendered");

    // conditional rendering
    // if restaurants is empty => shimmer UI
    // if restaurants has data => actual data UI
    // console.log("All Restaurants:", allRestaurants);
    const online = useOnline();
    if(!online){
        return <h1>🔴 Offline, please check your internet connection!!</h1>
    }

    if (!allRestaurants) return null;

    if (allRestaurants?.length === 0) {
        return <Shimmer />;
    }

    return (
        <>
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search for restaurants..."
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                />
                <button
                    className="search-btn"
                    onClick={(e) => {
                        // filter the data
                        // console.log("button clicked", searchText);
                        if (searchText === "") {
                            setFilteredRestaurants(allRestaurants);
                            return;
                        } else {
                            const data = filterData(searchText, allRestaurants);
                            setFilteredRestaurants(data)
                        }
                    }
                    }
                >Search</button>
            </div>
            <div className="restaurant-list" >
                {
                    filteredRestaurants.map(res => {
                        if (res.length === 0) return <h1>No restaurant match your filter "{searchText}"</h1>;
                        return <Link to={"/restaurant/" + res.info.id} key={res.info.id} >
                            <RestaurantCard {...res.info} key={res.info.id} />
                        </Link>
                    })
                }
            </div>
        </>
    )
};

export default Body;