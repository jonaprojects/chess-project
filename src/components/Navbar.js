import React from "react";
import "./Navbar.css";
import Button from './UI/Button.js';
import HamburgerButton from "./UI/HamburgerButton.js";
import {NavLink} from 'react-router-dom';
/*
A dummy component for the navbar 
*/
export default function Navbar(props) {
  return (
    <div className="navbar-container">
      <div className="navbar-container__logo">
        <div className="navbar-logo__container">
          <NavLink className="navbar-logo" to="/">ChessForward</NavLink>
        </div>
      </div>
      <div className="navbar-container__center">
        <div className="navbar-link__container">
          <NavLink className="navbar-link">Puzzles</NavLink>
        </div>
        <div className="navbar-link__container">
          <NavLink className="navbar-link" to="/game">Play</NavLink>
        </div>
        <div className="navbar-link__container">
          <NavLink className="navbar-link">Contact</NavLink>
        </div>
      </div>

      <div className="navbar-container__end">
        <Button content="Login" size="medium" button_type="primary" link="/login"/>
        <Button content="Register" size="medium" button_type="secondary"/>
      </div>
      <HamburgerButton/>
    </div>
  );
}
