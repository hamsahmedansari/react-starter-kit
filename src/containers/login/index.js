import React, { Component } from "react";
import { Link } from "react-router-dom";

class LoginContainer extends Component {
  state = {};
  render() {
    return (
      <div className="login-container">
        I AM Login <Link to="/">Go to Home</Link>
      </div>
    );
  }
}

export default LoginContainer;
