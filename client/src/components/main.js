import React  , {Component} from 'react';
import { BrowserRouter as Router,Switch, Route} from "react-router-dom";
import {Link} from "react-router-dom";
import Bid from './bid.js';
import Info from './info.js';

class Main extends Component{

  constructor (props){
    super(props) 
    this.state ={
      account:'',
      loading : true
    }
  }

  render()
  {
    return(
      <Router>
      <div>
      <Route path="/bid"  component={Bid}/>
       <Route path="/info"  component={Info}/>
      </div>
       <div id="content">
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
                        <td><button>
                           <Link to={'/info/'+property.id} >
                          MORE INFO
                          </Link>
                         </button></td>
                        {property.status == "SALE" || property.status == "RENT" 
                          ? <td><button>
                           <Link to={'/bid/'+property.id} >
                          Click to bid 
                          </Link>
                         </button></td>
                         :null
                       }
                      
                      </tr>
                     );
                   })}

               </tbody>
          </table>
        </div>
      </Router>
    );
  }
}


export default Main;
