import React, { useState } from "react";
import {Link} from 'react-router-dom';

import "./LoginForm.css";

export default function LoginForm() {
  // A method for validating the password
  const checkValidPassword = (given_password) => {};

  // A method for validating the email
  let regex = ""; // a regex that represents an e-mail
  const checkValidEmail = (given_email) => {};
  // Multiple states for the information that is given from the user
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle onChange events
  const onChangeEmailHandler = (event) => {
    console.log("changed email");
    setEmail(event.target.value);
  };

  const onChangePasswordHandler = (event) => {
    console.log("changed password");
    setPassword(event.target.value);
  };

  return (
    <div className="login-container">
      <div className="login-layer"></div>
      <form id="login-form">
        <div className="login-title">Login</div>
        <div className="login-item">
          <p className="login-form__label">E-mail</p>
          <input
            type="text"
            value={email}
            className="form-input__text"
            onChange={onChangeEmailHandler}
          />
        </div>

        <div className="login-item">
          <p className="login-form__label">Password</p>
          <input
            type="password"
            value={password}
            className="form-input__text"
            onChange={onChangePasswordHandler}
          />
        </div>
        <div className="login-item">
          <div className="login-form__forgot-password">
            <Link to="/forgotPassword">forgot your password?</Link>
            
          </div>
        </div>
        <button type="submit" className="login-form__submit-button">
          Login
        </button>
      </form>
    </div>
  );
}
