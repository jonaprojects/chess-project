import React from "react";
import "./Hero2.css";
import Button from "./UI/Button.js";
export default function Hero2(props) {
  return (
    <div className="hero2-container">
      <div className="hero2-container__content">
        <div className="hero2-title">Build 
        <span className="gold-text"> Your Own </span>
         Chess Puzzles</div>
        <p className="hero2-paragraph">
          Introducing our exciting new feature - the ability to create and share
          your own chess riddles! With this unique feature, you can unleash your
          creativity and challenge other chess players to solve your
          mind-bending puzzles. Simply use our intuitive puzzle creator to
          design your own board positions and set the challenge level, then
          share it with the community for them to try and solve.
        </p>
        <div className="hero2-buttons">
            <Button content="Try it" button_type="primary" size="large"/>
            <Button content="Learn More" button_type="secondary" size="large"/>
        </div>
      </div>
    </div>
  );
}
