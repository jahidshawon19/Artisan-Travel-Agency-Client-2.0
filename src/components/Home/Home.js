import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';
// import video from '../../video/video.mp4'

const Home = () => {
    return (
        <>
            <div className="hero">

                <video autoPlay loop muted plays-inline class="home-video">
                    <source src="" type="video/mp4" />
                </video>

                <nav class="home-nav">
                    <h3 class="logo-text">คrtiŞคຖ trip</h3>
                    <ul>
                        {/* <li><a href="/">About</a></li>
                        <li><a href="/">Contact</a></li>
                        <li><a href="/">Sign In</a></li> */}
                    </ul>
                </nav>
                <div className="content">
                    <h1>Artisan Trip</h1>
                    <h3 className='text-light'>We provide the best counsel and all necessary support</h3>
                    <div class="category">
                         <NavLink to="/tours">View Packages</NavLink>
                         
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;