import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./RegisterForm.css";

export default function RegisterForm() {
  // A method for validating the password
  const checkValidPassword = (given_password) => {};

  // A method for validating the email
  let regex = ""; // a regex that represents an e-mail
  const checkValidEmail = (given_email) => {};

  // Multiple states for the information that is given from the user
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  // Handle onChange events
  const onChangeEmailHandler = (event) => {
    console.log("changed email");
    setEmail(event.target.value);
  };
  const onChangeUsernameHandler = (event) => {
    setUsername(event.target.value);
  };
  const onChangePasswordHandler = (event) => {
    console.log("changed password");
    setPassword(event.target.value);
  };

  const onChangeRememberHandler = (event) => {
    setRememberMe(event.target.value);
  };

  return (
    <div className="register-container">
      <div className="register-layer"></div>
      <form id="register-form">
        <div className="register-title">Register</div>
        <div className="register-item">
          <p className="register-form__label">Username</p>
          <input
            type="text"
            value={username}
            className="register-form__input"
            onChange={onChangeUsernameHandler}
          />
        </div>
        <div className="register-item">
          <p className="register-form__label">E-mail</p>
          <input
            type="text"
            value={email}
            className="register-form__input"
            onChange={onChangeEmailHandler}
          />
        </div>

        <div className="register-item">
          <p className="register-form__label">Password</p>
          <input
            type="password"
            value={password}
            className="register-form__input"
            onChange={onChangePasswordHandler}
          />
        </div>
        <div className="register-item">
          <input
            type="checkbox"
            onChange={onChangeRememberHandler}
            className="register-form__checkbox"
            checked={rememberMe}
          />
          <span className="checkbox-custom"></span>
        </div>
        <div className="register-item">
          <button type="submit" className="register-form__submit-button">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
