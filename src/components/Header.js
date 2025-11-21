import { useState, useEffect } from "react";
import { LOGO_IMG_URL } from "../constants";
import Logo from "../assets/img/foodvilla.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
const loggedInUser = () => {
    return true;
}


// SPA - Single Page Application


const Title = () => (
    <a href="/">
        <img
            className="logo"
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
    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/about">
                        <li>About</li>
                    </Link>
                    <Link to="/contact">
                        <li>Contact</li>
                    </Link>
                    <Link to="/contact">
                        <li>Contact</li>
                    </Link>
                    <Link to="/instamart">
                        <li>Instamart</li>
                    </Link>
                    <li>Cart</li>
                </ul>
            </div>
            <h1>{isOnline?"🟢":"🔴"}</h1>
            {
                isLoggedIn ?
                    <button className="logout-btn" onClick={() => setIsLoggedIn(false)}>Logout</button> :
                    <button className="login-btn" onClick={() => setIsLoggedIn(true)}>Login</button>

            }

        </div>
    )
};
export default Header;