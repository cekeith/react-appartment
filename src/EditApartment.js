import React, { Component } from 'react'
import {Link} from 'react-router-dom'


class EditApartment extends Component {
  handleSubmit(event){
    s
    event.preventDefault
  }
  render() {
      const id = this.props.match.params.id
      var apartment = this.props.foo.find(function(listing){
        return listing.id === parseInt(id)
      })
      return (
        <div>
          <h2>{apartment.address}</h2>
          <form onSubmit={this.handleFormUpdate(formData)} >
            <input type='submit' value='Submit' />
            <ul>
              <li>Rent: {apartment.rent}</li>
              <li>Bedrooms: {apartment.bedrooms}</li>
              <li>Bathrooms: {apartment.bathrooms}</li>
              <li>Floors: {apartment.floors}</li>
              <li>Paranormal Activity: {apartment.haunt}</li>
            </ul>
            <input type="submit" value="Save"/>
          </form>

          <button type="button" className="btn btn-warning" value="Cancel"><Link to=`/apartments/${id}`>Cancel</Link>

        </div>
    );
  }
}

export default EditApartment;
