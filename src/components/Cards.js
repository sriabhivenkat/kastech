import React from 'react';
import CardItem from './CardItem';
import './Cards.css';


function Cards() {
    return(
        <div className="cards">
            <h1><b>Our Services</b></h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src='images/bitepartypng.jpg'
                            text="Find a great place to eat with all of your friends. It's a party!"
                            path='/biteparty'
                        />

                        <CardItem
                            src='images/kasweb.png'
                            text='Attract more customers to your business with a snazzy website. Welcome to KASWeb.'
                            path='/kasweb'
                        />

                        <CardItem 
                            src='images/zenith.png'
                            text='Make sure you and your organizations can always connect with each other. Stay on top of things with Zenith.'
                            path='/zenith'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;