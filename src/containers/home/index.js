import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomeContainer extends Component {
  state = {};
  render() {
    return (
      <div className="home-container">
        I AM HOME <Link to="/login">Go to Login</Link>
      </div>
    );
  }
}

export default HomeContainer;
