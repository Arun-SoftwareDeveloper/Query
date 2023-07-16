import React from 'react';
import SidebarHeaderContainer from '../Components/SidebarHeaderContainer';
import '../Styles/Applications.css';

function Applications() {
  return (
    <div className='application-container'>
      <SidebarHeaderContainer headerTitle='Applications' />
      <h1 className='application-text'>
        Content available after completing Placement preparation...
      </h1>
    </div>
  );
}

export default Applications;

