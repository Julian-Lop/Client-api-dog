import './App.css';
import React from 'react'
import { Route, Routes} from 'react-router-dom'
import Landingpage from './components/Landingpage.js'
import Homepage from './components/Homepage.js'
import Dogdetail from './components/Dogdetail.js'
import Createdog from './components/Createdog.js';

function App() {
  return (
    
        <Routes>
          <Route path="/" element={<Landingpage/>}/>
          <Route path="/Client-api-dog/home" element={<Homepage/>}/>
          <Route path="/Client-api-dog/dogDetail/:idRaza" element={<Dogdetail/>}/>
          <Route path="/Client-api-dog/createDog" element={<Createdog/>}/>
        </Routes>
    
  );
}

export default App;
