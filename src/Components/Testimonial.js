import React, { useState } from 'react';
import SidebarHeaderContainer from './SidebarHeaderContainer';
import '../Styles/Testimonial.css';

function Testimonial() {
 
  return (
    <div className='testimonial-container'>
      <SidebarHeaderContainer headerTitle="Testimonial" />
        <button type="button" className='testimonial-add-btn' >
          <i className="fa-solid fa-plus"></i>Add Testimonial
        </button>
 
    </div>
  );
}

export default Testimonial;
