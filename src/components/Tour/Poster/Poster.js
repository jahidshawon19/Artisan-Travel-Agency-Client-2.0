import React from 'react';
import './Poster.css';

const Poster = () => {
    return (
        <>
        <section className='poster mt-5'>
        <div className="container py-3 ">
                <div className="row">
                    <div className="col-lg-6 py-5">
                    <h1 className='text-light font-weight-bold display-4'>Artisan trip</h1>
                    <p className="lead text-light">Artisan Trip is a Bangladeshi secure platform that satisfy customer’s vacation necessities and flight tickets. We guarantee a satisfying occasion and healthy encounters</p>
                    <button className='btn btn-outline-dark btn-lg '>Contact Us</button>
                    </div>
                    <div className="col-lg-2"></div>
                    <div className="col-lg-4">
                        <img src="https://images.pexels.com/photos/4553618/pexels-photo-4553618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=450&dpr=1" alt="" className='poster-img rounded' />
                    </div>
                </div>
            </div>
        </section>
      
        </>
    );
};

export default Poster;