import React from 'react';
import SidebarHeaderContainer from './SidebarHeaderContainer';
import LeaderBoardimg from "../Images/LeaderBoard.jpeg";
import "../Styles/LeaderBoard.css";

function LeaderBoard() {
  return (
    <div className='leaderboard-container'>
        <SidebarHeaderContainer headerTitle="LeaderBoard" />
        <span className = "leaderboard-header">
        <h2 className='leaderboard-slogan'>Competition is a good thing; it forces us to do our best.</h2>
            <img src= {LeaderBoardimg} alt='LeaderBaord' className='leaderboard-img'></img>
        </span>
        <div className='leaderbaord-mid-container'>
            <table>
                <th>Rank</th>
                <th>Name</th>
                <th>Batch</th>
            </table>
        </div>
    </div>
  )
}

export default LeaderBoard