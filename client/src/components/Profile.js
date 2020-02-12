import React, { Component } from 'react'
import freelancer from '../abis/freelancer.json';
import jwt_decode from 'jwt-decode'
import Web3 from 'web3';
import Profile1 from './Profile1';
import Profile2 from './Profile2';
import Admin from './Admin'; 
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";

class Profile extends Component {

   async componentWillMount(){
  await this.loadweb3()
  console.log(window.web3)
  await this.loadBlockchainData()
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
  }
async loadBlockchainData(){
    const web3 = window.web3
    const accounts = await web3.eth.getAccounts()
    this.setState({account: accounts[0]})
    const networkId = await web3.eth.net.getId()
    const networkData = freelancer.networks[networkId]
    if(networkData){ 
     const Freelancer = new web3.eth.Contract(freelancer.abi,networkData.address)
     this.setState({Freelancer})

     const propertyCount = await Freelancer.methods.propertyCount().call()
     this.setState({propertyCount})
     for(var i=1;i<=propertyCount;i++){
      const property = await Freelancer.methods.props(i).call()
      this.setState({
        props:[...this.state.props,property]
      })      
     }

      const bidCount = await Freelancer.methods.bidCount().call()
     this.setState({bidCount})
     for(var i=1;i<=bidCount;i++){
      const bid = await Freelancer.methods.bids(i).call()
      this.setState({
        bids:[...this.state.bids,bid]
      })      
     }

     this.setState({loading:false})
     console.log(this.state.props)
      }
    else{
    window.alert("Contract not deployed to the detected network");
  }
}
  constructor() {
    super()
    this.state = {
      account:'',
      fname: '',
      lname: '',
      email: '',
      errors: {},
      props:[],
       propertyCount :0,
        bidCount:0, 
      bids:[]
    }
     this.forSale = this.forSale.bind(this)
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

   forSale(id) {
    this.setState({ loading: true })
    this.state.Freelancer.methods.purchaseBid(id).send({ from: this.state.account})
    .once('receipt', (receipt) => {
      this.setState({ loading: false })
    })
  }

  render() {
    return (
      <Router>
      <div>
      <Route path="/admin"  component={Admin}/>
      </div>
      <div className="container">
        <div>
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">PROFILE</h1>
          </div>
          <table className="table col-md-6 mx-auto">
            <tbody>
              <tr>
                <td>First Name</td>
                <td>{this.state.fname}</td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td>{this.state.lname}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{this.state.email}</td>
              </tr>
              <tr>
                <td>Address</td>
                <td>{this.state.account}</td>
              </tr>
              {this.state.account == "0xc55961b8eaD792670E5393418950BE7597d521ED"?<tr>
               <button><Link to={'/admin/'}>Add Property</Link></button>   
              </tr> : null }

           

            </tbody>
          </table>
        </div>
        <Profile1 props ={this.state.props}
         forSale={this.forSale} /> 
        <Profile2 bids ={this.state.bids} />
      </div>
      </Router>
    )
  }
}

export default Profile