import React from 'react'
import '../components/Mission.css';


function Mission() {
    return(
        <>
            <div className='wrapper'>
                    <h2 className='ourmission'>Our Mission.</h2>
                    <div className='ourmission1'>
                        <p>We are dedicated to building quality, easy-to-use apps and websites for you to use in your life.
        Our mission is to make sure that you, too, have fun using our products. It's all we ask and all we have in mind when building these apps. We also want to share the benefits
                        of technology with you! With services like KASWeb, we offer a gateway to the Internet all for low costs and great service. We don't care about how much it costs or what it takes -
                        as long as we are making it easier for you to integrate technology into your life.</p>
                    </div>

                    <h2 className='ourteam'>Our Team.</h2>
                    <div className='teamimages'>
                        <img src='images/abhi.png' />
                        <img src='images/kirthi.png' />
                        <img src='images/arkapt2.jpg' />
                        <img src='images/arvind.png' />
                        <img src='images/paras.png' />
                        
                    </div>
                </div>
        </>
    );
}


export default Mission;