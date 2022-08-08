import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer'; 
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router-dom';


const Login = () => {
    const {googleSignIn}= useAuth();
    const location = useLocation()
    const history = useHistory();
    const redirectURL = location.state?.from || '/'
    
    const handleGoogleLogin = ()=>{
        googleSignIn()
        .then(result =>{
            history.push(redirectURL)
        })
    }
    return (
        <>
            <Navbar></Navbar>
                <section className='py-5 mt-5' style={{backgroundImage: "url('https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=500&dpr=1')"}}>
                <div className="container">
                    <div className="row py-5 mt-5">
                        <div className="col-lg-4"></div>
                        <div className="col-lg-4">
                            <div className="card bg-light">
                                <div className="card-title mt-3 p-1 text-center">
                                    <h3 className='font-weight-bold' style={{color:'rgb(228, 119, 18)'}}>Artisan Travel Agency</h3>
                                </div>
                                <div className="card-body">
                                    <button className='btn btn-primary btn-block' onClick={handleGoogleLogin}><span><img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png" alt="" style={{height:'30px', width:'30px'}} /></span> Sign in with Google</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4"></div>
                    </div>
                </div>
                </section>
            <Footer></Footer>
        </>
    );
};

export default Login;