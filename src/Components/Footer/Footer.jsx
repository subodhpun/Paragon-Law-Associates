import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
     {/* contact */}
     <div className='contactContainer'>
     <div className="contactDiv">
        <div className="addressInfo">
          <h1>PARAGON LAW ASSOCIATES</h1>
          <h3>LAW FIRM REG. NO: XXXXXX/XXX</h3>
          {/* location */}
          <div className="location">
          <img src='\assets\photos\location.png' alt='no'/>
          <h3>Anamnagar-29, Kathmandu, Nepal</h3>
          </div>

          {/* phonecall */}
          <div className="location">
          <img src='\assets\photos\phone-call.png' alt='no'/>
          <h3>
          984-5062652</h3>
          </div>

          {/* gmail */}
          <div className="location">
          <img src='\assets\photos\mail.png' alt='no'/>
          <h3> nfo@lawparagon.com </h3>
          </div>

         </div>
        <div className="practiceAreasLinks">
          <h1>Practice Areas</h1>
          <ul>
            <li><a href='#'>Family Law</a></li>
            <li><a href='#'>Cyber Law</a></li>
            <li><a href='#'>Tax Law</a></li>
            <li><a href='#'>Energy Law</a></li>
            <li><a href='#'>Labour Law</a></li>
          </ul>
        </div>
        <div className="openingHours">
          <h1>Opening Hours:</h1>
          <h3>10 A.M - 5 P.M.</h3>
        </div>
      </div>
    </div>

    {/* footer */}
    <footer>
    <div className="footerContainer">
      <div className="socialMedia">
        <a href='https://www.facebook.com/p/Paragon-Law-Associates-100092527039351/' target='_blank'><img src='\assets\photos\facebook.png' alt='no img'/></a>
        <a href='https://www.instagram.com/paragonlawassociates/' target='_blank'><img src='\assets\photos\instagram.png' alt='no img'/></a>
      </div>
      <div className="copyright">
        <p>&copy; 2024 All Rights Reserved Paragon Law Associates-Law Firm. All our Lawyers are liscensed from the Bar Council Nepal.</p>
      </div>
      <div className="developedBy">
        <p>Developed By:<a href='http://subodhpun.com.np/' target='_blank'><strong>Subodh Kiran Pun Magar</strong></a></p>
      </div>
    </div>
    </footer>
    </>
  )
}

export default Footer;
