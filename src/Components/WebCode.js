import React ,{useState} from 'react';
import"../Styles/WebCode.css";
import SidebarHeaderContainer from './SidebarHeaderContainer';

function WebCode() {
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
    <div className='webcode-container'>
        <SidebarHeaderContainer headerTitle= "WebCode" />
        <div className='webcode-left-container'>
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
            <td className='capstone-content'>(B46-WD Tamil) 1st WebCode</td>
          </tr>
          <tr>
            <td className='capstone-content'>Makeup API</td>
          </tr>
        </tbody>
      </table>
      </div>

      <div className='webcode-right-container'>
      {showDetails && (
        <form className="capstone-details" onSubmit={handleSubmit}>
            <table className="capstone-contents-table">
            <button type="button" className='capstone-back-btn' onClick={handleToggleDetails}>
              <i className='fa-solid fa-chevron-left'></i>back
              </button>
        <tbody>
          <tr>
            <td className="capstone-contents-title-head">Makeup API</td>
            
          </tr>
        </tbody>
      </table>
          <h3 className='capstone-contents'>Description:-</h3>
          <p className='capstone-contents'>Implement the Makeup API using async/await with fetch.</p>
          <h3 className="capstone-contents-title">Any Specifications Design?</h3>
           <ul className='capstone-contents'> 
            <li>All your HTML elements should be created with DOM.</li>
            <li>Use the async/await.</li>
            <li>Use try-catch to handle errors.</li>
            <li>Use fetch() to get the data from Makeup API</li>
           </ul>
           <h3 className='capstone-contents-title'>How do I process the API data?</h3>
           <ul className='capstone-contents'>
            <li>Display the brand and the name of the product.</li>
            <li>Display the price of the product.</li>
            <li>Also display the image and product link.</li>
            <li>Display the description of the product.</li>
           </ul>

           <h3 className='capstone-contents-title'>Any basic hints to solve?</h3>
           <ul className='capstone-contents'>
            <li>https://makeup-api.herokuapp.com/api/v1/products.json</li>
            <li>https://makeup-api.herokuapp.com/</li>
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
  )
}

export default WebCode