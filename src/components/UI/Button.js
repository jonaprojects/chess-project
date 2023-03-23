import React from "react";
import './Button.css';
import {Link} from 'react-router-dom';

export default function Button({ content, button_type, size, link=null}) {
  let button_class = `button  ${button_type} ${size}`;
  let link_jsx = <a  className={button_class}>{content} </a>;
  if(link_jsx !== null){
    link_jsx = <Link to={link} className={button_class}>{content}</Link>;
  }
  return (
    <div className="button-container">
      {link_jsx}
    </div>
  );
}
