import React, {useState} from "react";
import '../slider.css';
import Vector from'../assets/Vector.svg'


function DescriptionToggle({description, equipements}){

    const [isDescriptionOpen, setIsDescriptionOpen]=useState(false);
    const [isEquipementsOpen, setIsEquipementsOpen]=useState(false);

    const toggleDescription=()=>{
        setIsDescriptionOpen(prevState => !prevState);
    }

    const toggleEquipement=()=>{
        setIsEquipementsOpen(prevState => !prevState);
    }


    return(
        <div className={"description-toggle-wrapper"}>

            <nav className={"description-toggle-container"}>

                <ul className={"description-toggle-button"} onClick={toggleDescription}>
                  <li className={"titre-description"}>Description</li>
                    <img
                    src={Vector}
                    alt={isDescriptionOpen ? 'Masqquer': 'Afficher'}
                    className={"description-toggle-icon"}
                    />
                    <li className={`description-content ${isDescriptionOpen ? 'show' : 'hide'}`}>
                        <p>{description}</p>
                    </li>
                </ul>
            </nav>


            <nav className={"description-toggle-container"}>

                <ul className={"description-toggle-button"} onClick={toggleEquipement}>
                    <li className={"titre-description"}>Equipement</li>
                    <img
                        src={Vector}
                        alt={isEquipementsOpen ? 'Masqquer': 'Afficher'}
                        className={"description-toggle-icon"}
                    />
                    <li className={`description-content ${isEquipementsOpen ? 'show' : 'hide'}`}>
                        {equipements.map((item, index)=>(
                        <p key={index}>{item}</p>
                        ))}
                    </li>
                </ul>
            </nav>
        </div>
    );
}
export default DescriptionToggle
