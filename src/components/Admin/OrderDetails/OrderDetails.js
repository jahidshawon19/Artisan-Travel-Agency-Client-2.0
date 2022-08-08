import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AdminNav from '../AdminNav/AdminNav';

const OrderDetails = () => {
    const [orderDetail, setOrderDetail] = useState({})
    const {orderId} = useParams()

    useEffect(()=>{
        fetch(`http://localhost:8000/orderTours/${orderId}`)
        .then(res=>res.json())
        .then(data=>setOrderDetail(data))
    }, [])
    return (
        <>
            <AdminNav></AdminNav>
            <section className='py-5'>
                <div className="container">
                    <div className="row">
                        
                        <div className="col-lg-12">
                        <h3 className='text-secondary text-center'>Order Details</h3>
                            <div className="card">
                                <div className="card-body">
                                    <p><strong>Place:</strong> {orderDetail.packageName}</p>
                                    <p><strong>Tour Date:</strong> {orderDetail.date}</p>
                                    <p><strong>Full Name:</strong> {orderDetail.TouristName}</p>
                                    <p><strong>Email:</strong> {orderDetail.TouristEmail}</p>
                                    <p><strong>Contact No: </strong> {orderDetail.TouristMobile}</p>
                                    <hr />
                                    <p><strong>Person: </strong> {orderDetail.person}</p>
                                    <p><strong>Total Bill: </strong> {orderDetail.totalBill} Taka</p>
                                    <p><strong>Transaction ID: </strong> {orderDetail.transactionId}</p>
                                    <p><strong>Payment Method: </strong> {orderDetail.paymentMethod}</p>
                                    <hr />
                                    <p><strong>Address: </strong> {orderDetail.address}</p>
                                    <p><strong>City: </strong> {orderDetail.city}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default OrderDetails;