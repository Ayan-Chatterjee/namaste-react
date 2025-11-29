import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
// import About from "./components/About";
import Error from "./components/Error";
import Contract from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Profile from "./components/ProfileClass";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/Store";
import Cart from "./components/Cart";
// import Instamart from "./components/Instamart";

const Instamart = lazy(() => import("./components/Instamart"));
const About = lazy(() => import("./components/About"));

const AppLayout = () => {
    const [user, setUser] = useState({
        name: "Ayan Chatterjee",
        email: "support@namastedev.com",
    });
    return (
        <Provider store={store}>
            <UserContext.Provider
                value={{
                    user: user,
                    setUser: setUser,
                }}
            >
                <Header />
                <Outlet />
                <Footer />
            </UserContext.Provider>
        </Provider>
    )
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element:
                    <Suspense>
                        <About />
                    </Suspense>,
                children: [
                    {
                        path: "profile",
                        element: <Profile />
                    },
                ]
            },
            {
                path: "/contact",
                element: <Contract />
            },
            {
                path: "/restaurant/:id",
                element: <RestaurantMenu />
            },
            {
                path: "/instamart",
                element:
                    <Suspense fallback={<Shimmer />}>
                        <Instamart />
                    </Suspense>
            },
            {
                path: "/cart",
                element: <Cart />,
            },
        ]
    },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);