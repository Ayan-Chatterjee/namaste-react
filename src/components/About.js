import { Outlet } from "react-router-dom";
import ProfileFunciton from "./Profile";
import Profile from "./ProfileClass";
import { Component } from "react";
// import UserContext from "../utils/UserContext";
import UserContext from "../utils/UserContext";

class About extends Component {
    constructor(props) {
        super(props);

        console.log("Parent - constructor");
    }
    componentDidMount() {
        // Best place to make an Api call

        console.log("Parent - componentDidMount");
    }
    render() {
        console.log("Parent - render");
        return (
            <div>
                <h1>About Us</h1>
                <UserContext.Consumer>
                    {({ user }) => (
                        <h4 className="font-bold text-xl p-10">
                            {user.name}- {user.email}
                        </h4>
                    )}
                </UserContext.Consumer>
                <p>This is Namaste React Live Course Chapter 07 - Finding the Path</p>
                {/* <ProfileFunciton name={"Ayan"} /> */}
                <Profile name={"Child 1"} xyz="abc" />
                <ProfileFunciton name={"Child 2"} xyz="abc" />
                {/* <Outlet/> */}
            </div>
        );
    }
}

export default About;

/**
 *
 * Parent Constructor
 * Parent render
 *    First Child constructor
 *    First Child render
 *    Second Child constructor
 *    Second Child render
 *
 *    DOM UPDATED for children
 *
 *    first Child componentDidMount
 *    Second Child componentDid
 *  Parent componentDidMount
 *
 *
 */
