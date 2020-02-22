import React , {Component} from 'react';
import Admin from './Admin';
import Web3 from 'web3';


class Admin1 extends Component{


async componentWillMount(){
  await this.loadweb3()
  console.log(window.web3)
  //await this.loadBlockchainData()
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
constructor (props){
    super(props)
    this.state ={
      account: '',
      blockNumber:0,
      latestBlocks:[]
    }
  }

  render()
  {
    return(
  <div id="content">
       <h1>Add Property</h1>
          <form onSubmit={(event) => {
            event.preventDefault()
            const bno= this.state.blockNumber
            const name = this.propertyName.value
            const des = this.propertyDes.value
            const owner = this.propertyOwner.value
            const type= this.propertyType.value

            this.props.createProperty(bno,name,des,owner,type)
           }}>
          <div className="form-group mr-sm-2">
            <div>
            <input
              id="propertyName"
              type="text"
              ref={(input) => { this.propertyName = input }}
              className="form-control"
              placeholder="Property Name"
            required />
            </div>
            <div>
            <input
              id="propertyType"
              type="text"
              ref={(input) => { this.propertyType = input }}
              className="form-control"
              placeholder="Property Type"
            required />
            </div>
            <div>
            <input
              id="propertyOwner"
              type="text"
              ref={(input) => { this.propertyOwner = input }}
              className="form-control"
              placeholder="Property Owner"
            required />
            </div>
            <div>
             <input
              id="propertyDes"
              type="text"
              ref={(input) => { this.propertyDes = input }}
              className="form-control"
              placeholder="Property Description"
            required />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Add Property</button>
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

    );
  }
}

export default Admin1;