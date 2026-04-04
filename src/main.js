import React from "react";
import ReactDOM from "react-dom/client";
import Sidebar from "./components/Sidebar";
import Parent from "./components/Parent";
function App(){
    return(
        <>
        <div id="mainContainer">
            <div id="mainGrid">
                <Sidebar></Sidebar>
                <Parent></Parent>
            </div>
              
            
        </div>
        </>
    )
}
const reactRoot=ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(<App/>);