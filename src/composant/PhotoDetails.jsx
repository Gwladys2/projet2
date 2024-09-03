import React from "react";
import {useParams} from "react-router-dom";

function PhotoDetails({ data }){

    const {id}=useParams();

    const photo= data.find(item=>item.id===id);

    if(!photo){
        return <div>La photo n'a pas été trouvé</div>
    }

    return(
        <div className={"container3"}>
            <h1>{photo.title}</h1>
            <img src={photo.cover} alt={photo.title} className={"w-full h-auto"}/>
            <p>{photo.description}</p>
        </div>
    );
}

export default PhotoDetails
