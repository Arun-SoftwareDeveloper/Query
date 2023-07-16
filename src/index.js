import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './Components/Login';
import Class from './Components/Class';
import Requirements from './Components/Requirements';
import Applications from './Components/Applications';
import InterviewTasks from './Components/InterviewTasks';
import SidebarHeaderContainer from './Components/SidebarHeaderContainer';
import Certificate from './Components/Certificate';
import Syllabus from './Components/Syllabus';
import Queries from "./Components/Queries";
import CreateQuery from './Components/CreateQuery';
import PlacementBoard from './Components/PlacementBoard';
import LeaderBoard from './Components/LeaderBoard';
import Capstone from './Components/Capstone';
import WebCode from './Components/WebCode';
import Testimonial from './Components/Testimonial';
import Testimonialcreate from './Components/Testimonialcreate';
import Protofolio from './Components/Protofolio';
import MockInterview from './Components/MockInterview';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Class />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
