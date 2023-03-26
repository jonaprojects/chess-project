import React from "react";
import "./ErrorPage.css";
import "../components/Navbar.js";
import Navbar from "../components/Navbar.js";
import { Link } from "react-router-dom";


export default function ErrorPage(props) {
  return (
    <div className="error-page__container">
      <Navbar />
      <main className="error-page__main-content">
        <div className="error-page__title">Oops!</div>
        <div id="error-page__text">
          It seems something went wrong, <br className="error-page__new-line" /> we'll look into it!
        </div>
        <Link className="error-page__back-home" to="/">Go Back Home</Link>
      </main>
    </div>
  );
}
