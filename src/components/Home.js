import React, { useRef } from "react";
import './Home.css';
// import '//Dropdown.js';

const Home = () => {
    return (
        <div className="home-container">
          <button className="home-button button-1">Upload CV</button>
          <button className="home-button button-2">Paste Job Description</button>
        </div>
      );
    }

export default Home;