import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';
const ContactForm = () => {
    const[isSubmit, setIsSubmit]=useState(false);
    const[stateMessage, setStateMessage]= useState(null);
    const form = useRef();

    const sendEmail=(e)=>{
        e.preventDefault();
        setIsSubmit(true);

        emailjs.send(
            process.env.service_m0w7ka6,
            process.env.template_j59irio,
            e.target,
            process.env.evnU6mcjAEJAWmLx1
        )

        .then(
            (result)=>{
                setStateMessage('Message Sent');
                setIsSubmit(false);
                setTimeout(()=>{
                    setStateMessage(null);
                },5000);//hides message after 5s
            },
            (error)=>{
                setStateMessage('Something went wrong, please try again later!');
                setIsSubmit(false);
                setTimeout(()=>{
                    setStateMessage(null);
                }, 5000); //hides message after 5s
            }
        );
        e.target.reset(); //clears the form after sending 
    };

  return (
    <div className="ContactFormMainContainer">
            <form className="joinUsForm" ref={form} onSubmit={sendEmail}>
            <div className="contactTitle"><h1>Contact Us</h1></div>
                <div className="firstLastName">
                <div className="name">
                    <label htmlFor='first' id='firstName'>First Name<span className="req">*</span></label>
                    <input type='text' name='from_name' id='first' placeholder='Enter your first name' required/>
                </div>
                <div className="name">
                    <label htmlFor='last' id='lastName'>Last Name<span className="req">*</span></label>
                    <input type='text' id='last' placeholder='Enter your first name'required/>
                </div>
                </div>


                <div className="email">
                    <label htmlFor='Email' id='emailId' >Email<span className="req">*</span></label>
                    <input type='email' name='from_email' placeholder='Enter Email Address' id='email' required/>
                    </div>

                    <div className="feedback">
                        <input type='text' name='message' placeholder='Feedback' id='feedback'/>
                    </div>

                    <div className="submitBtn">
                    <button type='submit' disabled={isSubmit}>SUBMIT</button>
                        {stateMessage && <p>{stateMessage}</p>}
                    </div>
            </form>
    </div>
  );
}
export default ContactForm;
