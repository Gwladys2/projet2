import React from "react";
import data from '../data/data.json'

function Data(){

    return(
        <div>
            <h1>Nos logements</h1>
            <ul>
                {data.map((logement, index)=>(
                    <li key={index}>
                        {logement.title} - {logement.description}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Data
