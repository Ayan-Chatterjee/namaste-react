import React from "react";
import ReactDOM from "react-dom/client";

// React Element: This is an object 
const heading = (
    <h1 id="titile" key="h1" className="root">
        Namaste React
    </h1>
);
const title = () => (
    <h2 id="titile" key="t1" className="root1">
        Namaste React Title
    </h2> 
);

const Title = () => (
    <h2 id="titile" key="t2" className="root1">
        Namaste React Title 2
    </h2> 
);
var x = 10
// React component
const HeadingComponent = () => (
    <div>
        {heading}
        {/* <Titile/> */}
        {title()}
        <Title/>
        {
            console.log(x+10)
        }
        <h2 id="titile" key="h2" className="root">
            Namaste React Functional Component
        </h2>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
