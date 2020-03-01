import React  , {Component} from 'react';
import { BrowserRouter as Router,Switch, Route} from "react-router-dom";
import {Link} from "react-router-dom";
import Bid from './bid.js';
import Info from './info.js';
import Moment from 'react-moment';

class infoMain extends Component{

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
       <div id="content">
             <table className="table">
                <thead>
                  <tr>    
                  <th scope="col">id</th>
                  <th scope="col">property id </th>
                   </tr>
                </thead>
                            
            <tbody id="ledgerList">
        
                  {this.props.ledgers.map((ledger,key1)=>{
        
                 if(this.props.lidd==ledger.p_id){
                    return(
                      <tr key={key1}>
                      <td>{ledger.id}</td>
                      <td>{ledger.p_id}</td>
                      <td>1st owner {ledger.new_owner}</td>
                      <td><Moment unix>{ledger.time}</Moment></td>

                      </tr>

                     );
                  }
                   })}
               </tbody>
          </table>    
        </div>
    );
  }
}


export default infoMain;
