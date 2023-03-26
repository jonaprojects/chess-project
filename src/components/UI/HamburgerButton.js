import React, { useState } from "react";
import "./HamburgerButton.css";
import { ReactComponent as HamburgerSVG } from "./hamburger.svg";
import { ReactComponent as CloseSVG } from "./close.svg";
import { NavLink } from "react-router-dom";

export default function HamburgerButton(props) {
  const [modalOpen, setModalOpen] = useState(false);
  const hamburgerOnClickHandler = (event) => {
    setModalOpen(true);
  };
  const closeClickHandler = (event) => {
    setModalOpen(false);
  };

  const NavLinkOnClickHandler = (event) => {
    setModalOpen(false);
  };
  let hamburgerMenuClass = "hamburger-menu invisible";
  let hamburgerSVG_JSX = (
    <HamburgerSVG
      style={{ height: 25, width: 25 }}
      fill="white"
      onClick={hamburgerOnClickHandler}
    />
  );
  let closeSVG_JSX = <></>;
  if (modalOpen) {
    hamburgerMenuClass = "hamburger-menu open";
    hamburgerSVG_JSX = <></>;
    closeSVG_JSX = (
      <CloseSVG
        style={{ height: 25, width: 25 }}
        fill="white"
        onClick={closeClickHandler}
      />
    );
  }
  return (
    <div className="hamburger-component__container">
      <div className={hamburgerMenuClass}>
        <div className="hamburger-menu__close-button">{closeSVG_JSX}</div>
        <nav className="hamburger-menu__nav">
          <ul className="hamburger-menu__list">
            <li>
              <NavLink to="/" onClick={NavLinkOnClickHandler}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/game" onClick={NavLinkOnClickHandler}>
                Play
              </NavLink>
            </li>
            <li>
              <NavLink to="/puzzles" onClick={NavLinkOnClickHandler}>
                Puzzles
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" onClick={NavLinkOnClickHandler}>
                Login
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="hamburger-button__container">{hamburgerSVG_JSX}</div>
    </div>
  );
}
