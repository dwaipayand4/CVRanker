import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-container">
          <div className="about-content">
            <img src="https://media.licdn.com/dms/image/v2/D4E03AQHEk_MwwwTlBA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718223311289?e=1736985600&v=beta&t=-01kdugEBVSJn2A1aOL_bvD_rbU105eltDtjXI11E_E" alt="About Image" className="about-image" />
            <div className="about-text">
              <h2>About Me</h2>
              <p>We are a team passionate about technology and innovation.</p>
              <p>Our mission is to make the world a better place through creative solutions.</p>
            </div>
          </div>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/dwaipayan-das-647b5b119/" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png?20140125013055" alt="Linkedin" className="social-linkedin" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" className="social-insta" />
            </a>
          </div>
        </div>
      );
}

export default About;

