import React from 'react';
import {Link} from "react-router-dom";

function NotFound(){


    return(
        <div style={{textAlign:'center', padding:'50px'}}>
         <h1> 404 - Page Not Found</h1>
            <p style={{color:'#FF6060'}}>
                Oups la page que vous demandez n'existe pas
            </p>
            <Link
                to={"/"}
                style={{color:'black', textDecoration:'none',fontSize:'20px'}}>
                Retour vers notre page d'accueil
            </Link>
        </div>
    )
}
export default NotFound
