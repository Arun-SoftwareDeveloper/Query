import React from 'react';
import SidebarHeaderContainer from './SidebarHeaderContainer';
import PlacementBoardNames from '../PlacementBoardNames';
import '../Styles/PlacementBoard.css';

function PlacementBoard() {
  return (
    <div className='placementboard-container'>
      <SidebarHeaderContainer headerTitle='Placement-Board' />
      <div className='student-contents'>
        {PlacementBoardNames && PlacementBoardNames.length > 0 ? (
          PlacementBoardNames.map((item, index) => {
            if (item.hasOwnProperty('to')) {
              // Render as Link
            } else {
              // Render as regular span
              return (
                <div className='student-item' key={index}>
                  <div className='student-info'>
                     <h2 className='course-name'>FSD_MERN</h2>
                    <h4 className='student'>Name: <span>{item.name}</span></h4>
                    <p className='student'>Company: <span>{item.Company}</span></p>
                    <p className='student'>Current CTC: <span>{item.Current_CTC}</span></p>
                    <p className='student'>Placed Through: <span>{item.Placed_Through}</span></p>
                  </div>
                </div>
              );
            }
          })
        ) : (
          <span className='no-data'>No student names found.</span>
        )}
      </div>
    </div>
  );
}

export default PlacementBoard;
