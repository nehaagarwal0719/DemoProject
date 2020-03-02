import React  , {Component} from 'react';
import Web3 from 'web3';
import jwt_decode from 'jwt-decode'
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import owner1 from './owner1';
import Admin from './Admin'; 
import freelancer from '../abis/freelancer.json';
import Moment from 'react-moment';

class Profile1 extends Component{

async componentWillMount(){
  await this.loadweb3()
  console.log(window.web3)
  await this.loadBlockchainData()
}
componentDidMount() {
  const token = localStorage.usertoken
  const decoded = jwt_decode(token)
  this.setState({
    fname: decoded.fname,
    lname: decoded.lname,
    email: decoded.email
  })
}

async loadweb3(){
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum)
    await window.ethereum.enable()
  }
  else if (window.web3) {
    window.web3 = new Web3(window.web3.currentProvider)
  }
  else {
    window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
  }
     const web3 = window.web3
   let latestBlock = await web3.eth.getBlock('latest')
    console.log('latestBlock',latestBlock)
    this.setState({
      blockNumber:latestBlock.number
    })
}

async loadBlockchainData(){
  const web3 = window.web3
  const accounts = await web3.eth.getAccounts()
  this.setState({account: accounts[0]})
}
constructor (props){
  super(props)
  this.state ={
    account: '',
    propertyCount :0,
    props :[],
    owner:'',
    count:0,
    blockNumber:0,
    latestBlocks:[],
    loading : true

  }
  
  
}

 handleAlternate(event){
   event.preventDefault()
  const id = this.propertyId.value
  this.props.forRent(id)
}


  handleAlternate1(event) {
     event.preventDefault()
  const id = this.propertyId.value
  this.props.forSale(id)
  }



 render(){
  return(
   <div className="container">
     <div className="container">
        <div className="row my-2">
            <div className="col-lg-6 order-lg-2">
                <ul className="nav nav-tabs navbar-light">
                   <li className="nav-item">
                   <a href="" data-target="#profile" data-toggle="tab" class="nav-link active lead ">Profile</a>
                   </li>

                  {this.state.account != "0xc55961b8eaD792670E5393418950BE7597d521ED"?
                   <li className="nav-item">
                   <a href="" data-target="#propertydetails" class="text-dark" data-toggle="tab" class="nav-link lead">Property Details</a>
                   </li>:null}

                   {this.state.account != "0xc55961b8eaD792670E5393418950BE7597d521ED"?
                   <li className="nav-item">
                   <a href="" data-target="#biddetails" class="text-dark" data-toggle="tab" class="nav-link lead">Bid Details</a>
                   </li>:null}

                    {this.state.account == "0xc55961b8eaD792670E5393418950BE7597d521ED"?
                   <li className="nav-item">
                   <a href="" data-target="#add_property" data-toggle="tab" class="nav-link lead"> Add Property </a>
                   </li>:null}
               </ul>
               <div className="tab-content py-4">
                    <div className="tab-pane active" id="profile">
                        <form role="form">
                           <div className="form-group row">
                           <label className="col-lg-3 col-form-label form-control-label">First name</label>
                           <label className="col-lg-9 col-form-label form-control-label">{this.state.fname}</label>
                           </div>
                           <div className="form-group row">
                           <label className="col-lg-3 col-form-label form-control-label">Last name</label>
                           <label className="col-lg-9 col-form-label form-control-label">{this.state.lname}</label>
                           </div>
                           <div class="form-group row">
                           <label className="col-lg-3 col-form-label form-control-label">Email</label>
                           <label className="col-lg-9 col-form-label form-control-label">{this.state.email}</label>
                           </div>
                           <div className="form-group row">
                           <label className="col-lg-3 col-form-label form-control-label">Address</label>
                           <label className="col-lg-9 col-form-label form-control-label">{this.state.account}</label>
                           </div>
                      </form>
                    </div>


                    <div class="tab-pane" id="propertydetails">
                        
                           {this.props.props.map((property,key)=>{
                            if(this.state.account==property.owner){
                              return(
                                <div>

                                    <div class="form-group row">
                                      <label class="col-lg-4 col-form-label form-control-label">Property ID</label>
                                      <label className="col-lg-8 col-form-label form-control-label">{property.id}</label>
                                    </div>

                                    <div class="form-group row">
                                      <label class="col-lg-4 col-form-label form-control-label">Property Name</label>
                                      <label className="col-lg-8 col-form-label form-control-label">{property.name}</label>
                                    </div>

                                    <div class="form-group row">
                                      <label class="col-lg-4 col-form-label form-control-label">Property Status</label>
                                      <label className="col-lg-8 col-form-label form-control-label">{property.status}</label>
                                    </div>

                                     <div class="form-group row">
                                      <label class="col-lg-4 col-form-label form-control-label">Property Location</label>
                                      <label className="col-lg-8 col-form-label form-control-label">{property.location}</label>
                                    </div>
                                      
      
                              <div class="form-group row">
                                      <label class="col-lg-4 col-form-label form-control-label">Property time</label>
                                          <label className="col-lg-8 col-form-label form-control-label"><Moment unix>{property.time}</Moment></label>
                                    </div>

                                </div>
                                );
                              }})}
  

                          <div  class="form-group row">  
                                <form>
                                <div className="form-group row">
                                <div  class="col-lg-12">
                                <input
                                id="propertyId"
                                type="text"
                                ref={(input) => { this.propertyId = input }}
                                class="form-control m-2"
                                placeholder="Property Id"
                                required />
                                </div>
                                </div>
                                <div class="col-lg-12 text-left">
                                <button type="button" className=" col-lg-5 button" onClick={this.handleAlternate.bind(this)}>For Rent</button>
                              
                                 <button type="button" className=" col-lg-5 button" onClick={this.handleAlternate1.bind(this)}>For sale</button>
                                </div>
                                </form>
                          </div>   

               
       </div>

      {this.state.account == "0xc55961b8eaD792670E5393418950BE7597d521ED"?<div class="tab-pane" id="add_property">
      <div className="form-group row">

      <div id="content">
      <form onSubmit={(event) => {
        event.preventDefault()
        const bno= this.state.blockNumber
        const name = this.propertyName.value
        const des = this.propertyDes.value
        const owner = this.propertyOwner.value
        const type= this.propertyType.value
        const location =this.propertyLocation.value

        this.props.createProperty(bno,name,des,owner,type,location)
      }}>
      <div className="form-group mr-sm-2">
          <div class="form-group row">
             <label className="col-lg-3 col-form-label form-control-label text-secondary">Property Name</label>
                <div className="col-lg-6">
                 <input
                  id="propertyName"
                  type="text"
                  ref={(input) => { this.propertyName = input }}
                  className="form-control"
                  placeholder="Property Name"
                  required />
               </div>
           </div>

            <div class="form-group row">
              <label className="col-lg-3 col-form-label form-control-label text-secondary">Property Type</label>
                <div className="col-lg-6">
                  <select class="form-control " id="propertyType"   ref={(input) => { this.propertyType = input }}>
                    <option >-Select an option-</option>
                    <option >House</option>
                    <option>Flat</option>
                    <option>Plot</option>
                  </select>
                </div>
            </div>    

          <div class="form-group row">
            <label className="col-lg-3 col-form-label form-control-label text-secondary">Property Owner</label>
              <div className="col-lg-6">
              <input
              id="propertyOwner"
              type="text"
              ref={(input) => { this.propertyOwner = input }}
              className="form-control"
              placeholder="Property Owner"
              required />
             </div> 
          </div>

          <div class="form-group row">
             <label className="col-lg-3 col-form-label form-control-label text-secondary">Property Location</label>
              <div className="col-lg-6">
                <input 
                id="propertyLocation"
                type="text"
                ref={(input) => { this.propertyLocation = input }}
                className="form-control"
                placeholder="Property Location"
                required />
              </div>  
          </div>

        <div class="form-group row">
          <label className="col-lg-3 col-form-label form-control-label text-secondary">Description</label>
            <div className="col-lg-6"> 
            <textarea rows="5"
            id="propertyDes"
            type="text"
            ref={(input) => { this.propertyDes = input }}
            className="form-control"
            placeholder="Property Description"
            required />
         </div>
        </div> 

      </div>
      <div class="row">
      <div class="col-lg-5"></div>
      <div class="col-lg-5">
      <button type="submit" class="button text-left btn-lg">Add Property</button>
      </div>
      <div class="col-lg-2"></div>
      </div>
      </form>


      <h2>Property List</h2>
      <table className="table">
      <thead>
      <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Description</th>
      <th scope="col">Owner</th>
      <th scope="col">Type</th>
      <th scope="col">Status</th>
      <th scope="col">Purchased</th>
      <th scope="col">bno</th>
      </tr>             

      </thead>
      <tbody id="propertyList">

      {this.props.props.map((property,key)=>{
        return(

        <tr key={key}>
        <th scope="row">{property.id.toString()}</th>

        <td>{property.name}</td>
        <td>{property.des}</td>
        <td>{property.owner}</td>
        <td>{property.type1}</td>  
        <td>{property.status}</td>    
        <td>{property.purchased.toString()?"Not purchased":"purchased"}</td>     
        <td>{property.bno}</td>   
        </tr>
        );
      })}

      </tbody>
      </table>
      </div>


      </div>
      </div> 
      :null}


                    <div class="tab-pane" id="biddetails">
                        <div>
                           {this.props.bids.map((bid,key)=>{
                            if(this.state.account==bid.bidder){
                              return(
                                <div>

                                    <div class="form-group row">
                                      <label class="col-lg-4 col-form-label form-control-label">Bid ID</label>
                                      <label className="col-lg-8 col-form-label form-control-label">{bid.bid_id}</label>
                                    </div>

                                    <div class="form-group row">
                                      <label class="col-lg-4 col-form-label form-control-label">Bid Name</label>
                                      <label className="col-lg-8 col-form-label form-control-label">{bid.name}</label>
                                    </div>

                                     <div class="form-group row">
                                      <label class="col-lg-4 col-form-label form-control-label">Bid Description</label>
                                      <label className="col-lg-8 col-form-label form-control-label">{bid.message}</label>
                                    </div>

                                     <div class="form-group row">
                                      <label class="col-lg-4 col-form-label form-control-label">Bid Price</label>
                                      <label className="col-lg-8 col-form-label form-control-label">{bid.price}</label>
                                    </div>

                                    <div class="form-group row">
                                      <label class="col-lg-4 col-form-label form-control-label">Bid Status</label>
                                     {bid.status==true? <label className="col-lg-8 col-form-label form-control-label">Approved</label>: <label className="col-lg-8 col-form-label form-control-label">Not Approved</label>}
                                    </div>

                                </div>
                                );
                              }})}


                          <div  class="form-group row">  
                            <form onSubmit={(event) => {
                              event.preventDefault()
                              const id = this.bidId.value
                              this.props.forApprove(id)
                            }}>
                            <div className="form-group mr-sm-2">
                            <div>
                            <input
                            id="bidId"
                            type="text"
                            ref={(input) => { this.bidId = input }}
                            className="form-control m-2"
                            placeholder="bid Id"
                            required />
                            </div>
                            </div >
                             <div class="col-lg-9 text-left">
                            <button type="submit" className="button">Bid Approved</button>
                            </div>
                            </form>
                          </div>  

               </div>
       </div>






      </div>
      </div>
      
      </div>
      </div>
      </div>
  
      );

}
}

export default Profile1