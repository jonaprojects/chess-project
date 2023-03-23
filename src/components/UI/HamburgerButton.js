import React, {useState} from "react";
import "./HamburgerButton.css";
import { ReactComponent as HamburgerSVG } from "./hamburger.svg";

export default function HamburgerButton(props) {
  return (
    <div className="hamburger-component__container">
      <div className="hamburger-menu invisible">
        <nav className="hamburger-menu__nav">
          <ul className="hamburger-menu__list">
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
          </ul>
        </nav>
      </div>
      <div className="hamburger-button__container">
        <HamburgerSVG style={{ height: 25, width: 25 }} fill="white" />
      </div>
    </div>
  );
}
