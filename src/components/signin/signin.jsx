import React, { useState } from 'react';
import axios from 'axios';
import './signin.css';
import { useUser } from '../../UserContext';
import { useNavigate } from 'react-router-dom';

const SignInPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const { setUser } = useUser();
  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
     
      const response = await axios.post('http://127.0.0.1:8000/login/', formData);
      console.log('Sign In Response:', response.data);

      const userData = response.data;

      if (userData) {
        setUser(userData); // Update user context
  
        // Redirect based on is_trucker flag
        if (userData.is_trucker) {
          navigate('/trucker');
        } else {
          navigate('/client');
        }
      }


    } catch (error) {
      console.error('There was an error during sign in:', error);
     
    }
  };

  return (
    <div className="signin-page">
      <h1>Sign In</h1>
      <form className='signin-form' onSubmit={handleSubmit}>
        <label>
          <p className='signin-text'>Email</p>
          <input
            className='signin-input'
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          <p className='signin-text'>Password</p>
          <input
            className='signin-input'
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        <button className='signin-button' type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignInPage;