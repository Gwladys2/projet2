import React from "react";
import footer from "../assets/footer.svg"
import footer2 from "../assets/footer2.svg"



function Footer(){


    return(
       <div>
          <footer className={"footer"}>
              <img src={footer} alt={"logo-footer"}/>
          </footer>
           <footer className={"footer2"}>
               <img src={footer2} alt={"logo-footer2"}/>
           </footer>
       </div>
    )
}

export default Footer;
