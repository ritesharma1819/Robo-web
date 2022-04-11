// added a new file for creating search box and title of app and also it cantain all body in this file 

import React,{ useEffect, useState } from "react";
import Cardlist from "../components/Cardlist";
import Searchbox from "../components/Searchbox";
import './App.css'
import Scroll from '../components/Scroll'

// class App extends Component {
//     constructor(){
//         super()
//         this.state={
//             robots:[],
//             searchfiled: ''
//         }
//     }

const App=()=>{

    const [robots, setRobots]=useState([]);
    const [searchfiled, setSearchfiled]=useState('');

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users => {setRobots(users)});
    })

     const onSearchChange=(event)=>{
        setSearchfiled(event.target.value )
    
    }
    // render(){
        const filteredRobots = robots.filter(robot=>{
        return robot.name.toLowerCase().includes(searchfiled.toLowerCase());
        },[])
        if(!robots.length){
            return <h1>Loading</h1>
        }
        else{
        return(
            <div className="tc">
                <h1>Robots</h1>
                <Searchbox searchChange={onSearchChange} />
                <Scroll>
                  <Cardlist robots={filteredRobots}/>
                </Scroll>
            
                
            </div>
          
        );
        }
        
   
}

    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //       .then(response=> response.json())
    //       .then(users => {this.setState({ robots: users})});
    //   }


    

export default App;