import React, { Component } from 'react'
import about from '../assets/img/about.jpg' 
var FontAwesome = require('react-fontawesome')

class Landing1 extends Component {
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

        </div>
      </div>
      <div class="row">
      <div >
        <img src={about} className="about  col-lg-12 " alt="about"  />
      </div>
      <div class="col-lg-6 ">
      <ul class="float-center mr-5">
        <p className="section-subheading text-muted "  ><i>No more middle-men.</i></p>
        <p className="section-subheading text-muted" ><i>Your privacy protected. We’ll never sell your personal information to third parties.</i></p>
        <p className="section-subheading text-muted" ><i>Multi layer listing verification. Get the best prices on the best homes.</i></p>
        <p className="section-subheading text-muted" ><i>Removes intermediaries which speed up the process.</i></p>
      </ul>
    </div>
    </div>
    </div>
  </section>



<section>
<div class="container space">
<div class="row">
  <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase text-body">Services</h2>
          <h3 className="section-subheading text-muted">A Better Home Search.</h3>
        </div>
<div class="col-lg-4">
    <FontAwesome
                        className='super-crazy-colors three'
                        name='shopping-cart'
                        size='5x'

                      />
</div>
<div class="col-lg-4">
    <FontAwesome
                        className='super-crazy-colors three'
                        name='truck'
                        size='5x'

                      />
</div>
<div class="col-lg-4">
    <FontAwesome
                        className='super-crazy-colors three'
                        name='key'
                        size='5x'

                      />
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

  
    </div>
    )
  }
}

export default Landing1