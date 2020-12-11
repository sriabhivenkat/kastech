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
                            src='biteparty.jpeg'
                            text="Find a great place to eat with all of your friends. It's a party!"
                            label='restaurants'
                            path='/zenith'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;