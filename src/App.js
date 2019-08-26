import React from 'react';
import Work from './pages/Work';
import './App.css';
import Navbar from './components/widgets/Navbar';
import LandingPage from './pages/landingPage';

function App() {
  return (
    <div style={{marginLeft: '5vw', marginRight: '5vw'}}>
      <Navbar />
      <div className="content">
        <img src={require('./components/images/Line.svg')}/>     
        <div>
          <LandingPage />
          <Work />
        </div>
      </div>

    </div>
  );
}

export default App;
