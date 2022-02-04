import './App.css';
import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Landingpage from './components/Landingpage.jsx'
import Homepage from './components/Homepage.jsx'
import Dogdetail from './components/Dogdetail.jsx'
import Createdog from './components/Createdog.jsx';

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
