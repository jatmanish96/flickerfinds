import React, { useEffect, useState } from "react";
import "./CategoryCard.css";
import { Link ,useLocation} from 'react-router-dom';
import foodlogo from '../../assests/food.png';
import mobilelogo from '../../assests/user-interface.png'
import elclogo from '../../assests/gadgets.png'
import applinlogo from '../../assests/electric-appliance.png'
import furnilogo from '../../assests/sofa.png'
import fashlogo from '../../assests/consumption.png'


const CategoryCard = () => {

    const location = useLocation();
    // Check if the current route is "/login"
    const isLoginRoute = location.pathname === "/login";
    if(isLoginRoute){
        return null;
    }

    return (
        <>
            <div className="category-card">
                <div className="category-item">
                    <Link>
                        <div className="category-item-link">
                            <img src={foodlogo} alt="foodlogo" />
                            <div className="categorytext">
                                <h4><span>Grocery</span></h4>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="category-item">
                    <Link>
                        <div className="category-item-link">
                            <img src={mobilelogo} alt="" /> <div className="categorytext">
                                <h4><span>Mobiles</span></h4>
                            </div> 
                        </div>
                    </Link>
                </div>
                <div className="category-item">
                    <Link>
                        <div className="category-item-link">
                            <img src={fashlogo} alt="" /> <div className="categorytext">
                                <h4><span>Fashion</span></h4>
                            </div> 
                        </div>
                    </Link>
                </div>
                <div className="category-item">
                    <Link>
                        <div className="category-item-link">
                            <img src={elclogo} alt="" />
                            <div className="categorytext">
                                <h4><span>Electronics</span></h4>
                            </div> 
                        </div>
                    </Link>
                </div>
                <div className="category-item">
                    <Link>
                        <div className="category-item-link">
                            <img src={applinlogo} alt="" /> 
                            <div className="categorytext">
                                <h4><span>Appliances</span></h4>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="category-item">
                    <Link>
                        <div className="category-item-link">
                            <img src={furnilogo} alt="" />
                            <div className="categorytext">
                                <h4><span>Home &</span></h4>
                                 <h4>Furniture</h4>
                            </div> 
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default CategoryCard;
