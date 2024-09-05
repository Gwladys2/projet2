import React, {useState} from "react";

import flecheRetour from "../assets/fleche_retour.svg";
import flecheSuivante from "../assets/fleche_suivante.svg";
import '../slider.css';

function Slider({images}){

    const [currentIndex, setCurrentIndex]=useState(0);

    const photoPrecedente=()=>{
        setCurrentIndex((prevIndex)=>
        prevIndex===0 ? images.length -1 : prevIndex -1
        );
    }

    const photoSuivante=()=>{
        setCurrentIndex((prevIndex)=>
        prevIndex===images.length -1 ? 0 : prevIndex + 1)
    }


    return(
        <div className={"slider"}>
            <button onClick={photoPrecedente}>
                <img src={flecheRetour} alt={"photo_retour"}/>
            </button>

             <div className={"slider-images"}>
                 {images.map((image,index)=>(

                     <img
                       key={index}
                       src={image}
                       alt={`Slide${index}`}
                       className={`slide${index===currentIndex} ? 'active':''}`}
                       style={{display:index===currentIndex ? 'block': 'none'}}
                     />
                 ))}
             </div>

            <button onClick={photoSuivante}>
                <img src={flecheSuivante} alt={"photo_suivante"}/>
            </button>



        </div>
    )
}

export default Slider
