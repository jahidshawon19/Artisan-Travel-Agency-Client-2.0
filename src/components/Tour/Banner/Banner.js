import React from 'react';
import './Banner.css';


const Banner = () => {
    return (
        <>
   <section id="home-section">
    <div className="dark-overlay">
      <div className="home-inner">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12 ">
              <h1 className="display-4 mt-5 py-5 text-light font-weight-bold">Explore<strong className='txt-orange'> Tour Packages</strong></h1>
              <h4 className='text-light font-weight-bold'>Plan your Vacation on the most beautiful places</h4>
            </div>
            <div className="col-lg-4 col-md-12">
             
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>                
        </>
    );
};

export default Banner;