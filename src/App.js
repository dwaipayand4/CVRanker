
import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CVWork from './components/CVWork';
import Footer from './components/Footer';
import Dropdown from './components/Dropdown';
import About from './components/About';
import Home from './components/Home';
import Profile from './components/Profile';
import { Route, Routes, Navigate ,useLocation } from "react-router-dom";
import Logout from "./components/Logout"


function App() {

  const [isLogged, setIsLogged] = useState(false);
  
  return (
    <>
      <Navbar isLogged={isLogged}/>
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/Logout" element={<Logout />} />
      </Routes>
      <CVWork/>
      <Footer/>
      
      
       
    </>
  );
}

export default App;
