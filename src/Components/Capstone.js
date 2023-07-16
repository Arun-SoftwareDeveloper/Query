import React, { useState } from 'react';
import SidebarHeaderContainer from './SidebarHeaderContainer';
import '../Styles/Capstone.css';

function Capstone() {
  const [showDetails, setShowDetails] = useState(false);
  const [projectDetails, setProjectDetails] = useState({
    title: '',
    description: '',
    designSpec: '',
    frontendSource: '',
    backendSource: '',
    frontendDeploy: '',
    backendDeploy: ''
  });

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProjectDetails((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary actions with the submitted data
    console.log('Submitted data:', projectDetails);
  };

  return (
    <div className="capstone-container">
      <SidebarHeaderContainer headerTitle="Capstone" />
      <div className='capstone-left-container'>
        <table className="capstone-title">
        <tbody>
          <tr>
            <td className="capstone-content">Student</td>
            <td
              className={`capstone-content-route ${showDetails ? 'active' : ''}`}
              onClick={handleToggleDetails}
            >
              Yet to be graded
            </td>
          </tr>
          <tr>
            <td className='capstone-content'>(B46-WD Tamil)</td>
          </tr>
          <tr>
            <td className='capstone-content'>Zen Student DashBoard</td>
          </tr>
        </tbody>
      </table>
      </div>

      <div className='capstone-right-container'>
      {showDetails && (
        <form className="capstone-details" onSubmit={handleSubmit}>
            <table className="capstone-contents-table">
            <button type="button" className='capstone-back-btn' onClick={handleToggleDetails}>
              <i className='fa-solid fa-chevron-left'></i>back
              </button>
        <tbody>
          <tr>
            <td className="capstone-contents-title-head">Zen Student DashBoard</td>
            
          </tr>
        </tbody>
      </table>
          <h3 className='capstone-contents'>Description:-</h3>
          <p className='capstone-contents'>To identify and implement the Capstone project as the title </p>
          <p>given below by meeting all the necessary requirements.</p>
          <h3 className="capstone-contents-title">Any Specifications Design?</h3>
           <ul className='capstone-contents'> 
            <li>Front-end: Reactjs</li>
            <li>Back-end:Nodejs</li>
            <li>Database: MongoDB</li>
           </ul>
           <h3 className='capstone-contents-title'>How do I submit my work?</h3>
           <ul className='capstone-contents'>
            <li>Push all your work files to GitHub in two different repositories as given below</li>
            <li>Front-end repo name project-name-frontend.</li>
            <li>Back-end repo name project-name-backend.</li>
            <li>Deploy your front-end application on Netlify(https://www.netlify.com) and back-end application on Render(https://render.com/).</li>
           </ul>

           <h3 className='capstone-contents-title'>Any basic hints to solve?</h3>
           <ul className='capstone-contents'>
            <li>https://getbootstrap.com/docs/4.4/getting-started/introduction/</li>
            <li>https://jwt.io/introduction/</li>
            <li>https://www.chartjs.org/</li>
            <li>https://expressjs.com/</li>
           </ul>

          <table className="capstone-contents-table">
      <tbody>
        <tr>
          <td className="capstone-contents-label">
            <label htmlFor="frontendSource">Frontend Source Code URL:</label>
          </td>
          <td className="capstone-contents-input">
            <input
              type="text"
              id="frontendSource"
              name="frontendSource"
              value={projectDetails.frontendSource}
              onChange={handleInputChange}
            />
          </td>
        </tr>
        <tr>
          <td className="capstone-contents-label">
            <label htmlFor="backendSource">Backend Source Code URL:</label>
          </td>
          <td className="capstone-contents-input">
            <input
              type="text"
              id="backendSource"
              name="backendSource"
              value={projectDetails.backendSource}
              onChange={handleInputChange}
            />
          </td>
        </tr>
        <tr>
          <td className="capstone-contents-label">
            <label htmlFor="frontendDeploy">Frontend Deploy URL:</label>
          </td>
          <td className="capstone-contents-input">
            <input
              type="text"
              id="frontendDeploy"
              name="frontendDeploy"
              value={projectDetails.frontendDeploy}
              onChange={handleInputChange}
            />
          </td>
        </tr>
        <tr>
          <td className="capstone-contents-label">
            <label htmlFor="backendDeploy">Backend Deploy URL:</label>
          </td>
          <td className="capstone-contents-input">
            <input
              type="text"
              id="backendDeploy"
              name="backendDeploy"
              value={projectDetails.backendDeploy}
              onChange={handleInputChange}
            />
          </td>
        </tr>
      </tbody>
    </table>

          <div className="button-container">
            <button type="submit" className='capstone-submit-btn'>Submit</button>
            <button type="button"className='capstone-cancel-btn' onClick={handleToggleDetails}>
              Cancel
            </button>
          </div>
        </form>
      )}
      </div>
    </div>
  );
}

export default Capstone;
