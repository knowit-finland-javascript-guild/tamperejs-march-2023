import React from "react";
import logo from "assets/logo.svg";
import "./loadingSpinner.css";

export const LoadingSpinner = () => {
  return (
    <div className="LoadingWrapper">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Loading</p>
    </div>
  );
};

export default LoadingSpinner;
