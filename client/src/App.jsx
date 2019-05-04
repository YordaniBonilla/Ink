/*
import React from 'react'
import moment from 'moment'
*/
import React, { Component } from 'react';
// RHL only for front end development
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './Components/Home.jsx'
import Book from './Components/Book.jsx'
import Navigation from './Components/Navigation.jsx'
import axios from 'axios';
import MapContainer from './Components/MapContainer.jsx'
import OMG from './Components/Nat.jsx'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoginOpen: true,
      isRegisterOpen: false
    };
  }

  render() {
    return (

      <BrowserRouter>
        <div >
      
          <Navigation />

           {/*data={this.state.styles} selectStyles={this.selectStyles} style={this.state.style}*/}
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/map" component={MapContainer }></Route>
              <Route path="/login" ></Route>   
              <Route path="/nat" component={OMG}></Route>                
            </Switch>
        </div>
        
      </BrowserRouter>
    )
  }
}
// hot export works with RHL. Remove line 11 when starting fullstack integration
export default App;
// Uncomment line 13 & delete line 11 when starting fullstack integration
// export default App;
