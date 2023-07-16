import React, { useState } from 'react';
import '../Styles/Class.css';
import SidebarHeaderContainer from '../Components/SidebarHeaderContainer';
import sessionData from '../SessionData'; // Import the session data from the correct path

function Class() {
  const [selectedSession, setSelectedSession] = useState(null);
  const [join, setJoin] = useState(false);
  
  const numbers = Array.from({ length: sessionData.length }, (_, index) => index + 1);

  const handleJoin = () => {
    setJoin(true);
  };

  const handleSessionClick = (sessionNumber) => {
    setSelectedSession(sessionNumber);
  };

  const renderContent = () => {
    const session = sessionData.find((session) => session.number === selectedSession);
    if (!session) {
      return (
        <div className='mid-container'>
          <h3 className='mid-text'>No session title available.</h3>
          <h5 className='mid-text'>Class Schedule is not updated.</h5>
          <hr className='divider' />
          <h4 className='mid-title'>Contents:</h4>
          <p className='mid-text'>No contents available.</p>
          <h4 className='mid-title'>Pre-read:</h4>
          <p className='mid-text'>No pre-read available.</p>
        </div>
      );
    }

    return (
      <div className='mid-container'>
        <h4 className='mid-title'>{session.title}</h4>
        <p className='mid-date'>{session.date}</p>
        <h4 className='mid-title'>Contents:</h4>
        {session.contents.map((content, index) => (
          <p className='mid-text' key={index}>{content}</p>
        ))}
        <h4 className='mid-title'>Pre-read:</h4>
        <p className='mid-text'>{session.preRead}</p>
      </div>
    );
  };

  return (
    <div className='class-container'>
      <SidebarHeaderContainer headerTitle='Class' />
      <h1 className='join-box' onClick={handleJoin}>Join the class on time...</h1>
      {join ? (
        <p>Please watch the recording.</p>
      ) : (
        <ul>
          {numbers.map((number) => (
            <li key={number}>{number}</li>
          ))}
        </ul>
      )}
      {renderContent()}
      <div className='session-container'>
        <span className='number-container'>
          <h1 className='session-title'>Session RoadMap</h1>
          {numbers.map((number) => (
            <div
              key={number}
              className={`number ${selectedSession === number ? 'selected' : ''}`}
              onClick={() => handleSessionClick(number)}
            >
              {number}
            </div>
          ))}
        </span>
      </div>
      <div className='additional-session-container'>
        <h1 className='additional-title'>Additional Sessions</h1>
        <span className='additional-text'>
          <i className="fa-sharp fa-solid fa-circle-exclamation"></i>No Additional sessions
        </span>
      </div>
    </div>
  );
}

export default Class;
