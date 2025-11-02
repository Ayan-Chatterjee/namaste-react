import React from "react";
import ReactDOM from "react-dom/client";
import data from "./data.json";
/*
        * Header
            -Logo
            -Nav Items(Right Side)
            -Cart
        * Body
            -Search Bar
            -Restaurant List
                -Restaurant Card ( many cards)
                    -Image
                    -Name
                    -Cuisines
                    -Ratings
        * Footer
            - links
            - Copyright
*/

const Title = () => (
    <a href="/">
    <img
    className="logo"
    alt="Logo"
    src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
    />
    </a>
);
// React component
const HeadingComponent = () => (
    <div className="header">
        <Title/>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>

    </div>
);
// const restaurantList = [{
//     name: "Kolkata 99",
//     image :"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/10/3/e66e2197-c84b-43d6-8b55-a5e89343d25c_e8d1cf08-7711-4f6c-bb38-bc0989dd8ac2.JPG",
//     cusines: ["Chicken Roll", "Biryani", "Kathi Roll"],
//     rating: "4.2 stars",
// }]

// console.log(data[0].info.avgRating);

const RestaurantCard = ({name,cuisines,cloudinaryImageId,avgRating}) => {
    // const {name,cuisines,cloudinaryImageId,avgRating} = restaurant.info;
    return(
    <div className="card">
        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}/>
        <h2>{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{avgRating}</h4>
    </div>
)};

const Body = () => {
    return(
    <div className="restaurant-list" >
        {
            data.map(res=>{
                return <RestaurantCard {...res.info} key={res.info.id}/>
            })
        }
    </div>
)};
const Footer = () => (
    <div className="footer">
        <h1> Footer</h1>
    </div>
);

const AppLayout = () => (
    <>
        <HeadingComponent/>
        <Body/>
        <Footer/>
    </>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);