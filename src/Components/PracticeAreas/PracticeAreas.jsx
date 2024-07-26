import React from 'react'
import './PracticeAreas.css';
import Footer from '../Footer/Footer';
import { RangeOfPractice } from '../Home/Home';
const PracticeAreas = () => {
  return (
    <>
    {/* practiceareasTitles */}
    <div className="practiceAreasContainer">
    <div className="practiceAreasImg">
      <img src='\assets\practiceareas\practiceAreasTitleImg.jpg' alt='no img'/>
    </div>
    <div className="practiceAreasTitle">
      <h1>Comprehensive Legal Expertise for Your Diverse Needs</h1>
    </div>
    </div>

    {/* practiceAreas */}
    <RangeOfPractice/>

    <Footer/>
    </>
  )
}

export default PracticeAreas;
