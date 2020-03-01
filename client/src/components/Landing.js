import React, { Component } from 'react'
import about from '../assets/img/about.jpg' 

class Landing extends Component {
  render() {
    return (
      <div classsName="App">
  
  <header className="masthead">
    <div className="container">
      <div className="intro-text">
        <div className="intro-lead-in">Welcome!</div>
        <div className="intro-heading text-uppercase">A Better Home Search</div>
      </div>
    </div>
  </header>

  <section className="page-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
        <h2 className="section-heading text-uppercase">About</h2>

          <h3 className="section-subheading text-muted">We are here to help you.</h3>
        </div>
      </div>
     <img src={about} className="about" alt="about" width="600" height="400" align="left" padding-right="70px"/>
      <ul>
        <h2 align="center"> A Better Home Search.</h2>
        <p className="section-subheading text-muted" align="center" ><i>Total transparency and direct access to landlords, listing brokers and property managers. No more middle-men.</i></p>
        <p className="section-subheading text-muted" align="center"><i>Your privacy protected. We’ll never sell your personal information to third parties.</i></p>
        <p className="section-subheading text-muted" align="center"><i>Multi layer listing verification. Get the best prices on the best homes.</i></p>
        <p className="section-subheading text-muted" align="center"><i>Removes intermediaries which speed up the process.</i></p>
      </ul>
    </div>
  </section>
  <section className="page-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase text-body">Services</h2>
          <h3 className="section-subheading text-muted">A Better Home Search.</h3>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">Buy</h4>
          <p className="text-muted">something.</p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className="fa fa-truck fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">Sell</h4>
          <p className="text-muted">something</p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className="fa fa-key fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">Rent</h4>
          <p className="text-muted">something.</p>
        </div>
      </div>
    </div>
  </section>


  <section className="py-5">
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-6">
          <a href="#something">
            <img className="img-fluid d-block mx-auto" src="img/logos/envato.jpg" alt=""/>
          </a>
        </div>
        <div className="col-md-3 col-sm-6">
          <a href="#something">
            <img className="img-fluid d-block mx-auto" src="img/logos/designmodo.jpg" alt=""/>
          </a>
        </div>
        <div className="col-md-3 col-sm-6">
          <a href="#something">
            <img className="img-fluid d-block mx-auto" src="img/logos/themeforest.jpg" alt=""/>
          </a>
        </div>
        <div className="col-md-3 col-sm-6">
          <a href="#something">
            <img className="img-fluid d-block mx-auto" src="img/logos/creative-market.jpg" alt=""/>
          </a>
        </div>
      </div>
    </div>
  </section>

  <footer className="footer">
    <div className="container">
      <div className="row align-items-center">
      <div className="col-md-4">
          <span className="copyright text-center"><b>Contact us on</b></span>
        </div>
        <div className="col-md-12" >
          <ul className="list-inline social-buttons">
            <li className="list-inline-item">
              <a href="#something">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#something">
                <i className="fa fa-facebook-f"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#something">
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
       
      </div>
    </div>
  </footer>
    </div>
    )
  }
}

export default Landing
