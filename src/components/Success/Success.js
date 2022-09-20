import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const Success = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="container">
         
                <div className="row py-5">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-8 mt-5">
                    <div class="alert alert-primary mt-5" role="alert">
                        Your invoice is ready. Check out your profile
                    </div>
                        <img src="https://www.beauty-addict.com/wp-content/uploads/2021/02/Payment-success.png" alt="" className='img-fluid' style={{'height':'60%'}} />
                    </div>
                    <div className="col-lg-2"></div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Success;