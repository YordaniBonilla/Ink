import React, {Component} from 'react';

export default class LoginBox extends React.Component {
    constructor(props) {
      super(props);
      this.state = {  

      };
      this.submitLogin =this.submitLogin.bind(this);
    }
    
    submitLogin() {

    }

    render() {
      return(
        <div className="inner-container">
         <div className="header">
        Login
        </div>
        <div className="box">
        <div className="input-group">
        <label htmlFor="userName"> username</label>
        <input type="text" name="username" className="login-input" placeholder="username"/>
        </div>
        
        <div className="input-group">
        <label htmlFor="password">password</label>
        <input type="text" name="password" className="login-input" placeholder="password"/>
        </div>
        <button type="button" className="login-btn" onClick={this.submitLogin}>Login</button>
        </div>

        </div>
      )
    }
  }