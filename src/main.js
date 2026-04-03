import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
function App(){
    return(
        <>
        <div id="mainContainer">
            <div id="mainGrid">
                <Sidebar></Sidebar>
                <Header></Header>
            </div>
            {/* <Content></Content>   */}
        </div>
        </>
    )
}
const reactRoot=ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(<App/>);