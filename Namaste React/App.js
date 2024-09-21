

const parent = React.createElement
(
    "div",{id:"parent",},[React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"I am h1Tag"),
        React.createElement("h1",{},"I am h2Tag")]),
        React.createElement("div",{id:"child"},
            [React.createElement("h1",{},"I am h3Tag"),
            React.createElement("h1",{},"I am h4Tag")])]
)


const heading = React.createElement(
    "h1",
    {id:"heading"},
    "HelloWorld From React");
    console.log(heading);
const root =  ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)