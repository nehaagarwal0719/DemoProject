import React, { Component } from 'react';
import about from '../assets/img/1.jpg' 
import BackgroundImage from "react-background-image";

class Choose extends Component{
   render(){
  return (
    <div class="App">

      <div class="hy ">
        <img  src={about} className="about" alt="about" />
        
          <div class="well well-lg col-lg-2 col-lg-offset-1 harsh intro-lead-in"><a href="#some" class="nounderline">hello</a></div>
          <div class="well well-lg col-lg-2 col-lg-offset-1 harsh1 intro-lead-in"><a href="#some" class="nounderline">hello</a></div>
    </div>
  </div>
        );
}
}

export default Choose
