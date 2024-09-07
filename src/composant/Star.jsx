
import React from 'react';
import fullstar from '../assets/start-active.svg'
import emptystar from '../assets/star-inactive.svg'

function Star({filled}){

    const starSrc= filled ? fullstar : emptystar
    return(
       <img
          src={starSrc}
          alt={filled ? 'Filled star':'Empty star'}
          style={{width:'20px', height:'20px', marginRight:'5px'}}
       />
    );
}

export default Star
