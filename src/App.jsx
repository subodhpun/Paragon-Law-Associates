import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/NavBar/Navbar'
import Home from './Components/Home/Home';
import PracticeAreas from './Components/PracticeAreas/PracticeAreas';
import About from './Components/About/About';
import JoinUs from './Components/JoinUs/JoinUs'
import Contact from './Components/Contact/Contact';
import FamilyLaw from './Components/FamilyLaw/FamilyLaw';
import CyberLaw from './Components/CyberLaw/CyberLaw';
import './App.css';
function App() {

  return (
    <>
    {/* navbar */}
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path ="/" element={<Home/>}/>
        <Route path="/PracticeAreas" element={<PracticeAreas/>}/>
        <Route path="/FamilyLaw" component={<FamilyLaw/>} />
        <Route path="/CyberLaw" component={<CyberLaw/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/JoinUs" element={<JoinUs/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
    </Router> 
    </>
  );
}

export default App;
