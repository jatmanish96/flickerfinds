import React, { useEffect, useState } from "react";
import { Link ,useLocation} from 'react-router-dom';
import './SignUpPage.css';
import accountlogo from '../../assests/account.png'

const SignUpPage = () => {
    return (
        <>
            <div className="signup-container">
                    {/* Left Section: Dark Blue Background */}
                    <div className="signup-left">
                        <span className="span">Sign Up</span>
                        <div className="span-item-1">Looks like you're new here!,</div>
                        <div className="span-item-2">Sign up to get started</div>
                        <div className="signup-img">
                          <img src={accountlogo} alt="account" />
                        </div>
                    </div>

                    {/* Right Section: Input for Username, Password, and Login Button */}
                    <div className="signup-right">
                        <form className="signup-form">
                        <div className="input-group">
                                <label htmlFor="firstname">First Name</label>
                                <input type="text" id="firstname" name="firstname" placeholder="Enter your firstname" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="lastname">Last Name</label>
                                <input type="text" id="lastname" name="lastname" placeholder="Enter your lastname" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="email">E-mail</label>
                                <input type="email" id="email" name="email" placeholder="Enter your email" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="username">Username</label>
                                <input type="text" id="username" name="username" placeholder="Enter your username" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" name="password" placeholder="Enter your password" />
                            </div>
                            <div className="signup-button-container">
                            <button className="signup-buttoncontainer" type="submit">Sign Up</button>
                            </div>
                           
                        </form>
                    </div>
                </div>
            
        </>
    );
};

export default SignUpPage;
