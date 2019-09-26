import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Main from './components/Main';
import ContactFooter from './components/widgets/ContactFooter';

function App() {
  return (
    <div className="MainPage">
    <BrowserRouter>
      <Main/>
    </BrowserRouter>
    </div>
  );
}

export default App;