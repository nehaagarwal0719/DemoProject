import React, { Component } from 'react';
import about from '../assets/img/1.jpg' 

class Choose extends Component{
   render(){
  return (
    <div className="App">
      <div class="hy ">
        <img  src={about} className="about" alt="about" />
        
          <div class="card col-lg-2 col-lg-offset-1 harsh intro-lead-in"><a href="#some" class="nounderline">
  
hello</a>
          </div>
          <div class="card col-lg-2 col-lg-offset-1 harsh1 intro-lead-in"><a href="#some" class="nounderline">
  
  hello</a>
          </div>
      </div>
      <div class="container">
  <h2>Carousel Example</h2>  
  <div id="myCarousel" class="carousel slide" data-ride="carousel">
  
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>

 
    <div class="carousel-inner">
      <div class="item active">
        <img src="../assets/img/1.jpg" alt="Los Angeles"></img>
      </div>

      <div class="item">
        <img src="chicago.jpg" alt="Chicago"></img>
      </div>
    
      <div class="item">
        <img src="ny.jpg" alt="New york"></img>
      </div>
    </div>

 
    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</div>

      </div>
        );
}
}

export default Choose
