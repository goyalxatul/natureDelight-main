// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Gallery from './Components/Gallery/Gallery';
import Footer from './Components/Footer/Footer';
import Contacts from './Components/Contacts/Contacts';
import VisionMission from './Components/VisionMission/VisionMission';
import Hero from './Components/Hero/Hero';
import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy'; // Import Privacy Policy component

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about/vision-mission" element={<VisionMission />} />
        <Route path="/about/contacts" element={<Contacts />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} /> {/* Updated to render the component */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;




        

