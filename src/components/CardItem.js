import React from 'react';
import { Link } from 'react-router-dom';


function CardItem() {
    return(
        <>
            <li className="cards_items">
                <Link className="Link.cards_items_link">
                    <figure className="cards_item_pic-wrap">
                        <img src='/' alt="Travel Image" className="cards_item_img" />
                    </figure>
                    <div className="cards_item_info">
                        <h5 className="cardsitemtext"/>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default CardItem;