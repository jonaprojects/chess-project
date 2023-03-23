import React from "react";
import "./Hero.css";
import Button from "./UI/Button.js";

export default function Hero(props) {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="main-content">
          <div className="main-content__h1"> ChessForward</div>
          <div className="main-content__subheader">
            The
            <span className="dynamic-word"> next </span>
            gen of chess.
          </div>
          <div className="main-content__buttonList">
            <Button content="Login" size="large" button_type="primary" />
            <Button content="Register" size="large" button_type="secondary" />
          </div>
        </div>
      </div>
    </div>
  );
}
