import {Link} from "react-router-dom";
import React from "react";
import logo from "../assets/logo.svg"


function Header(){


    return(
        <div>
         <header>
             <nav className={"navbar"}>
                 <img src={logo} alt={"logo-entête"}/>
                 <ul className={"sm-show"}>
                     <li className={"sm-item"}>
                         <Link to={"/"}>Accueil</Link>
                     </li>

                     <li>
                         <Link to={"/propos"} className={"sm-item"}>A propos</Link>
                     </li>

                 </ul>

             </nav>


         </header>
        </div>
    )
}

export default Header;
