// created a file for making a card of robots

import React from "react";

const Card=(props)=>{
    const {id, name, email}= props;
    return(
        <div className="bg-light-green dib br3 pa3 ma2 grow tc">
            < img src={`https://robohash.org//${id}?200x200`} alt="robots"/>
            <h2>name</h2>
            <p>email</p>
        </div>
    );
}

// export default is use to connect the file with index.js file 
export default Card;