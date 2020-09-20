import React from 'react'
import NavBar from '../NavBar/NavBar';
import './Contact.scss';

export default function Contact() {
    return (
        <div className="contact">
            <NavBar />
            <form className="contact__form">
                <span className="contact__form-us">Contact Us</span>
                <input className="contact__form-firstname" type="text" placeholder="First Name" required/>
                <input className="contact__form-lastname"  type="text" placeholder="Last Name" required/>
                <input className="contact__form-email"  type="text" placeholder="Email" required/>
                <textarea className="contact__form-textarea"  type="text" placeholder="Questions/Comments" required></textarea>
                <button className="contact__form-button">Submit</button>
            </form>
        </div>
    )
}
