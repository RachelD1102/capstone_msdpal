import React from 'react';
import './LandingPage.css';
import ControlledCarousel from '../ControlledCarousel';
import Navbar from '../navBar'
function LandingPage() {
  return (
    <div>
    <Navbar />
    <ControlledCarousel />
    </div>
  );
}

export default LandingPage;