import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        console.log('Login successful');
        toast.success('Login successful!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        // Save the token to local storage or session storage
        // Example: localStorage.setItem('token', token);
      } else if (response.status === 404) {
        throw new Error('User not found');
      } else {
        const error = await response.json();
        throw new Error(error.error);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <>
      <h2 className='header'>Zen Login</h2>
      <form className="login-form" onSubmit={handleLogin}>
      <span className='back-btn'>
        <i className="fa-solid fa-circle-arrow-left"></i>
        </span>

        <input
          className="login-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="login-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="login-button" type="submit">Login</button>
        <p className='signup'>Don't have an account?
        <span className='reg'>register</span></p>
         <span className='forgot'>Forgot Password?</span>
      </form>
    </>
  );
};

export default LoginForm;
