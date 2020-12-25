import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';


function Footer() {
    return(
        <div className='footer-container'>
            <section className="footer-privacy">
                <div style={{display: 'flex'}} className="image-container">
                    <img src='images/kastechtrans_50_1.png' />
                </div>
                <div style={{display: 'flex'}} className="link-container">
                <Link to='/privacy' className='footer-privacy-heading'>
                    Privacy
                </Link>

                <Link to='/terms' className='footer-privacy-heading'>
                    Terms
                </Link>

                <Link to='/aboutus' className='footer-privacy-heading'>
                    About
                </Link>
                </div>
            </section>
        </div>
    );
}


export default Footer;