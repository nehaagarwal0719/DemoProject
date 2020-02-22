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
                          <td>{property.id}</td>
                          <td>{property.name}</td>
                          <td>{property.status}</td>
                          <td>
                               

                          </td>
                           <td>
                              
                        </td>
                          </tr>
                         );
                     }})}
                    </td>
                </tr>     
              </tbody>
             </table>
                         <form onSubmit={(event) => {
                                      event.preventDefault()
                                      const id = this.propertyId.value
                                      this.props.forSale(id)
                                     }}>
                                    <div className="form-group mr-sm-2">
                                      <div>
                                      <input
                                        id="propertyId"
                                        type="text"
                                        ref={(input) => { this.propertyId = input }}
                                        className="form-control"
                                        placeholder="Property Id"
                                      required />
                                      </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary">For sale</button>
                                </form>

                            <form onSubmit={(event) => {
                                      event.preventDefault()
                                      const id = this.propertyId.value
                                      this.props.forRent(id)
                                     }}>
                                    <div className="form-group mr-sm-2">
                                      <div>
                                      <input
                                        id="propertyId"
                                        type="text"
                                        ref={(input) => { this.propertyId = input }}
                                        className="form-control"
                                        placeholder="Property Id"
                                      required />
                                      </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary">For Rent</button>
                                </form>
                                     
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
                                      className="form-control"
                                      placeholder="bid Id"
                                     required />
                                   </div>
                                    </div>
                                     <button type="submit" className="btn btn-primary">Bid Approved</button>
                             </form>

        </div>
      </div>
			);
		
	}
}

export default Profile1