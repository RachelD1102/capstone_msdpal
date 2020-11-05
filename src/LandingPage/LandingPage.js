import React from 'react'
import ControlledCarousel from './ControlledCarousel'
import Navbar from './navBar'
import './LandingPage.css'

function LandingPage() {
  return (
    <div>
    <Navbar />
      <div>
      <ControlledCarousel />
      </div>
    </div>
  );
}

export default LandingPage;