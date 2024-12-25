
import React, { useState } from 'react';
import './Home.css';
import { useDispatch, useSelector } from 'react-redux';
import { setButtonClicked } from '../redux/actions';
// import '//Dropdown.js';

const Home = () => {

  const [isModalOpen, setIsModalOpen] = useState(false); // Track modal state
  const [jobDescription, setJobDescription] = useState(''); // Track text area content
  const [uploadedCVs, setUploadedCVs] = useState([]); // Track uploaded CVs
  
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    setIsModalOpen(true); // Open the modal
};

const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
};

const handleOkClick = () => {
    console.log('Job Description:', jobDescription); // Log the entered text
    dispatch(setButtonClicked('Upload Job Description'));
    handleCloseModal(); // Close the modal
};


    const handleUploadCVs = (event) => {
      const files = event.target.files; // Get selected files
      if (files.length > 5) {
          alert('You can only upload up to 5 files at a time!');
          return;
      }

      // Log the uploaded file names
      setUploadedCVs(files); // Update the state with uploaded files
      console.log('Uploaded files:', Array.from(files).map((file) => file.name));
  };

  const handleRankingClick = () => {
    if (jobDescription.trim() && uploadedCVs.length > 1) {
      console.log('Done');
    } else {
      alert('Please enter the job description and upload atleast 2 CVs.');
    }
  };



    return (
        <div className="home-container">
          <div className="button-group">  
            <button 
                  className="futuristic-button" 
                  onClick={() => handleOpenModal()}
              >
                  UPLOAD JOB DESCRIPTION
              </button>
              {/* Upload CVs Button */}
              <label className="futuristic-button">
                  UPLOAD CVs
                  <input 
                      type="file" 
                      accept=".pdf, .doc, .docx" 
                      multiple 
                      style={{ display: 'none' }} 
                      onChange={handleUploadCVs} 
                  />
              </label>
              </div>
              <button
                className="generate_ranking"
                onClick={handleRankingClick}
              >
                GENERATE RANKING
              </button>

              {/* Modal for Job Description */}
              {isModalOpen && (
                  <div className="modal-overlay">
                      <div className="modal">
                          <textarea 
                              className="job-description-textarea" 
                              value={jobDescription} 
                              onChange={(e) => setJobDescription(e.target.value)} 
                              placeholder="Enter Job Description..."
                          />
                          <div className="modal-buttons">
                              <button 
                                  className="modal-button" 
                                  onClick={handleOkClick}
                              >
                                  OK
                              </button>
                              <button 
                                  className="modal-button" 
                                  onClick={handleCloseModal}
                              >
                                  Cancel
                              </button>
                          </div>
                      </div>
                  </div>
              )}
        </div>
      );
    }

export default Home;