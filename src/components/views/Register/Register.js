import React, { Component } from 'react';

class Register extends Component {
  render() {
    return (
      <div className="Register container">
        <h2>Register</h2>
        <hr/>
        <div className="col-md-4 col-md-offset-4">
          <form className="layout-vertical" id="register-form">
            <div className="layout-horizontal form-group">
              <label htmlFor="email" className="col-sm-3">Email</label>
              <input type="email" name="email" id="email" className="flex"/>
            </div>
            <div className="layout-horizontal form-group">
              <label htmlFor="password" className="col-sm-3">Password</label>
              <input type="password" name="password" id="password" className="flex"/>
            </div>
            <div className="layout-horizontal form-group">
              <label htmlFor="password_confirm" className="col-sm-3">Password again</label>
              <input type="password" name="password_confirm" id="password_confirm" className="flex"/>
            </div>
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;