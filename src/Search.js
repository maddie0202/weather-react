import React from "react";
import './Search.css'

export default function Search(){
    return(
        <form class="float-left">
            <input type="text" placeholder="Enter a city" autocomplete="off" className="srch" />
            <input type="submit" class="btn btn-primary" value="Search" className="btn" />
        </form>
    );
}