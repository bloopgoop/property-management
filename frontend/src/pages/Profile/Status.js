import React from "react";
import "./Status.css";
import StatusCard from "../../components/StatusCard/StatusCard";
import Card from "../../components/StatusCard/StatusCard"
import Couch from "../../assets/couch.jpg"

export default function Status(){
    return(
        <StatusCard />
        <div id="StatusContainer">
            <h1>Status</h1>
            <div id="searchsort">
                <input type="text" placeholder="Search.."/>
                <div id="sortitem">
                    <label for="sort">Sort by:</label> 
                        <select name="sort" id="sort"> 
                            <option value="A-Z">A-Z</option> 
                            <option value="approved">Approved</option> 
                            <option value="pending">Pending</option> 
                            <option value="denied">Denied</option> 
                        </select>
                </div>
            </div>
            < Card img={Couch} />
        </div>
    )
}
