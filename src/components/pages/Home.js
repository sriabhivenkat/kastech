import Landing from '../Landing.js';
import Cards from '../Cards.js';
import Footer from '../Footer.js';
import React from 'react';
import '../../App.css';


function Home() {
    return(
        <>
            <Landing />
            <Cards />
            <Footer />
        </>
    );
}

export default Home;