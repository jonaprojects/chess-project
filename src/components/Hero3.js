import React from "react";
import "./Hero3.css";
import Button from "./UI/Button.js";
export default function Hero3(props) {
  return (
    <div className="hero3-container">
      <div className="hero3-content">
        <div className="hero3-title">Train with the <span className="gold-text">best</span> engines </div>
        <div className="hero3-paragraph__container">
          <p className="hero3-paragraph">
            Playing with chess engines is a great way to improve your game and
            test your skills against a computer opponent. These engines offer
            varying levels of difficulty and helpful features such as move
            analysis and practice scenarios to enhance your strategy.
          </p>
        </div>
        <div className="hero3-buttons">
            <Button content="Try it" button_type="primary" size="large"/>
            <Button content="Learn More" button_type="secondary" size="large"/>
        </div>
      </div>
    </div>
  );
}
