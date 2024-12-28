import React, { useEffect, useState } from "react";
import './Navbar.css';
import logo from '../../assests/logo.png'; // Update this path with your actual logo
import { CiShoppingCart } from "react-icons/ci"; // Cart icon from react-icons
import { Link } from 'react-router-dom';
import { fetchCategories } from "../../services/CategoryService"; // Assuming you have this service
import { IoSearch } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { AiOutlineShop } from "react-icons/ai";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaAngleDown ,FaAngleUp} from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiBox } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";


const Navbar = () => {
  const [isLoginDropdownOpen, setIsLoginDropdownOpen] = useState(false);
  const handleLoginHover = () => {
    setIsLoginDropdownOpen(true);
  };

  const handleLoginLeave = () => {
    setIsLoginDropdownOpen(false);
  };

  // Fetch categories when the component mounts
  // useEffect(() => {
  //   const loadCategories = async () => {
  //     try {
  //       setLoading(true);
  //       const data = await fetchCategories(); // Fetch categories from API
  //       setCategories(data);
  //     } catch (error) {
  //       setError("Failed to load categories");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   loadCategories();
  // }, []);

  // const toggleMobileMenu = () => {
  //   setIsMobileMenuOpen(!isMobileMenuOpen); // Toggle the mobile menu visibility
  // };

  return (
    <>
      <div className="navbar">
       <div className="nav-logo">
       <img src={logo} alt="Logo" />
       <p>FlickerFinds</p>
       <div className="search-container">
           <div className="searchIcon"><IoSearch /></div>
          <input className="search-bar" type="text" placeholder="Search for products, brands and more..." />
          <div><button className="search-button">Search</button></div>
        </div>
       </div>
       <div className="login-section">
        <Link to="/login">
        <div className="login-button" onMouseEnter={handleLoginHover} onMouseLeave={handleLoginLeave}  >
        <div className="loginIcon"><FaRegUserCircle /></div> <div className="text-content" >Login</div> <div className="downIcon">{isLoginDropdownOpen ? <FaAngleUp /> : <FaAngleDown />}</div> 
        </div>
        </Link>
         {/* Dropdown menu for Login */}
        {isLoginDropdownOpen && (
            <div className="login-dropdown" onMouseEnter={handleLoginHover}  onMouseLeave={handleLoginLeave} >
              <ul>
                <li><Link to="/profile" className="dropdown-item">
                <div className="dropdownitem" ><FaRegUserCircle/>My Profile</div></Link></li>
                <li> <Link to="/orders" className="dropdown-item"><div className="dropdownitem" ><FiBox />Orders</div></Link></li>
                <li> <Link to="/wishlist" className="dropdown-item"><div className="dropdownitem" ><IoMdHeartEmpty />Wishlist</div></Link></li>
                <li><Link to="/logout" className="dropdown-item"> <div className="dropdownitem" ><IoSettingsOutline />Settings</div></Link></li>
              </ul>
            </div>
          )}

          <Link to=""> <div className="cart-button">
          <div className="cartIcon">
           <MdOutlineShoppingCart />
          </div> <div className="text-content">Cart</div>
          </div>
          </Link>

          <Link to="">
          <div className="seller-button">
          <div className="sellerIcon"><AiOutlineShop /></div> <div className="text-content">Become a Seller</div>
        </div>
          </Link>
          <Link to="">
          <div className="dot-button">
          <div className="dotIcon"><BsThreeDotsVertical /></div>
        </div>
          </Link>
        
        
       </div>


       </div>
     
       

    </>
  );
};

export default Navbar;
