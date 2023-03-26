import React from 'react';
import RegisterForm from '../components/RegisterForm.js';
import './Register.css';

export default function Register(props){
    return (
        <div className="register-page__container">
            <RegisterForm/>
        </div>
    );
}