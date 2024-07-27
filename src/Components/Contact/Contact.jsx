import React from 'react'
import './Contact.css';
import ContactForm from '../ContactForm/ContactForm';

const Contact = () => {
  return (
    <>
    <div className="contactUs">
      <div className="contactUsImg">
        <img src='\assets\photos\contactUs.jpg' alt='no'/>
      </div>
    </div>

    <ContactForm/>

    <div className="map">
      <h1>Our Location</h1>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.7550511424306!2d85.32568607492259!3d27.69396462608258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19391f32c0ad%3A0xa007428663680911!2sParagon%20Law%20Associates!5e0!3m2!1sen!2snp!4v1720461770927!5m2!1sen!2snp" 
    allowFullScreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    </>
  )
}

export default Contact;
