import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './LoginModal.css';
import SignUpModal from './SignUpModal';


const BASE_URL = 'http://localhost:8080/api';

const LoginModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null); // Store user info after login
  const [isSignUpOpen, setIsSignUpOpen] = useState(false); // State for sign-up modal

  const handleLogin = async () => {
    setLoading(true);
    setError(null);
    console.log(email);
    console.log(password);

    try {
      const response = await axios.post(
        `${BASE_URL}/logIn`,
        { userId:email, password },
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );

      console.log('Login Successful:', response.data);
      setUser(response.data); // Save user data to state
    } catch (err) {
      console.error('Login Failed:', err.response?.data || err.message);
      setError(err.response?.data?.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = () => {
    console.log('Redirecting to Sign Up...');
    // Add logic to redirect to the Sign Up page or modal
  };

  // useEffect to handle post-login actions
  useEffect(() => {
    if (user) {
      console.log('User is logged in:', user);
      onClose(); // Close the modal
      // Perform additional actions like redirecting or saving token
    }
  }, [user, onClose]);

  if (!isOpen) return null;

  return (
    <><div className="modal-overlay">
      <div className="modal-container">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2 className="modal-title">
          Log In/Sign Up
        </h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          } }
        >
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required />
          </div>
          <div className="button-group">
            <button type="submit" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </button>
            <button type="button" onClick={() => setIsSignUpOpen(true)} className="sign-up-button">
              Sign Up
            </button>
          </div>
        </form>
        {error && <p className="error-message">{error}</p>}

        <div> OR Login Using</div>

        <div className="social-buttons">
          {/* LinkedIn Button */}
          <button
            className="social-button linkedin"
            onClick={() => window.open('https://www.linkedin.com', '_blank')}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt="LinkedIn"
              className="social-icon" />

          </button>

          {/* Google Button */}
          <button
            className="social-button google"
            onClick={() => window.open('https://www.google.com', '_blank')}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
              alt="Google"
              className="social-icon" />

          </button>
        </div>

      </div>
    </div>
    <SignUpModal isOpen={isSignUpOpen} onClose={() => setIsSignUpOpen(false)} />
    </>

  );
};

export default LoginModal;
