import React, { useEffect, useState, useRef }  from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
// import Banner from '../Banner/Banner';
import Poster from '../Poster/Poster';
import Faq from '../Faq/Faq';

import './Order.css';
import { useParams } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Order = () => {
    const {loginUser} = useAuth()

    const {tourId} = useParams()

    const [singleTour, setSingleTour] = useState({}) 

    const packageNameRef = useRef();
    const priceRef = useRef();
    const TouristNameRef = useRef();
    const TouristEmailRef = useRef();
    const TouristMobileRef = useRef();
    const personRef = useRef();
    const paymentMethodRef = useRef();
    const transactionIdRef = useRef();
    const dateRef = useRef();
    const addressRef = useRef();
    const cityRef = useRef();

    const handleTourOrder = e =>{
        const packageName = packageNameRef.current.value;
        const unitPrice = priceRef.current.value;
        const intUnitPrice = parseInt(unitPrice) 
        const TouristName= TouristNameRef.current.value;
        const TouristEmail = TouristEmailRef.current.value;
        const TouristMobile = TouristMobileRef.current.value;
        const person = personRef.current.value;
        const intPerson = parseInt(person)
        const totalBill = parseInt(intUnitPrice*intPerson)
        
        const paymentMethod = paymentMethodRef.current.value;
        const transactionId = transactionIdRef.current.value;
        const date = dateRef.current.value;
        const address = addressRef.current.value;
        const city = cityRef.current.value;


        const newTourOrder = {
            'packageName':packageName, 
            'TouristName':TouristName,
            'TouristEmail':TouristEmail,
            'TouristMobile':TouristMobile,
            'person':intPerson,
            'totalBill':totalBill,
            'paymentMethod':paymentMethod,
            'transactionId':transactionId,
            'date':date,
            'address':address,
            'city':city,
        
        }

        

        fetch('http://localhost:8000/orderTour', {
            method: 'POST',
            headers: {
              'content-type' : 'application/json',
            },
            body: JSON.stringify(newTourOrder)
          })
            .then(res => res.json())
            .then(data =>{
                if(data.insertedId){
                    alert('Your Order Submitted Successfully. We Will Call You Soon.Thanl You')
                    e.target.reset()
                }
            })

        e.preventDefault();
        
    }



    useEffect(()=>{
        fetch(`http://localhost:8000/tourPackages/${tourId}`)
        .then(res=>res.json())
        .then(data=>setSingleTour(data))
    }, [])


    
    return (
        <>
            <Navbar></Navbar>
            {/* <Banner></Banner> */}
            <div className="container">
                <div className="row py-5 mt-5">
                    <div className="col-lg-5">
                    <div class="card">
                    <img src={singleTour.photo} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <div className="card-text">
                                {singleTour.details}
                        </div>
                    </div>
                    </div>
                    </div>
                    <div className="col-lg-7">
                        <form action="" method="POST" onSubmit={handleTourOrder}>
                            <div className="row">
                                
                           <div className="col-lg-6">

                                <div class="form-group" >
                                    <label for="exampleInputEmail1">Person</label>
                                    <input type="number" class="form-control" ref={personRef} />
                                </div>
                               

                                <div class="form-group">
                                <label for="floatingSelect">Select Online Payment Method</label>
                                <select class="form-control" id="floatingSelect" aria-label="Floating label select example" ref={paymentMethodRef}>
                                    
                                    <option value="1">Bikash</option>
                                    <option value="2">Nogadh</option>
                                    
                                </select>
                           
                            </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Transaction ID</label>
                                    <input type="text" class="form-control" ref={transactionIdRef} />
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Date</label>
                                    <input type="date" class="form-control" ref={dateRef} />
                                </div>

                                <div class="form-group d-none">
                                   
                                    <input type="text" class="form-control" value={singleTour.packageName} ref={packageNameRef} />
                                    <input type="number" class="form-control" value={singleTour.price} ref={priceRef} />
                                </div>
                               


                           </div>

                           <div className="col-lg-6">
                           <div class="form-group">
                                    <label for="exampleInputEmail1">Full Name</label>
                                    <input type="text" class="form-control" value={loginUser.displayName} ref={TouristNameRef} />
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Mobile Number</label>
                                    <input type="text" class="form-control" ref={TouristMobileRef} maxLength="11" minLength="11" />
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Email</label>
                                    <input type="email" class="form-control" value={loginUser.email} ref={TouristEmailRef} />
                                </div>
                                  <div class="form-group">
                                    <label for="exampleFormControlTextarea1">Address</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" ref={addressRef}></textarea>
                                </div>

                                <div class="form-group">
                                <label for="floatingSelect">City</label>
                                <select class="form-control" id="floatingSelect" aria-label="Floating label select example" ref={cityRef}>
                                    
                                    <option value="Agrabadh">Agrabadh</option>
                                    <option value="Dewan Hat">Dewan Hat</option>
                                    <option value="Lalkhan Bazar">Lalkhan Bazar</option>
                                    <option value="GEC">GEC</option>
                                    <option value="2 No Gate">2 No Gate</option>
                                    <option value="Muradpur">Muradpur</option>
                                    <option value="Bahaddarhat">Bahaddarhat</option>
                                    <option value="Chawkbazar">Chawkbazar</option>
                                </select>
                           
                            </div>

                           </div>
                            
                            </div>
                           

                        <input type="submit" value="Submit Order" className='btn btn-lg btn-block btn-warning' />                           

                           
                        </form>
                    </div>
                </div>
            </div>
                <br /> <br />
            <Poster></Poster>
            <Faq></Faq>
            <Footer></Footer>   
        </>
    );
};

export default Order;