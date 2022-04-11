// added a new file for creating search box and title of app and also it cantain all body in this file 

import React,{ Component } from "react";
import Cardlist from "../components/Cardlist";
import Searchbox from "../components/Searchbox";
import './App.css'
import Scroll from '../components/Scroll'

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
        if(!robots.length){
            return <h1>Loading</h1>
        }
        else{
        return(
            <div className="tc">
                <h1>Robots</h1>
                <Searchbox searchChange={this.onSearchChange} />
                <Scroll>
                  <Cardlist robots={filteredRobots}/>
                </Scroll>
            
                
            </div>
          
        );
        }
        }
   
}

export default App;