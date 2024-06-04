import { assets } from '../../assets/assets'
import './Footer.css'


const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Welcome to our culinary haven where quality meets passion. We pride ourselves on offering the finest dining experience with exceptional service and delightful dishes. Join us on a gastronomic journey that celebrates flavors from around the world.</p>
                <div className='footer-social-icons'>
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>                
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>7892545926</li>
                    <li>kovvururajesh8@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copy Right @ 2024 - All rights are reserved</p>     
    </div>
  )
}

export default Footer
