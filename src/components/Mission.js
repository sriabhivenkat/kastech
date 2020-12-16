import React from 'react'
import '../components/Mission.css';


function Mission() {
    return(
        <>
            <div className='wrapper'>
                    <p className='ourmission'>Our mission is to improve
                    people's lives through fun and engaging software.</p>
                    <div className='ourmission1'>
                        <h3>Our Motto?</h3>
                        <p6>Have fun!</p6>
                    </div>
                    <h2 className='ourteam'>Our Team.</h2>
                    <div className='teamimages'>
                        <img src='images/kirthi.png' />
                        <img src='images/arkapt3.png' />
                        <img src='images/abhi.png' />
                        
                    </div>

                    <div className='names'>
                        <h4>Kirthi Ramesh</h4>
                        <h4>Arka Bose</h4>
                        <h4>Sriabhi Venkat</h4>
                    </div>

                    <div className='titles'>
                        <h5>Chief Executive Officer</h5>
                        <h5>Chief Operating Officer</h5>
                        <h5>Chief Technical Officer</h5>

                    </div>

                    <div className='teamimages'>
                        <img src='images/arvind.png' />
                        <img src='images/paras3.png' />
                    </div>

                    <div className='names'>
                        <h4>Arvind Balaji</h4>
                        <h4>Paras Amin</h4>
                    </div>

                    <div className='titles1'>
                        <h5>VP of Software Engineering</h5>
                        <h5>Director of Monetization</h5>
                    </div>
                </div>
        </>
    );
}


export default Mission;