import React from "react";
import "./Hero.css";
import Navbar from "./Navbar.js";
import Button from "./UI/Button.js";

export default function Hero(props) {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <Navbar />
        <div className="main-content">
          <div class="main-content__h1">ChessForward</div>
          <div class="main-content__subheader">
            The
            <span className="dynamic-word"> next </span>
            gen of chess.
          </div>
          <div className="main-content__buttonList">
            <Button content="Login" size="medium" button_type="primary" />
            <Button content="Register" size="medium" button_type="secondary" />
          </div>
        </div>
      </div>
    </div>
  );
}
