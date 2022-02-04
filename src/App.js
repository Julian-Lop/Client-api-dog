import './App.css';
import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Landingpage from './components/Landingpage.js'
import Homepage from './components/Homepage.js'
import Dogdetail from './components/Dogdetail.js'
import Createdog from './components/Createdog.js';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage/>}/>
          <Route path="/home" element={<Homepage/>}/>
          <Route path="/dogDetail/:idRaza" element={<Dogdetail/>}/>
          <Route path="/createDog" element={<Createdog/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
