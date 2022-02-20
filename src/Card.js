// created a file for making a card of robots

import React from "react";

const Card=()=>{
    return(
        <div className="bg-light-green dib br3 pa3 ma2 grow">
            < img src="https://robohash.org//test?200x200" alt="robots"/>
            <h2>vision</h2>
            <p>vision@gmail.com</p>
        </div>
    );
}

// export default is use to connect the file with index.js file 
export default Card;