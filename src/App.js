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
          <Route path="Client-api-dog/" element={<Landingpage/>}/>
          <Route path="Client-api-dog/home" element={<Homepage/>}/>
          <Route path="Client-api-dog/dogDetail/:idRaza" element={<Dogdetail/>}/>
          <Route path="Client-api-dog/createDog" element={<Createdog/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
