import { useState, useEffect, useContext } from "react";
import { LOGO_IMG_URL } from "../constants";
import Logo from "../assets/img/foodvilla.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
const loggedInUser = () => {
    return true;
}


// SPA - Single Page Application


const Title = () => (
    <a href="/">
        <img
            className="w-24"
            alt="Logo"
            src={LOGO_IMG_URL}
        />
    </a>
);


const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const isOnline = useOnline();
    // useEffect(()=>{
    //         console.log("Header useEffect called");
    //     },[])
    // console.log("Header Rendered");
    const {user} = useContext(UserContext);
    return (
        <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-yellow-50 md:bg-green-50 lg:bg-blue-50">
            <Title />
            <div className="nav-items">
                <ul className="flex py-10">
                    <Link to="/">
                        <li className="px-10">Home</li>
                    </Link>
                    <Link to="/about">
                        <li className="px-10">About</li>
                    </Link>
                    <Link to="/contact">
                        <li className="px-10"> Contact</li>
                    </Link>
                    <Link to="/contact">
                        <li className="px-10">Contact</li>
                    </Link>
                    <Link to="/instamart">
                        <li className="px-10">Instamart</li>
                    </Link>
                    <li>Cart</li>
                </ul>
            </div>
            <h1>{isOnline?"🟢":"🔴"}</h1>
            <span className="p-10 font-bold text-red-900">{user.name}</span>
            {
                isLoggedIn ?
                    <button className="logout-btn" onClick={() => setIsLoggedIn(false)}>Logout</button> :
                    <button className="login-btn" onClick={() => setIsLoggedIn(true)}>Login</button>

            }

        </div>
    )
};
export default Header;