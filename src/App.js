import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import ApartmentIndex from './ApartmentIndex'
import ApartmentDetail from './ApartmentDetail'
import Apartments from './store/Apartments'
import EditApartment from './EditApartment'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      apartments: Apartments
    }
  }

  handleFormUpdate(){
    
  }

  renderApartmentDetails(props){
    return (
      <ApartmentDetail foo={this.state.apartments} {...props} />
    )
  }

  renderApartmentIndex(props){
    return (
      <ApartmentIndex foo={this.state.apartments} {...props} />
    )
  }

  renderEditApartment(props){
    return (
      <EditApartment foo={this.state.apartments} {...props} />
    )
  }

  render() {
    return (
      <Router>
        <div className="container">
          <h1>Creepy Apartments For Rent</h1>
            <Route exact path='/' render={this.renderApartmentIndex.bind(this)}
            />

              <Route path='/apartments/:id' render={this.renderApartmentDetails.bind(this)} />
              <Route path='/edit/:id' render={this.renderEditApartment.bind(this)} />
        </div>
      </Router>
    );
  }
}

export default App;
