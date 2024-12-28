import React from 'react';
import './Footer.css'; // Assuming you have a separate CSS file for styling
import facelogo from '../../assests/facebook.png'
import instalogo from '../../assests/instagram (1).png'
import footerimg from '../../assests/footerimg.png'
const Footer = () => {
    return (
       
        <div className='footer-main'>
         <div className="footer">
            <div className="footer-content">
                <div className="footer-content-left">
                    <div className="footer-section-left">
                        <h3>ABOUT</h3>
                        <ul>
                            <li>Contact Us</li>
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>FlickerFinds Stories</li>
                            <li>Press</li>
                            <li>Corporate Information</li>
                        </ul>
                    </div>

                    <div className="footer-section-left">
                        <h3>GROUP COMPANIES</h3>
                        <ul>
                            <li>Myntra</li>
                            <li>Cleartrip</li>
                            <li>Shopsy</li>
                        </ul>
                    </div>

                    <div className="footer-section-left">
                        <h3>HELP</h3>
                        <ul>
                            <li>Payments</li>
                            <li>Shipping</li>
                            <li>Cancellation & Returns</li>
                            <li>FAQ</li>
                        </ul>
                    </div>

                    <div className="footer-section-left">
                        <h3>CONSUMER POLICY</h3>
                        <ul>
                            <li>Cancellation & Returns</li>
                            <li>Terms Of Use</li>
                            <li>Security</li>
                            <li>Privacy</li>
                            <li>Sitemap</li>
                            <li>Grievance Redressal</li>
                            <li>EPR Compliance</li>
                        </ul>
                    </div>
                </div>
                <div className='footer-content-middle'></div>
                <div className="footer-content-right">
                    <div className="footer-section-right">
                        <h3>Mail Us:</h3>
                        <p>FlickerFinds Internet Private Limited,</p>
                        <p>Buildings Alyssa, Begonia & Clove Embassy Tech Village,</p>
                        <p>Outer Ring Road, Devarabeesanahalli Village,</p>
                        <p>Bengaluru, 560103, Karnataka, India</p>
                      
                  
                        <h3>Social</h3>
                        <ul>
                        <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" >
                         </a>
                         <img src={facelogo} alt="" /></li>
                        <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"></a>
                        <img src={instalogo} alt="" /></li>
                        </ul>
                    </div>
                    <div className="footer-section-right">
                        <h3>Registered Office Address:</h3>
                        <p>FlickerFinds Internet Private Limited,</p>
                        <p>Buildings Alyssa, Begonia & Clove Embassy Tech Village,</p>
                        <p>Outer Ring Road, Devarabeesanahalli Village,</p>
                        <p>Bengaluru, 560103, Karnataka, India</p>

                        <p>CIN : U51109KA2012PTC066107</p>
                        <p>Telephone: 044-45614700 / 044-67415800</p>
                    </div>
                </div>
            </div>
        <div className="footer-social">
        <div className="footer-legal">
        <div>
            <a href="/become-a-seller">Become a Seller</a>
            <a href="/advertise">Advertise</a>
            <a href="/gift-cards">Gift Cards</a>
            <a href="/help-center">Help Center</a>
        </div>
        <div><p>© 2007-2024 FlickerFinds.com</p></div>
       <img src={footerimg} alt="" />
       </div>
        </div>
        </div>
        
        </div>
        
    );
};

export default Footer;


