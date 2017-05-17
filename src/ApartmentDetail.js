import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Apartments from './store/Apartments'

class ApartmentDetail extends Component {
  constructor(props){
    super(props)
    this.state = {
      apartments: Apartments
    }
  }
  componentWillMount(){
    const id = this.props.match.params.id
    this.setState({apartmentId: id})
    let apartment = this.state.apartments.find(function(listing){
      return listing.id === parseInt(id)
    })
    if(apartment){
      this.setState({apartment: apartment})
    }
  }
  render() {
      return (
        <div>
          <h2>{this.state.apartment.address}</h2>
          <ul>
            <li>Rent: {this.state.apartment.rent}</li>
            <li>Bedrooms: {this.state.apartment.bedrooms}</li>
            <li>Bathrooms: {this.state.apartment.bathrooms}</li>
            <li>Floors: {this.state.apartment.floors}</li>
            <li>Paranormal Activity: {this.state.apartment.haunt}</li>
          </ul>
          <button type="button" className="btn btn-warning" value="Home"><Link to='/'>Home</Link>
          </button>
        </div>
    );
  }
}

export default ApartmentDetail;
