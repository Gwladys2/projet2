import React from "react";
import {useParams} from "react-router-dom";
import Slider from "./Slider.jsx";
import DescriptionToggle from "./DescriptionToggle.jsx";
import StarRating from "./StarRating.jsx";
import '../slider.css';

function PhotoDetails({ data }){

    const {id}=useParams();

    const photo= data.find(item=>item.id===id);

    if(!photo){
        return <div>La photo n'a pas été trouvé</div>
    }

    return(
        <div className={"container3"}>
            <Slider images={photo.pictures}/>
            <h1>{photo.title}</h1>
            <p>{photo.location}</p>

            <StarRating rating={parseInt(photo.rating, 10)}/>
            <DescriptionToggle description={photo.description} equipements={photo.equipments}/>
        </div>
    );
}

export default PhotoDetails
