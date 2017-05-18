import React, { Component } from 'react'
import {Link} from 'react-router-dom'


class ApartmentDetail extends Component {
  render() {
      const id = this.props.match.params.id
      var apartment = this.props.foo.find(function(listing){
        return listing.id === parseInt(id)
      })
      return (
        <div>
          <h2>{apartment.address}</h2>
          <ul>
            <li>Rent: {apartment.rent}</li>
            <li>Bedrooms: {apartment.bedrooms}</li>
            <li>Bathrooms: {apartment.bathrooms}</li>
            <li>Floors: {apartment.floors}</li>
            <li>Paranormal Activity: {apartment.haunt}</li>
          </ul>
          <button type="button" className="btn btn-warning" value="Home"><Link to='/'>Home</Link>
          <button type="button" className="btn btn-warning" value="Edit"><Link to=`/edit/${id}`>Edit</Link>
          </button>
        </div>
    );
  }
}

export default ApartmentDetail;
