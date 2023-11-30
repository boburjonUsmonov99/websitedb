import React, { useState } from 'react';
import './signin.css'; // You can use the same CSS file or create a new one

const SignInPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the sign-in logic here
    console.log('Sign In Form Data:', formData);
  };

  return (
    <div className="signin-page">
      <h1>Sign In</h1>
      <form className='signin-form' onSubmit={handleSubmit}>
        <label>
          <p className='signin-text'>Email</p>
          <input
            className='signin-input'
            type="email"
            name="email"
            value={formData.email}
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