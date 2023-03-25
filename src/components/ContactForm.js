import React from "react";
import "./ContactForm.css";

export default function ContactForm(props) {
  return (
    <div className="contact-form__container">
      <div className="contact-form__layer"></div>
      <form>
        <div className="contact-form__title">Contact Us</div>
        <div className="contact-form__label">First name</div>
        <input type="text" className="contact-form__input" />
        <div className="contact-form__label">E-mail</div>
        <input type="text" className="contact-form__input" />
        <div className="contact-form__label">Message</div>
        <textarea className="contact-form__input" />
        <button type="submit" className="contact-form__submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}
