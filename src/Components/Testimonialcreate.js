import React, { useState } from 'react';
import SidebarHeaderContainer from './SidebarHeaderContainer';
import '../Styles/Testimonialcreate.css';

function Testimonialcreate() {
  const [photo, setPhoto] = useState(null);
  const [videoUrl, setVideoUrl] = useState('');
  const [description, setDescription] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isFormValid, setIsFormValid] = useState(true);

  const handleCancelButtonClick = () => {
    setIsFormValid(true);
  };

  const handlePhotoChange = (event) => {
    setPhoto(event.target.files[0]);
  };

  const handleVideoUrlChange = (event) => {
    setVideoUrl(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleAgreementChange = (event) => {
    setAgreedToTerms(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!photo || !videoUrl || !description || !agreedToTerms) {
      setIsFormValid(false);
      return;
    }

    // Perform actions with the form data (e.g., submit it to a server)
    console.log('Photo:', photo);
    console.log('Video URL:', videoUrl);
    console.log('Description:', description);
    console.log('Agreed to Terms:', agreedToTerms);

    setPhoto(null);
    setVideoUrl('');
    setDescription('');
    setAgreedToTerms(false);
    setIsFormValid(true);
  };

  return (
    <div className='testimonialcreate-container'>
      <SidebarHeaderContainer headerTitle='Create Testimonial' />
      <div className='testimonial-contents'>
        <form onSubmit={handleSubmit}>
          <label htmlFor='photo'>Upload Photo</label><br />
          <input
            id='input'
            type='file'
            accept='image/*'
            onChange={handlePhotoChange}
          /> <br />

          <label htmlFor='videoUrl'>Video URL</label><br />
          <input
            id='input'
            type='text'
            placeholder='Video URL'
            value={videoUrl}
            onChange={handleVideoUrlChange}
          /> <br />
          {videoUrl && !videoUrl.startsWith('http') && (
            <p className='error'><i class="fa-solid fa-circle-exclamation"></i>Video URL is invalid</p>
          )}

          <label htmlFor='description'>Description</label><br />
          <textarea
            id='input'
            placeholder='Enter the Description'
            value={description}
            onChange={handleDescriptionChange}
          /><br />

          <h3 className='terms'>
            <input
              id='terms'
              type='checkbox'
              checked={agreedToTerms}
              onChange={handleAgreementChange}
            />
            I agree to the following Terms & Conditions
          </h3><br />

          {!isFormValid && (
            
            <p className='error'><i class="fa-solid fa-circle-exclamation"></i>Please fill in all the required fields</p>
          )}

          <button type='submit' className='testimonialcreate-submit-btn'>
            Submit
          </button>
          <button type='button'className='testimonialcreate-cancel-btn' onClick={handleCancelButtonClick}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default Testimonialcreate;
