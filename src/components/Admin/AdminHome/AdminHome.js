import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AdminNav from '../AdminNav/AdminNav';

const AdminHome = () => {
    const [orders, setOrders] = useState([])

    useEffect(()=>{
        fetch('https://intense-citadel-58521.herokuapp.com/orderTours')
        .then(res => res.json())
        .then(data=>setOrders(data))
    },[])

    const handleDeleteOrder = (id)=>{
        const url = `https://intense-citadel-58521.herokuapp.com/orderTours/${id}`
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
            <AdminNav></AdminNav>

            <section className='py-5'>
                <div className="container">
                    <div className="row">


                    <div className="col-lg-4">
                            <div className="card bg-warning">
                                <div className="card-body">
                                    <Link className="nav-link" to="/adminhome"><h4 className='text-light'>Dashboard</h4></Link>
                                   
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="card bg-danger">
                                <div className="card-body">
                                    <Link className="nav-link" to="/addPackage"><h4 className='text-light'>Add New Package</h4></Link>
                                </div>
                            </div>
                        </div>

                        
                        <div className="col-lg-4">
                            <div className="card bg-success">
                                <div className="card-body">
                                    <Link className="nav-link" to="/tours"><h4 className='text-light'>Visit Site</h4></Link>
                                   
                                </div>
                            </div>
                        </div>

         

                    </div>
                    <hr />
                    <div className="row mt-5">
                        <div className="col-lg-12">
                            <h5 className='text-primary'>Orders Table: <span className='text-danger'>{orders.length}</span></h5>
                                <table class="table">
                                        <thead class="thead-dark">
                                            <tr>
                                            <th scope="col">Place</th>
                                            <th scope="col">Tourist Name</th>
                                            <th scope="col">Contact</th>
                                            <th scope="col">Person</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Action</th>
                                            </tr>
                                        </thead>

                                  <tbody>
                                {
                                    orders.map((od)=>(
                                        <tr>
                                        
                                        <td>{od.packageName}</td>
                                        <td>{od.TouristName}</td>
                                        <td>{od.TouristMobile}</td>
                                        <td>{od.person}</td>
                                        <td>{od.date}</td>
                                       
                                      
                                       
                                        
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
        </>
    );
};

export default AdminHome;