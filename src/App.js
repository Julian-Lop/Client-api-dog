import './App.css';
import React from 'react'
import { Route, Routes} from 'react-router-dom'
import Landingpage from './components/Landingpage.js'
import Homepage from './components/Homepage.js'
import Dogdetail from './components/Dogdetail.js'
import Createdog from './components/Createdog.js';
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <Router>
        <Routes>
          <Route path="Client-api-dog/" element={<Landingpage/>}/>
          <Route path="Client-api-dog/home" element={<Homepage/>}/>
          <Route path="Client-api-dog/dogDetail/:idRaza" element={<Dogdetail/>}/>
          <Route path="Client-api-dog/createDog" element={<Createdog/>}/>
        </Routes>
    </Router>
  );
}

export default App;
