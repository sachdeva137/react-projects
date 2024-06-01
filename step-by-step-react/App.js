import React from "react";
import ReactDOM from "react-dom";

//Below is react element object
const heading = React.createElement("h1", {id : "heading-1"}, "Hello React");
//Render react element such that it becomes html element

//JSx heading 
// Babel in background JSX => React.createElement
const jsxheading = <h2 id="heading-2">Hello React</h2>

//React Components
//Class based components - OLD
//Functional components - NEW


const Title = () => {
    return <h1>Title</h1>
}

//Below 2 are react elements
const childElem = (<span>Child Element</span>);

const titleReactElem = (<h1>
    {childElem}
    Title Elem
</h1>);


const number = 10000;
//React Functional Component - Function that returns jsx code
//With curly braces we can execute js inside jsx code
const HeadingComponent = () => {
    return <div> 
            {number}
            {titleReactElem}
            <h1>Functional Component</h1>
            <Title/>
        </div>
}




//heading and jsxheading are equivalant here
//ReactDom takes care of renering render object to html element
const root = ReactDOM.createRoot(document.getElementById("root"));
//heading is root element where as HeadingComponent is react component
root.render([heading, jsxheading, <HeadingComponent/>]);
