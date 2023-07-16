import React from 'react';
import SidebarHeaderContainer from '../Components/SidebarHeaderContainer';
import '../Styles/Certificate.css';


function Certificate() {
  return (
    <div className='certificate-container'>
     <SidebarHeaderContainer headerTitle="Certificates" />
     <h1 className='certificate-text'>Your Certificates is not yet generated.</h1>
    </div>
  )
}

export default Certificate