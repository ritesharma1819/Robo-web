// added a new file for creating search box and title of app and also it cantain all body in this file 

import React,{ Component } from "react";
import Cardlist from "./Cardlist";
import { robots } from "./robots";
import Searchbox from "./Searchbox";

class App extends Component {
    constructor(){
        super()
        this.state={
            robots: robots,
            Searchbox: ''
        }
    }
    render(){
        return(
            <div className="tc">
                <h1>Robots</h1>
                <Searchbox/>
                <Cardlist robots={this.state.robots}/>
            </div>
          
        );
        }
   
}

export default App;