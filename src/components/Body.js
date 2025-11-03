import { restaurantData } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

function filterData(searchText, restaurants) {
    const filteredData = restaurants.filter((restaurant) =>
        restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return filteredData;
}

const Body = () => {
    // searchText is a local state variable
    const [searchText, setSearchText] = useState("");
    const [allRestaurants, setAllRestaurants] = useState(restaurantData);
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
                        if(searchText===""){
                            setAllRestaurants(restaurantData);
                            return;
                        }else{
                        const data = filterData(searchText, allRestaurants);
                        setAllRestaurants(data)
                        }
                    }
                }
                >Search</button>
                {searchText}
            </div>
            <div className="restaurant-list" >
                {
                    allRestaurants.map(res => {
                        return <RestaurantCard {...res.info} key={res.info.id} />
                    })
                }
            </div>
        </>
    )
};

export default Body;