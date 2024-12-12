import React, { useState } from 'react';
import '../../styles/Login/login.scss';
// import img from '../../assets/Login/images.jpeg';

import { useNavigate } from 'react-router-dom';
const Login: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const navigate = useNavigate(); // Initialize the useNavigate hook
    // Toggle function for dark mode
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };
    const handleNext = () => {
        navigate('/dashboard'); // Redirect to the dashboard page
      };

    return (
        <div className="login-page">
            {/* Left Section */}
            <div className={`login-form ${isDarkMode ? 'dark-mode' : ''}`}>
                <div className='header'>
                    <h4 className="logo">SS Login</h4>


                    {/* Toggle Switch */}
                    <div className="dark-mode-toggle">
                        <label className="switch">
                            <input
                                type="checkbox"
                                checked={isDarkMode}
                                onChange={toggleDarkMode}
                            />
                            <span className="slider"></span>
                        </label>
                        {/* <span>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</span> */}
                    </div>
                </div>
                <form>
                    <div className="form-group">
                        <label htmlFor="email" className='email'>Email Address</label>
                        <input type="email" id="email" placeholder="Enter your email" />
                    </div>
                    <button type="button" className="btn-next" onClick={handleNext}>
                        Next
                    </button>
                </form>
            </div>

            {/* Right Section */}
            <div className="illustration">
                <h4>Software Management Tool</h4>
            </div>
        </div>
    );
};

export default Login;
