import React from 'react';

const Footer = () => {
    return (
        <>
             <footer id="footer-section" className="text-center text-light py-3 bg-dark">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <h1 className='text-warning'>คrtiŞคຖ trip</h1>
                        <p className='text-left text-secondary'>Artisan Tours & Travel”, is one of the most experienced travel agency in the field of tourism in Bangladesh with over ten years’ of experience. We are a full service tour operator offering top quality of tourism and travel related services in all aspects both incoming and outgoing tourism services all over the world </p>
                        <img src="https://www.kindpng.com/picc/m/47-479417_transparent-payment-methods-png-american-express-png-download.png" alt="" className='img-fluid' style={{height:'120px'}} />
                    </div>
                    <div className="col-lg-4 mt-2">
                        <h6 style={{color:'rgb(255, 72, 0)'}}>Quick Links</h6>
                        <a href="/#" className='text-secondary'>Home</a> <br /> <br />
                        <a href="/#" className='text-secondary'>Career</a> <br /> <br />
                        <a href="/#" className='text-secondary'>Refund</a> <br /> <br />
                        <a href="/#" className='text-secondary'>Terms</a> <br /> <br />
                    </div>

                    <div className="col-lg-4 mt-2">
                        <h6 style={{color:'rgb(255, 72, 0)'}}>Contact us</h6>
                        <a href="/#" className='text-secondary'>4th Floor, Navana FS Cosmo, Gulshan-02</a> <br /> <br />
                        <a href="/#" className='text-secondary'>01286136582</a> <br /> <br />
                        <a href="/#" className='text-secondary'>7125964</a> <br /> <br />
                        <a href="/#" className='text-secondary'>info@artisan.com</a> <br /> <br />
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <p>Developed by: <span><a className='text-info' href="jahidshawon.netlify.app">Jahid Hasan</a></span></p>
                    </div>
                </div>
            </div>
          
  </footer> 
           
        </>
    );
};

export default Footer;