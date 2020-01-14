import React from 'react';
import './css/App.scss';
import Home from './pages/Home';
import {spacer1, spacer2, spacer3, spacer4} from './components/constants';
import { BrowserRouter } from 'react-router-dom'
import Main from './components/Main';

import {setConfiguration} from 'react-grid-system';
import About from './pages/About';
import Navbar from './components/navbar';
import FBUCodepath from './pages/FBUCodepath';
import InfoPost from './pages/InfoPost';
import Misc from './pages/Misc';
import ContactFooter from './components/footer';

setConfiguration({
  gutterWidth: 80,
  containerWidths: [2000, 2000, 2000, 2000]
});

function App() {
  return (
    <div className="App" style={{margin: spacer3}}>
      <Navbar />
    <BrowserRouter>
      <Main/>
    </BrowserRouter>
    <ContactFooter />
    </div>
  );
}

export default App;
