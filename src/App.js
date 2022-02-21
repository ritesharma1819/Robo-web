// added a new file for creating search box and title of app and also it cantain all body in this file 

import React,{ Component } from "react";
import Cardlist from "./Cardlist";
import Searchbox from "./Searchbox";
import './App.css'

class App extends Component {
    constructor(){
        super()
        this.state={
            robots:[],
            searchfiled: ''
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(response=> response.json())
          .then(users => {this.setState({ robots: users})});
      }


    onSearchChange=(event)=>{
        this.setState({searchfiled: event.target.value })
    
    }
    render(){
        const {robots, searchfiled}= this.state;
        const filteredRobots = robots.filter(robot=>{
        return robot.name.toLowerCase().includes(searchfiled.toLowerCase());
        })
        return(
            <div className="tc">
                <h1>Robots</h1>
                <Searchbox searchChange={this.onSearchChange} />
                <Cardlist robots={filteredRobots}/>
                
            </div>
          
        );
        }
   
}

export default App;