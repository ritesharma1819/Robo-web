// creating a file for making a search box 

import React from "react";

// here the function for search box 
const Searchbox=()=>{
    return(
        <div className="pa2">
            <input className="pa3 ba b--green bg-light-blue"
            type='search' 
            placeholder='search robots' />
        </div>
    );
}

export default Searchbox;