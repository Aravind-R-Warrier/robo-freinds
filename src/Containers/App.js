import React, { Component } from 'react'
import CardList from '../Components/CardList'
import SearchBox from '../Components/SearchBox'
import './App.css'
import Scroll from '../Components/Scroll'

class  App extends Component {

  constructor () {
    super()
    this.state={robots:[],
      searchField:""}
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users").then(response=> response.json())
    .then(users=>this.setState({robots:users}))
  }

onSearchChange=(event)=>{
  this.setState({searchField:event.target.value})

}

  render (){
    const{robots,searchField}=this.state//destructuring
    const filteredRobots=robots.filter(robot=>{
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return (
      <>
      <div className='tc'>
      <h1 style={{fontStyle:"italic"}}>Robo Freinds</h1>
      <SearchBox SearchChange={this.onSearchChange} />
      <Scroll>
        <CardList robots={filteredRobots}/>
        </Scroll>
        </div>
      </>
    )
  }
  
  
}

export default App
