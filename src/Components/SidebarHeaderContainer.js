import React from 'react';
import { Link } from 'react-router-dom';
import userlogo from "../Images/userlogo.png";
import Zenlogo from "../Images/ZenClass-logo.png";
import "../Styles/Syllabus.css";
import sidebarItems from '../sidebarData';
import "../Styles/SidebarHeader.css"

function SidebarHeaderContainer({ headerTitle }) {
  return (
    <div className='requirement-container'>
      <div id='header'>
        <h1 className='header-title'>{headerTitle}</h1>
        <span className='header-text'>
          <h1>Student</h1>
          <img src={userlogo} alt="userlogo" className='class-logo' />
        </span>
      </div>
      <div className='sidebar-container'>
        <img src={Zenlogo} alt="ZenClass Logo" className='zen-logo' /><br />
        {sidebarItems && sidebarItems.length > 0 ? (
          sidebarItems.map((item, index) => {
            if (item.hasOwnProperty('to')) {
              // Render as Link
              return (
                <Link to={item.to} >
                    <i className={item.icon}></i>
                   {item.text}
                </Link>
              );
            } else {
              // Render as regular span
              return (
                <span className='icon' key={index}>
                  <i className={item.icon}></i>
                  {item.text}
                </span>
              );
            }
          })
        ) : (
          <span>No sidebar items found.</span>
        )} 

      </div>
    </div>
  );
}

export default SidebarHeaderContainer;
