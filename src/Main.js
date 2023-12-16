import React from "react";
import './Main.css'

export default function Main(){
    return(
        <div className="Main">
            <h1>
                Paris
            </h1>
            <h2>
                10°C
            </h2>
            <div className="H3">
                <h3>
                    Saturday, 12:00
                    <br />
                    Clear
                </h3>
                <h3>
                    Precipitation: 66%
                    <br/>
                    Wind: 8km/h
                </h3>
            </div>
        </div>
    );
}