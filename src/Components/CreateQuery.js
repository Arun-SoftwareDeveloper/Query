// Client code (React)

import React, { useState } from 'react';
import axios from 'axios';
import SidebarHeaderContainer from './SidebarHeaderContainer';
import '../Styles/CreateQuery.css';

function CreateQuery() {
  const [message, setMessage] = useState('');
  
  const handleQueryForm = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/api/queries');
      console.log(response)
      if (response.data && response.data.message) {
        setMessage(response.data.message);
        console.log('Created Successfully');
      } else {
        setMessage('Something went wrong. Please try again later.');
      }
    } catch (error) {
      setMessage(
        error.response?.data?.error ||
        'An error occurred. Please try again later.'
      );
    }
  };

  return (
    <div className='createquery-container'>
      <SidebarHeaderContainer headerTitle='Create-Query' />
      <button className='createquery-back-btn'>
        <i className='fa-solid fa-chevron-left'></i>back
      </button>
      <form onSubmit={handleQueryForm}>
        <div className='createquery-contents'>
          <h3 className='createquery-title'>Topic</h3>
          <span className='category'>
            <label htmlFor='category-input'>Category</label>
            <br />
            <select
              name='category'
              id='category-input'
            >
              <option value='select category'>---Select Category---</option>
              <option value='zen-class doubt'>zen-class doubt</option>
              <option value='PreBootcamp related'>PreBootcamp related</option>
              <option value='Placement related'>Placement related</option>
              <option value='Coordination related'>Coordination related</option>
            </select>
            <br />
          </span>

          <span className='voice-communication'>
            <label htmlFor='communication-input'>Preferred Voice Communication</label>
            <br />
            <select
              name='communication'
              id='communication-input'
            >
              <option value='select communication'>---Select Communication---</option>
              <option value='Tamil'>Tamil</option>
              <option value='Hindi'>Hindi</option>
              <option value='Kannada'>Kannada</option>
              <option value='Telugu'>Telugu</option>
            </select>
          </span>

          <h3 className='details'>Details</h3> <br />
          <label htmlFor='title-input'>Query title</label>
          <br />
          <input
            type='text'
            id='title-input'
            placeholder='Enter your query title'
          />
          <br />
          <label htmlFor='description-input'>Query Description</label>
          <br />
          <input
            type='text'
            id='description-input'
            placeholder='Enter your query description'
          />
          <br />
          <h3 className='available-time'>Your Available Time? (Hours 9:00 am - 7:00 pm)</h3>
          <label htmlFor='from-input'>From</label>
          <br />
          <input
            type='text'
            id='from-input'
            placeholder='09:00'
          />
          <br />
          <label htmlFor='to-input'>To</label>
          <br />
          <input
            type='text'
            id='to-input'
            placeholder='19:00'
          />
          <br />
          <button className='create' type='submit'>
            Create
          </button>
          <button className='cancel'>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default CreateQuery;
