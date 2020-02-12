import React , {Component} from 'react';
import Admin from './Admin';


class Admin1 extends Component{

  render()
  {
    return(
  <div id="content">
       <h1>Add Property</h1>
          <form onSubmit={(event) => {
            event.preventDefault()
            const name = this.propertyName.value
            const des = this.propertyDes.value
            const owner = this.propertyOwner.value
            const type= this.propertyType.value
            this.props.createProperty(name,des,owner,type)
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