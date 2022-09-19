import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';

const Success = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="container">
                <div className="row py-5">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-8 mt-5">
                        <img src="https://www.beauty-addict.com/wp-content/uploads/2021/02/Payment-success.png" alt="" className='img-fluid' />
                    </div>
                    <div className="col-lg-2"></div>
                </div>
            </div>
        </>
    );
};

export default Success;