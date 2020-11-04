import React from 'react'
import ControlledCarousel from './ControlledCarousel'
import Navbar from './navBar'
import './LandingPage.css'

function LandingPage() {
  return (
    <div className="div-container">
    <Navbar />
      <div>
      <ControlledCarousel />
      </div>
      <div className="div-container">
      
      </div>
    </div>
  );
}

export default LandingPage;