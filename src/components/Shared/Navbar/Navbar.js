import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import useAuth from '../../../hooks/useAuth';


const Navbar = () => {

    const {loginUser,googleSignOut} = useAuth()
    return (
        <>
        <nav className="navbar navbar-dark navbar-expand-md fixed-top">
         <div className="container">
      <NavLink to="/" className="navbar-brand">คrtiŞคຖ trip</NavLink>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">Home</NavLink>
          </li>
        
        
          

            {
              loginUser.email? 
              <>
               <li className="nav-item">
              <NavLink className="nav-link" to="/profile">MyProfile</NavLink>
              </li>
              <li className="nav-item">
              <button className='btn btn-outline-warning btn-sm mt-1' onClick={googleSignOut}>Log Out</button>
              </li>
              </>
             
              :
              <li className="nav-item">
             <NavLink className="nav-link" to="/login">Sign in</NavLink>
            </li>

            }
          
          
        
        </ul>
      </div>
    </div>
  </nav>
        </>
    );
};

export default Navbar;