import React, {Component} from 'react';

export default class Register extends  React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    submitRegister(e) {
      
    }

    render() {
      return(
        <div className="inner-container">
        <div className="header">
        Register
        </div>
        <div className="box">
        <div className="input-group">
        <label htmlFor="userName">username</label>
        <input type="text" name="username" placeholder="username"/>
        </div>
        
        <div className="input-group">
        <label htmlFor="password"> password</label>
        <input type="text" name="password" placeholder="passweord"/>
        </div>
        <button type="button" className="login-btn" onClick={this.submitRegister.bind(this)}>Register</button>
        </div>

        </div>
      )
    }
  }


