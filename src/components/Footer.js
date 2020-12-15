import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';


function Footer() {
    return(
        <div className='footer-container'>
            <section className="footer-privacy">
                <img src='images/kastechtrans_50_1.png' />
                <Link to='/privacy' className='footer-privacy-heading'>
                    Privacy
                </Link>

                <Link to='/terms' className='footer-privacy-heading'>
                    Terms
                </Link>

                <Link to='/aboutus' className='footer-privacy-heading'>
                    About KASTech
                </Link>
            </section>
        </div>
    );
}


export default Footer;