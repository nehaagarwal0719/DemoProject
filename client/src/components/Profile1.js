import React  , {Component} from 'react';
import Web3 from 'web3';
import jwt_decode from 'jwt-decode'
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import owner1 from './owner1';
import freelancer from '../abis/freelancer.json';

class Profile1 extends Component{

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
}


  constructor (props){
    super(props)
    this.state ={
      account: '',
      propertyCount :0,
      props :[],
      owner:'',
      loading : true
    }
  }


	render(){
		return(
		<div className="container">
        <div>
          <table className="table col-md-6 mx-auto">
            <tbody>
              <tr>
                <td id>Property Added</td>
                <td id ="propertyList">
                   {this.props.props.map((property,key)=>{
                  	if(this.state.account==property.owner){
                    return(
                      <tr key={key}>
                        <td>{property.name}</td>
                         <td>{property.status}</td>
                         <td> <button
                             value={property.id}
                             onClick={(event)=>{
                               console.log("clicked")
                               this.props.forSale(event.target.value)
                              }}>
                             Buy
                             </button>
                       </td>
                      </tr>
            
                     );
                 }
                   })}

                </td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
			);
		
	}
}

export default Profile1