import React from "react";
import "../App.css";
import Navigationbar from "../components/NavigationBar";

export const AboutUs = () => {
    return(
        <div>
            <Navigationbar />
            <div className="App">
                <p>
                    <h2>This is a Teaching based application</h2>
                </p>
            </div>
        </div>
    );
}