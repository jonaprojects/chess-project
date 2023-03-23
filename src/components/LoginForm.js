import React, { useState } from "react";
import "./LoginForm.css";

export default function LoginForm() {
  // A method for validating the password
  const checkValidPassword = (given_password) => {};

  // A method for validating the email
  let regex = ""; // a regex that represents an e-mail
  const checkValidEmail = (given_email) => {};
  // Multiple states for the information that is given from the user
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  // Handle onChange events
  const onChangeUsernameHandler = (event) => {
    console.log("changed username");
    setUsername(event.target.value);
  };
  const onChangePasswordHandler = (event) => {
    console.log("changed password");
    setPassword(event.target.value);
  };
  const onChangeEmailHandler = (event) => {
    console.log("changed email");
    setEmail(event.target.value);
  };
  return (
    <div className="login-container">
      <form id="login-form">
        <div className="login-title">
          <h1>Login</h1>
        </div>
        <div className="login-item">
          <p>Username:</p>
          <input
            type="text"
            value={username}
            className="form-input__text"
            onChange={onChangeUsernameHandler}
          />
        </div>
        <div className="login-item">
          <p>Password:</p>
          <input
            type="text"
            value={password}
            className="form-input__text"
            onChange={onChangePasswordHandler}
          />
        </div>
        <div className="login-item">
          <p>E-mail:</p>
          <input
            type="text"
            value={email}
            className="form-input__text"
            onChange={onChangeEmailHandler}
          />
        </div>
        <button type="submit" className="submit-button">
          Login
        </button>
      </form>
    </div>
  );
}
