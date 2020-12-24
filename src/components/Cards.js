import React from 'react';
import CardItem from './CardItem';
import './Cards.css';


function Cards() {
    return(
        <div className="cards">
            <h1>Our Services</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src='images/bitepartypng.jpg'
                            text="It's a party with Bite Party!"
                            path='/biteparty'
                        />

                        <CardItem
                            src='images/kasweb.png'
                            text='Introducing KASWeb. Attract more customers to your business with a snazzy website.'
                            path='/kasweb'
                        />
                    </ul>
                </div>
            </div>

            <h2>Company News</h2>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className='cards__items'>
                        <CardItem 
                            src='images/kasweb.jpeg'
                            text="KASWeb Releases. Check it out!"
                            path='/kasweb'
                        />

                        <CardItem 
                            src='images/abhi.png'
                            text="Employee of the Year for the 2nd Year in a row: Abhi Venkat"
                        />
                    </ul>
                </div> 
            </div>
        </div>
    )
}

export default Cards;