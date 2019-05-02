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
        styles : [],
        style: {},
        

    };
    this.selectStyles = this.selectStyles.bind(this)
   
  }

  componentDidMount(){
    axios.get('/home')
    .then(res => {
      console.log("this is my res:", res.data)
      this.setState({
        styles : res.data,
        })

    })
    .catch(err => {
      console.log("this is my err:", err);
    });

    axios.get('/home-images')
    .then(res => {
      console.log("this is my res:", res.data)
      this.setState({
        images : res.data,
        })

    })
    .catch(err => {
      console.log("this is my err:", err);
    })



 }

 selectStyles(id) {
     const { styles } = this.state;
     console.log(typeof styles[0].id)
     console.log(typeof id)
     const style = styles.filter(style => +id === style.id);
     this.setState({
       style: style[0]
    })
 }



  render() {
    return (

      <BrowserRouter>
        <div >
          <Navigation />


            <Switch>
              <Route exact path="/" render={(props) => <Home {...props} data={this.state.styles} selectStyles={this.selectStyles} style={this.state.style}/>} />
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
