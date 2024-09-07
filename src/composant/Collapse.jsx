
import React, {useState} from "react";
import '../index2.css'
import banniere2 from '../assets/banniere-propos.svg'

function Collapse(){

    const [expandedSections, setExpandedSections]=useState({
        fiabilite:false,
        respect:false,
        service:false,
        securite:false,
    });

    const handleclick=(section)=>{
        setExpandedSections((prev)=>({
            ...prev,
            [section]:!prev[section],
        }));
    };


    return(
        <div className={"global"}>
            <img src={banniere2}/>

            <div className={"container111"}>

                <nav>
                    <ul className={"description111"}>
                        <li className={"description-titre"} onClick={()=>handleclick('fiabilite')}>
                            Fiabilité
                        </li>
                        <li className={`descriptionText${expandedSections.fiabilite ? 'expandes':''}`}>
                            <p>
                                Lorem
                            </p>
                        </li>

                    </ul>
                </nav>

                <nav>
                    <ul className={"description111"}>
                        <li className={"description-titre"} onClick={()=>handleclick('respect')}>
                            Respect
                        </li>
                        <li className={`descriptionText${expandedSections.respect ? 'expandes':''}`}>
                            <p>
                                Lorem
                            </p>
                        </li>

                    </ul>
                </nav>
                <nav>
                    <ul className={"description111"}>
                        <li className={"description-titre"} onClick={()=>handleclick('service')}>
                            Service
                        </li>
                        <li className={`descriptionText${expandedSections.service ? 'expandes':''}`}>
                            <p>
                                Lorem
                            </p>
                        </li>

                    </ul>
                </nav>
                <nav>
                    <ul className={"description111"}>
                        <li className={"description-titre"} onClick={()=>handleclick('securite')}>
                            Securité
                        </li>
                        <li className={`descriptionText${expandedSections.securite ? 'expandes':''}`}>
                            <p>
                                Lorem
                            </p>
                        </li>

                    </ul>
                </nav>


            </div>

        </div>
    )
}

export default Collapse
