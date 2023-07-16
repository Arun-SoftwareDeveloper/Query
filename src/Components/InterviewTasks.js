import React from 'react';
import SidebarHeaderContainer from '../Components/SidebarHeaderContainer';
import "../Styles/InterviewTasks.css"

function InterviewTasks() {
  return (
    <div className='interviewtasks-container'>
    <SidebarHeaderContainer headerTitle='Interview Tasks' />
    <h1 className='interview-text'>
      Content available after completing Placement preparation...
    </h1>
  </div>
  );
}

export default InterviewTasks