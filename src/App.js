import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CVWork from './components/CVWork';
import Footer from './components/Footer';
import Dropdown from './components/Dropdown';
import About from './components/About';
import Home from './components/Home';


function App() {

  const [section, setSection] = useState('')
  return (
    <>
      <Navbar setSection={setSection}/>
      {section == 'Home' && <Home/>}
      {section == 'About' && <About/>}
      <CVWork/>
      <Footer/>
      
      
       
    </>
  );
}

export default App;
