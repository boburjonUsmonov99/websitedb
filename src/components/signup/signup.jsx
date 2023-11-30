import React, { useState } from 'react';
import './signup.css';

const SignUpPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        driverDocument: null
    });
    const [isDriver, setIsDriver] = useState(false);
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };
    const handleDriverToggle = () => {
        setIsDriver(!isDriver);
    };
    const handleSubmit = (event) => {
        event.preventDefault();

        console.log('Form Data:', formData);
    };

    return (
        <div className="signup-page">
            <h1>Sign Up</h1>
            <form className='signup-form' onSubmit={handleSubmit}>
                <label>
                    <p className='signup-text'>Name</p>
                    <input
                        className='signup-input'
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    <p className='signup-text'>Email</p>
                    <input
                        className='signup-input'
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    <p className='signup-text'>Password</p>
                    <input
                        className='signup-input'
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    <p className='signup-text'>Confirm password</p>
                    <input
                        className='signup-input'
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                </label>
                <button className='signup-button'  type="button" onClick={handleDriverToggle}>
                    Driver?
                </button>

                {isDriver && (
                    <label>
                        Upload Document prooving you are a driver:
                        <input
                            type="file"
                            name="driverDocument"
                            onChange={handleChange}
                        />
                    </label>
                )}
                <button className='signup-button' type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUpPage;
