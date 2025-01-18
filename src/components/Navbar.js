import './Navbar.css';

import React, { useState } from 'react';
import LoginModal from './LoginModal';

const Navbar = ({ setSection }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <nav className="navbar">
        <div className="container-fluid">
          {/* Left-aligned items */}
          <div className="navbar-left">
            <a className="navbar-brand" 
               href="#"
               onClick={() => setSection('Home')}
            >
              CVBuilder
            </a>
               <a
                  className="nav-link"
                  href="#"
                  onClick={() => setSection('Home')}
                >
                  Home
                </a>
                <a className="nav-link" href="#">
                  Link
                </a>
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => setSection('About')}
                >
                  About
                </a>
          </div>

          {/* Right-aligned items */}
          <div className="navbar-right">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn-search" type="submit">
                Search
              </button>
            </form>
            <button className="btn_login" onClick={openModal}>
              Login
            </button>
          </div>
        </div>
      </nav>
      <LoginModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Navbar;
