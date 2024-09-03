import React from "react";
import data from '../data/data.json';
import {Link} from "react-router-dom";
import banniere from "../assets/banniere.svg"
import banniere2 from "../assets/petit-section1.svg"


function Data(){

    return(
        <div className={"container2"}>
            <img src={banniere} alt={banniere} className={"banniere"}/>
            <img src={banniere2} alt={banniere2} className={"banniere2"}/>
            <div className={"grid"}>
                {data.map((item)=>(
                    <div key={item.id} className={"card"}>
                        <Link to={`/photo/${item.id}`}>
                            <img src={item.cover} alt={item.title}/>
                        </Link>
                        <div className={"card-content"}>
                            <div className={"card-title"}>{item.title}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Data
