import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
function App(){
    return(
        <>
        <div className="container">
            {/* <Sidebar></Sidebar> */}
            <Header></Header>
            {/* <Content></Content>   */}
        </div>
        </>
    )
}
const reactRoot=ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(<App/>);