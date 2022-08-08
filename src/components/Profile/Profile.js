import React, { useEffect, useState } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';
import './Profile.css';


const Profile = () => {
    const {loginUser} = useAuth()
    const [orders, setOrders] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:8000/myorders?email=${loginUser.email}`)
        .then(res => res.json())
        .then(data=>setOrders(data))
    },[])

    const handleDeleteOrder = (id)=>{
        const url = `http://localhost:8000/orderTours/${id}`
        fetch(url, {
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount){
                const remainingOrder = orders.filter(tp=>tp._id !== id)
                setOrders(remainingOrder)
            }

        })
    }
    return (
        <>
            <Navbar></Navbar>

            <section className='py-5 bg-light mt-5' id="profile-section">
                
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-lg-4">
                            <div className="card p-3">
                                <img src={loginUser.photoURL} alt="" style={{ marginLeft:'40%', borderRadius: '50%', height:'70px', width:'70px'}}/>
                                <div className="card-body">
                                    <h4 className='text-center'> {loginUser.displayName}</h4>
                                    <p className='text-center'> {loginUser.email}</p>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-6">
                            <h5 className='text-info'>Your Total Orders: <span className='text-danger'>{orders.length}</span></h5>
                                <table class="table">
                                        <thead class="thead-dark">
                                            <tr>
                                            <th scope="col">Place</th>
                                      
                                            <th scope="col">Action</th>
                                            </tr>
                                        </thead>

                                  <tbody>
                                {
                                    orders.map((od)=>(
                                        <tr>
                                        
                                        <td>{od.packageName}</td>
                                    
                                        
                                        <td>
                                            <Link to={`/order/${od._id}`} className='btn btn-outline-secondary btn-sm'>Details</Link> 
                                          
                                            ||
                                            <button  className='btn btn-danger btn-sm' onClick={()=>handleDeleteOrder(od._id)}>Cancel Order</button> 
                                        
                                        </td>
                                        
                                        
                                        </tr>
                                    ))
                                }

                            </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </section>
            <Footer></Footer>
        
        </>
    );
};

export default Profile;