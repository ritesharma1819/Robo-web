// added a new file for creating search box and title of app and also it cantain all body in this file 

import React from "react";
import Cardlist from "./Cardlist";
import { robots } from "./robots";
import Searchbox from "./Searchbox";

const App = ()=>{
    return(
        <div className="tc">
            <h1>Robots</h1>
            <Searchbox/>
            <Cardlist robots={robots}/>
        </div>
      
    );
}

export default App;