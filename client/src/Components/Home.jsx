import React from 'react';
import ReactDom from 'react-dom';
import LoginBox from './LoginBox.jsx';
import Register from './Register.jsx';
<<<<<<< HEAD

=======
>>>>>>> d22b7c28b5f8436001d5401cc6c8418fbe1d2eef

class Home extends React.Component {

    constructor(props){
        super(props);
        this.state = {};
    }
    submitLogin(e) {
        
    }
    submitRegister(e) {
        
    }
    render(){
        return (
          <div className="root-container"> 
        
          <div className="box-controller">
          <div className="controller">
            <LoginBox/>
          </div>
<<<<<<< HEAD
                 
=======
>>>>>>> d22b7c28b5f8436001d5401cc6c8418fbe1d2eef
          <div className="controller">
            <Register />
          </div>
          </div>
          <div className="box-container">
          </div>
          </div>
        )}
    }

export default Home;

