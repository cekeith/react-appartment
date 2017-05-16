import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Apartments from './store/Apartments'

class ApartmentIndex extends Component {
  componentWillMount(){
    this.setState({apartments: Apartments})
  }
  render() {
    let list = this.state.apartments.map(function(apartment){
      return (
        <li key={apartment.id}>
          <Link to={`/apartments/${apartment.id}`} >
            {apartment.address}
          </Link>
        </li>
        )
      })
      return(
        <ul>
          {list}
        </ul>
    );
  }
}

export default ApartmentIndex
