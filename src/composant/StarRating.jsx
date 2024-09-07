
import React from "react";
import Star from './Star.jsx'
function StarRating({rating}){

    const totalStars=5;


    return(
        <div className={"star-rating"}>
            {Array.from({length:totalStars}, (_,index)=>(
                <Star key={index} filled={index<rating}/>
            ))}
        </div>
    );
}

export default StarRating
