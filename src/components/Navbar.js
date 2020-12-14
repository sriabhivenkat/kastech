import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth<=960){
            setButton(false);
        }else{
            setButton(true);
        }
    };

    window.addEventListener('resize', showButton);
    return(
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to='/' className='navbar-logo'>
                        KASTech
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times': 'fas fa-bars'}/>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/apps' className='nav-links' onClick={closeMobileMenu}>
                                Our Apps
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                                Contact Us
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/aboutus' className='nav-links' onClick={closeMobileMenu}>
                                About Us
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/kasweb' className='nav-links' onClick={closeMobileMenu}>
                                KASWeb
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>    
        </>
    )
}

export default Navbar