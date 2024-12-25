import React, { useRef } from "react";
import './Home.css';
import { useDispatch, useSelector } from 'react-redux';
import { setButtonClicked } from '../redux/actions';
// import '//Dropdown.js';

const Home = () => {

  const dispatch = useDispatch();

    const handleClick = (buttonName) => {
        dispatch(setButtonClicked(buttonName)); // Dispatch the action
        console.log(buttonName); // Log the button name to the console
    };


    return (
        <div className="home-container">
          <button 
                className="futuristic-button" 
                onClick={() => handleClick('button1')}
            >
                Upload Job Descrption
            </button>
            <button 
                className="futuristic-button" 
                onClick={() => handleClick('button2')}
            >
                Upload CVs
            </button>
        </div>
      );
    }

export default Home;