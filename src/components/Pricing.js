import React from 'react'
import '../components/Pricing.css';
import '../App.css';
import Button2 from './Button2';
import Cards from './Cards.js';

function Pricing() {
    return(
        <>
            <div className='wrapper'>
                <div className='purpose'>
                    <h2>Welcome to your Internet.</h2>
                </div>
                <div className='purpose2'>
                    <h3>You bring us the <mark className='green'>idea.</mark></h3>
                    <h3 >We bring it to <b><mark className='blue'>life.</mark></b></h3>
                    <p1>With KASWeb, our skilled developers will build a website that is sure to increase your customers.</p1>
                </div>

                <div className='attack'>
                    <h4>We <mark className='green'>undercut</mark> mainstream web development companies.</h4>
                    <p5>Our most expensive package is 25% of the price of the cheapest package for some companies. Rest easy knowing that your business is getting ready for the <mark className='kasred'>promise of tomorrow.</mark></p5>
                </div>

                
                <div className='pricing-info'>
                    <h4>Services</h4>
                    <img className="price-table" src='images/pricing_structure2.png' />
                    <img className="mobile-price-table" src='images/pricing_structure3.png' />
                    <p6>Quotes are also offered through e-mail contact. Click the button below if you would like a personalized quote.</p6>
                    <Button2  style={{margin: '100px'}} className='btns' buttonStyle='btn--primary'
                    buttonSize='btn--large'>
                        Contact Us.
                    </Button2>
                </div>
            </div>
        </>
    );
}




export default Pricing;