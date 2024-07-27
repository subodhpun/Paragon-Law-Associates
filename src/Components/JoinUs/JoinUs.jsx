import React from 'react'
import './JoinUs.css'
import ContactForm from '../ContactForm/ContactForm'

const JoinUs = () => {
  return (
    <>
    <div className="joinUsContainer">
        <div className="joinUsImg">
            <img src='\assets\photos\joinUs.jpg' alt='no'/>
        </div>
        <div className="joinUsSection">
            <div className="joinUsIntro">
                <h1>Join Us</h1>
                <p>Are you looking to advance your legal career in a supportive and dynamic environment? Join our prestigious 
                    law firm, where we welcome both fresh graduates and seasoned professionals. At Paragon Law Associates, 
                    we value diverse perspectives and foster a culture of continuous learning and professional growth. 
                    Whether you're just starting out or looking to take the next step in your career, we offer comprehensive training, 
                    mentorship, and the opportunity to work on a wide range of challenging and rewarding cases. Become a part of our dedicated team, 
                    and contribute to a firm that prides itself on excellence, integrity, and client-focused service.</p>
            </div>

            <ContactForm/>
            {/* form */}
            {/* <div className="joinUsForm">
                <div className="contactTitle"><h1>Contact Us</h1></div>
                <div className="firstLastName">
                <div className="name">
                    <label for id='first'>First Name<span className="req">*</span></label>
                    <input type='text' id='first' placeholder='Enter your first name' required/>
                </div>
                <div className="name">
                    <label for id='last'>Last Name<span className="req">*</span></label>
                    <input type='text' id='last' placeholder='Enter your first name'required/>
                </div>
                </div>


                <div className="email">
                    <label for id='email'>Email<span className="req">*</span></label>
                    <input type='email' placeholder='Enter Email Address' id='email'/>
                    </div>

                    <div className="feedback">
                        <input type='text' placeholder='Feedback' id='feedback'/>
                    </div>

                    <div className="submitBtn">
                        <button type='submit'>SUBMIT</button>
                    </div>
            </div> */}
        </div>
    </div>
    </>
  )
}

export default JoinUs;
