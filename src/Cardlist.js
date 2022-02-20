// here creating a file of cardlist for storing the robot card in one place 

import React from "react";
import Card from "./Card";

const Cardlist =({robots})=>{
    const cardcomponent= robots.map( (user , i)=>{
        return  <Card id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
    })
    return(
        <div>
           {cardcomponent}
        </div>
    );
}

export default Cardlist;