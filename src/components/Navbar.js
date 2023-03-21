import React from "react";
import "./Navbar.css";
import Button from './UI/Button.js';
/*
A dummy component for the navbar 
*/
export default function Navbar(props) {
  return (
    <div className="navbar-container">
      <div className="navbar-container__logo">
        <div className="navbar-logo__container">
          <a className="navbar-logo">Logo</a>
        </div>
      </div>
      <div className="navbar-container__center">
        <div className="navbar-link__container">
          <a className="navbar-link">Features</a>
        </div>
        <div className="navbar-link__container">
          <a className="navbar-link">About</a>
        </div>
        <div className="navbar-link__container">
          <a className="navbar-link">Contact</a>
        </div>
      </div>

      <div className="navbar-container__end">
        <Button content="Login" size="medium" button_type="primary"/>
        <Button content="Register" size="medium" button_type="secondary"/>
      </div>
    </div>
  );
}
