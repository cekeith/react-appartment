import React, { Component } from 'react'
import {Link} from 'react-router-dom'


class ApartmentIndex extends Component {
  render() {
    let list = this.props.foo.map(function(apartment){
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
