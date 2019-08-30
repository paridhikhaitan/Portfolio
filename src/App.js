import React from 'react';
import Work from './pages/Work';
import './App.css';
import Navbar from './components/widgets/Navbar';
import LandingPage from './pages/landingPage';

function App() {
  return (
    <div className='MainPage'>
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
