import React from "react";
import "./Navbar.css";
import Button from './UI/Button.js';
import HamburgerButton from "./UI/HamburgerButton.js";
import {NavLink, Link} from 'react-router-dom';
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
          <NavLink className="navbar-link" to="/puzzles">Puzzles</NavLink>
        </div>
        <div className="navbar-link__container">
          <NavLink className="navbar-link" to="/game">Play</NavLink>
        </div>
        <div className="navbar-link__container">
          <NavLink className="navbar-link" to='/about'>About</NavLink>
        </div>
      </div>

      <div className="navbar-container__end">
        <Button content="Login" size="medium" button_type="primary" link="/login"/>
        <Button content="Register" size="medium" button_type="secondary" link="/register"/>
      </div>
      <HamburgerButton/>
    </div>
  );
}
