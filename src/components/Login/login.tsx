import React, { useState } from 'react';
import '../../styles/Login/login.scss';
import img from '../../assets/Login/images.jpeg';

const Login: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Toggle function for dark mode
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className="login-page">
            {/* Left Section */}
            <div className={`login-form ${isDarkMode ? 'dark-mode' : ''}`}>
                <div className='header'>
                    <h4 className="logo">Software Management Tool</h4>


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
                    <button type="button" className="btn-next">Next</button>
                </form>
            </div>

            {/* Right Section */}
            <div className="illustration">
                <img src={img} alt="Illustration" />
            </div>
        </div>
    );
};

export default Login;
