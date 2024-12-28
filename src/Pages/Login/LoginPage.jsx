import React, { useEffect, useState } from "react";
import './LoginPage.css';
import accountlogo from '../../assests/account.png'

const LoginPage = () => {

    return (
        <>
            <div className="login-container">
                    {/* Left Section: Dark Blue Background */}
                    <div className="login-left">
                        <span className="span">Login</span>
                        <div className="span-item-1">Get access to your Orders,</div>
                        <div className="span-item-2">Wishlist and Recommendations</div>
                        <div className="login-img">
                          <img src={accountlogo} alt="account" />
                        </div>
                    </div>

                    {/* Right Section: Input for Username, Password, and Login Button */}
                    <div className="login-right">
                        <form className="login-form">
                            <div className="input-group">
                                <label htmlFor="username">Username</label>
                                <input type="text" id="username" name="username" placeholder="Enter your username" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" name="password" placeholder="Enter your password" />
                            </div>
                            <div className="login-button-container">
                            <button className="login-buttoncontainer" type="submit">Login</button>
                            </div>
                           
                        </form>
                    </div>
                </div>
            
        </>
    );
};

export default LoginPage;
