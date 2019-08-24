import React from 'react';
import Work from './pages/Work';
import './App.css';
import Navbar from './components/widgets/Navbar';

function App() {
  return (
    <div style={{marginLeft: '5vw', marginRight: '5vw'}}>
      <Navbar />
      <Work />
    </div>
  );
}

export default App;
