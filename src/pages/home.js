import React from 'react';
import Work from './Work';
import '../App.css';
import Navbar from '../components/widgets/Navbar';
import LandingPage from './landingPage';
import ContactFooter from '../components/widgets/ContactFooter';

function App() {
  return (
    <div className='MainPage'>
      <Navbar />
      <div className="content">
        <div>
          <LandingPage />
          <Work />
        </div>
      </div>
      <ContactFooter />

    </div>
  );
}

export default App;
