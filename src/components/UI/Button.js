import React from "react";
import './Button.css';

export default function Button({ content, button_type, size }) {
  let button_class = `button  ${button_type} ${size}`;
  return (
    <div className="button-container">
      <a className={button_class}>{content}</a>
    </div>
  );
}
