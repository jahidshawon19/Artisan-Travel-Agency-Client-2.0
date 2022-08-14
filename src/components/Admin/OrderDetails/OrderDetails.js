import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AdminNav from '../AdminNav/AdminNav';

const OrderDetails = () => {
    const [orderDetail, setOrderDetail] = useState({})
    const {orderId} = useParams()

    useEffect(()=>{
        fetch(`https://intense-citadel-58521.herokuapp.com/orderTours/${orderId}`)
        .then(res=>res.json())
        .then(data=>setOrderDetail(data))
    }, [])



    return (
        <>
            <AdminNav></AdminNav>
        
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4"></div>
                        <div className="col-lg-4 mt-3">
                            <h2 className='text-center'>Order Details</h2>
                        </div>
                        <div className="col-lg-4"></div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-lg-6">
                            <h2 className='text-left text-warning'>คrtiŞคຖ trip</h2>
                            <h4 className='font-weight-bold'>{orderDetail.TouristName}</h4>
                            <small>Mobile: {orderDetail.TouristMobile}</small> <br />
                            <small>Email: {orderDetail.TouristEmail}</small> <br />
                            <small>{orderDetail.address}</small> <br />
                            <small>Area: {orderDetail.city}</small> <br />
                        </div>
                        <div className="col-lg-3"></div>

                        <div className="col-lg-3">
                            <small><strong>Payment Method: </strong>{orderDetail.paymentMethod}</small> <br />
                            <small><strong>Transaction ID: </strong>{orderDetail.transactionId}</small> <br />
                            <small><strong>Tour Date: </strong>{orderDetail.date}</small> <br />
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-lg-12">
                        <table class="table table-bordered">
  <thead class="thead-light">
    <tr>
      <th scope="col">No. of Tourist</th>
      <th scope="col">Destination</th>
      <th scope="col">Package Price</th>
      <th scope="col">Total Bill</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>{orderDetail.person}</th>
      <td>{orderDetail.packageName}</td>
      <td>{orderDetail.intUnitPrice}</td>
      <td>{orderDetail.totalBill} </td>
    </tr>
  
  </tbody>
</table>
<small>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, provident. Deserunt voluptate dolorum obcaecati consectetur! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, laborum?</small>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default OrderDetails;