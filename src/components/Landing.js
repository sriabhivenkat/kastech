import React from 'react';
import '../App.css';
import Button  from './Button';
import './Landing.css';

function Landing() {
    return(
        <div className='landingcontainer'>
            <h1>CONNECTING THE WORLD</h1>
            <div className='land-button'>
                <Button className='btns' buttonStyle='btn--outline'
                buttonSize='btn--large'>
                    BUILD YOUR WEBSITE
                </Button>
            </div>
        </div>
    );
}

export default Landing;