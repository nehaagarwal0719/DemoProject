import React  , {Component} from 'react';
import { BrowserRouter as Router,Switch, Route} from "react-router-dom";
import {Link} from "react-router-dom";
import Web3 from 'web3';
import Admin1 from './Admin1.js';
import freelancer from '../abis/freelancer.json';

class Admin extends Component{

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
     this.setState({loading:false})
     //console.log(this.state.bids)
      }
    else{
    window.alert("Contract not deployed to the detected network");
  }
}


    constructor (props){
    super(props)
    this.state ={
      account: '',
      name:'',
      des:'',
      type:'',
      id:0,
      owner:'',
      purchased : true,
      props:[],
      loading : true
    }
   this.createProperty = this.createProperty.bind(this);
  }

createProperty(bno,name,des,owner,type) {
    this.setState({ loading: true })
    //let id1=this.props.params.id
       //this.state.cid =checkid
    this.state.Freelancer.methods.createProperty(bno,name,des,owner,type).send({ from: this.state.account })
    .once('receipt', (receipt) => {
      this.setState({ loading: false })
    })

  }
  render()
  {
    return(
    <div class ="container">
      <div class="row">
      
        <Admin1 props ={this.state.props} 
        createProperty={this.createProperty}

        />
        
        </div>
    </div>
    );
  }
}

export default Admin;
