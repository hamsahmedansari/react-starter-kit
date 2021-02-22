import React from "react";
import { Link } from "react-router-dom";

const HomeContainer = () => {
  return (
    <div className="home-container">
    I AM HOME <Link to="/login">Go to Login</Link>
  </div>
  );
}

export default HomeContainer;