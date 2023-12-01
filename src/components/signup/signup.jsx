import React, { useState } from 'react';
import './signup.css';
import axios from 'axios';

const SignUpPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        driverDocument: null
    });

    const [isDriver, setIsDriver] = useState(false);

    const handleChange = (event) => {
        if (event.target.name === 'driverDocument') {
            setFormData({
                ...formData,
                driverDocument: event.target.files[0]
            });
        } else {
            setFormData({
                ...formData,
                [event.target.name]: event.target.value
            });
        }
    };

    const handleDriverToggle = () => {
        setIsDriver(!isDriver);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const dataToSend = {
            username: formData.name,
            email: formData.email,
            password: formData.password,
            // ...(isDriver && { driverDocument: formData.driverDocument })
        };

        // const formDataObj = new FormData();
        // Object.keys(dataToSend).forEach(key => {
        //     formDataObj.append(key, dataToSend[key]);
        // });

        try {
            const response = await axios.post('http://127.0.0.1:8000/register/', dataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(response.data);
        } catch (error) {
            console.error('There was an error!', error);
        }
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
                <button className='signup-button' type="button" onClick={handleDriverToggle}>
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
