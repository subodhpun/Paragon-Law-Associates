import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import './Home.css';

export const RangeOfPractice= ()=>{
  return(
  <>
  {/* range of practice */}
   <div className="practiceAreas">
   <div className="practiceAreasImage">
    <img src='/assets/photos/practiceAreas.jpg' alt='No Image'/>
   </div>
   <div className="practiceAreasDes">
    <div className="practiceAreasDesIntro"><h1>Practice Areas</h1></div>
    <div className="practiceAreasDesMain">
            {/* familyLaw */}
      <div className="practiceAreasDiv">
        <div className="LawImg">
          <Link to="/FamilyLaw">
                  <img src='\assets\practiceareas\familyLaw.jpg' alt='no' />
        </Link>
        </div>
        <div className="LawDes">
          <h1><a href='#'>Family Law</a></h1>
        </div>
      </div>
        {/* cyberLaw */}
      <div className="practiceAreasDiv">
      <div className="LawImg">
        <Link to="/CyberLaw">
      <img src='\assets\practiceareas\cyberLaw.png' alt='no'/>
      </Link>
        </div>
        <div className="LawDes">
          <h1><a href='#'>Cyber Law</a></h1>
        </div>
      </div>

      {/* taxlaw */}
      <div className="practiceAreasDiv">
      <div className="LawImg">
        <a href='#'><img src='\assets\practiceareas\taxLaw.jpg' alt='no'/></a>
        </div>
        <div className="LawDes">
          <h1><a href='#'>Tax Law</a></h1>
        </div>
      </div>

      {/* energylaw */}
      <div className="practiceAreasDiv">
      <div className="LawImg">
        <a href='#'><img src='\assets\practiceareas\energyLaw.jpg' alt='no'/></a>
        </div>
        <div className="LawDes">
          <h1><a href='#'>Energy Law</a></h1>
        </div>
      </div>

      {/* labourlaw */}
      <div className="practiceAreasDiv">
      <div className="LawImg">
        <a href='#'><img src='\assets\practiceareas\labourLaw.jpg' alt='no'/></a>
        </div>
        <div className="LawDes">
          <h1><a href='#'>Labour Law</a></h1>
        </div>
      </div>
    </div>
   </div>
   </div>
 </> 
 )
};


const Home = () => {
  return (
    <>
    <div className="homeContainer">
      {/* display */}
      <div className="display">
        {/* <img src='/assets/backgroundImage.jpg' alt='no img' /> */}
        <div className="overlay">
        <div className="mainLine">
           <h1>Paragon Law Associates</h1>
           <h2>"Excellence in service, unwavering in justice."</h2>
           </div>
        </div>
      </div>


      {/* importing range of practice */}
      <RangeOfPractice/>


      {/* firm mermbers */}
      <div className="members">
        <div className="eliteMembers">
          <h1>Our Elite Team Members</h1>
        </div>
        <div className="gaurabDangi">
          <div className="imgForGaurab">
            <a href='https://www.facebook.com/gaurab.dangi' target='_blank'><img src='\assets\photos\gaurabDangi.png' alt='No Image Found' /></a>
          </div>
          <div className="desForGaurab">
            <h1>Gaurab Dangi</h1>
            <h2>Founding Partner</h2>
            <a href='tel:9823520190' target='_blank'>
              <h3><img src='\assets\photos\phoneIcon.png' alt='phone icon' className='phonegmailIcon'/>
              9823520190</h3></a>
         <a href='mailto:subodhmagar07@gmail.com'>
          <h3><img src='\assets\photos\gmailIcon.png' alt='phone icon' className='phonegmailIcon'/>
              angigaurab@gmail.com</h3>
              </a>
          </div>
        </div>

        <div className="bibekMainali">
          <div className="imgForBibek">
          <a href='https://www.facebook.com/bibek.mainali.7' target='_blank'><img src="\assets\photos\bibekMainali.png" alt="No Image" /></a>
          </div>
          <div className="desForBibek">
          <h1>Bibek Mainali</h1>
          <h2>Managing Partner</h2>
          <a href='tel:9823520190' target='_blank'>
              <h3><img src='\assets\photos\phoneIcon.png' alt='phone icon' className='phonegmailIcon'/>
              9823520190</h3></a>
         <a href='mailto:subodhmagar07@gmail.com'>
          <h3><img src='\assets\photos\gmailIcon.png' alt='phone icon' className='phonegmailIcon'/>
              angigaurab@gmail.com</h3>
              </a>
            </div>
        </div>

        <div className="otherMembers">
          <div className="member1">
            <div className="member1Img">
            <img src='\assets\photos\balKrishna.png' alt='no'/>
            </div>
            <div className="member1Des">
              <h1>Bal Krishna Gajurel</h1>
              <h1>Senior Associate</h1>
              <a href='tel:9823520190' target='_blank'>
              <h3><img src='\assets\photos\phoneIcon.png' alt='phone icon' className='phonegmailIcon'/>
              9823520190</h3></a>
         <a href='mailto:subodhmagar07@gmail.com'>
          <h3><img src='\assets\photos\gmailIcon.png' alt='phone icon' className='phonegmailIcon'/>
              angigaurab@gmail.com</h3>
              </a>
            </div>
          </div>
          <div className="member2">
            <div className="member2Img">
            <img src='\assets\photos\kiran.png' alt='no'/>
            </div>
            <div className="member2Des">
              <h1>Kiran Prasad Subedi</h1>
              <h1>Senior Associate</h1>
              <a href='tel:9823520190' target='_blank'>
              <h3><img src='\assets\photos\phoneIcon.png' alt='phone icon' className='phonegmailIcon'/>
              9823520190</h3></a>
         <a href='mailto:subodhmagar07@gmail.com'>
          <h3><img src='\assets\photos\gmailIcon.png' alt='phone icon' className='phonegmailIcon'/>
              angigaurab@gmail.com</h3>
              </a>
            </div>
          </div>
          <div className="member3">
            <div className="member3Img">
            <img src='\assets\photos\sunil.png' alt='no'/>
            </div>
            <div className="member3Des">
            <h1>Sunil Acharya</h1>
            <h1>Associate</h1>
              <a href='tel:9823520190' target='_blank'>
              <h3><img src='\assets\photos\phoneIcon.png' alt='phone icon' className='phonegmailIcon'/>
              9823520190</h3></a>
         <a href='mailto:subodhmagar07@gmail.com'>
          <h3><img src='\assets\photos\gmailIcon.png' alt='phone icon' className='phonegmailIcon'/>
              angigaurab@gmail.com</h3>
              </a>
            </div>
          </div>
        </div>
         </div>

      {/* footer */}
      <Footer/>
      </div>
    </>
  );
}

export default Home;
