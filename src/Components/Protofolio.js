import React, { useState } from 'react';
import SidebarHeaderContainer from '../Components/SidebarHeaderContainer';
import "../Styles/Protofolio.css";

function Protofolio() {
  const [githubURL, setGithubURL] = useState('');
  const [portfolioURL, setPortfolioURL] = useState('');
  const [resumeURL, setResumeURL] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState('Not Submitted');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    // Replace with your validation logic to check the correctness of the URLs
    if (githubURL && portfolioURL && resumeURL) {
      setSubmissionStatus('Submitted');
      setError('');
    } else {
      setError('Please fill in all the required details.');
    }
  };

  return (
    <div className='protofolio-container'>
      <SidebarHeaderContainer headerTitle="Protofolio" />
      <div className='protofolio-left-container'>
        <label htmlFor='githubURL'>
          GitHub URL
        </label><br />
        <input
          type='text'
          id='githubURL'
          className='input'
          value={githubURL}
          onChange={e => setGithubURL(e.target.value)}
        /><br />
        <label htmlFor='portfolioURL'>
          Portfolio URL
        </label><br />
        <input
          type='text'
          id='portfolioURL'
          className='input'
          value={portfolioURL}
          onChange={e => setPortfolioURL(e.target.value)}
        /><br />
        <label htmlFor='resumeURL'>
          Resume URL
        </label><br />
        <input
          type='text'
          id='resumeURL'
          className='input'
          value={resumeURL}
          onChange={e => setResumeURL(e.target.value)}
        /><br />
        <button
          type='submit'
          className='protofolio-submit-btn'
          onClick={handleSubmit}
        >
          Submit
        </button>
        <h4 className='protofolio-note'><b>Note:</b> You won't be able to submit when the portfolio is under review or reviewed.</h4>
        {error && <p className='error-message'>{error}</p>}
      </div>
      <div className='protofolio-right-container'>
        <span className='protofolio-right-header'>
          <h1>Portfolio Review</h1>
        </span>
        <span className='protofolio-status'>
          <h4 className='protofolio-status-title'>Status</h4>
          <h4>{submissionStatus}</h4>
        </span>
      </div>
    </div>
  )
}

export default Protofolio;
