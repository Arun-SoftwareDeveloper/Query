import React from 'react'
import SidebarHeaderContainer from './SidebarHeaderContainer';
import "../Styles/Queries.css";
import{Link} from "react-router-dom";

function Queries() {
  return (
    <div className='queries-container'>
        <SidebarHeaderContainer headerTitle= "My Queries" />
        <span>
          <Link to ="/createquery">
            <button className='create-query-btn'><i class="fa-solid fa-plus"></i>Create Query</button>
          </Link>
        </span>
    </div>
  )
}

export default Queries