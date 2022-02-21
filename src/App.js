// added a new file for creating search box and title of app and also it cantain all body in this file 

import React,{ Component } from "react";
import Cardlist from "./Cardlist";
import { robots } from "./robots";
import Searchbox from "./Searchbox";

class App extends Component {
    constructor(){
        super()
        this.state={
            robots:[],
            searchfiled: ''
        }
    }
    onSearchChange=(event)=>{
        this.setState({searchfiled: event.target.value })
    
    }
    render(){
        const {robots, searchfiled}= this.state;
        const filterrobots = robots.filter(robot=>{
        return robot.name.toLowerCase().includes(searchfiled.toLowerCase());
        })
        return(
            <div className="tc">
                <h1>Robots</h1>
                <Searchbox searchchange={this.onsearchchange}/>
                <Cardlist robots={filterrobots}/>
                
            </div>
          
        );
        }
   
}

export default App;