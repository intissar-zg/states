
import React, { Component } from 'react'
import Profile from './Profile/Profile';
import './App.css';


export default class App extends Component {
 
    state = {
      person:{
        Fullname: "Zéguina Intissar", 
        bio:"I'am 31 years old i have a master degree in the information system engineering", 
        pro:"Full stack developper"
      },
      show:true,
      timer:0
     };
  
     componentDidMount() {
       this.setState({
         interval:setInterval(() =>{
           this.setState({timer:this.state.timer + 1})
         },1000),
         
       });
    }
 
  render() {
    return (
      <div className="show">
{this.state.show && <Profile name={this.state.person.Fullname} biographie={this.state.person.bio} pro={this.state.person.pro}><img src="profile.jpg" alt="image"/></Profile> }

<button onClick={()=>{this.setState({show:!this.state.show})}}>show</button>
<h2>{this.state.timer}</h2>
      </div>
    )
  }
}
