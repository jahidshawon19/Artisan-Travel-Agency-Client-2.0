import React from 'react';

const Contact = () => {
    return (
        <>
            
            <section className='bg-light py-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                        <h5 className='text-center text-success font-weight-bold'>OUR LOCATIONS</h5>
                        <h1 className='display-4 text-center font-weight-bold'> Come Visit Us</h1>
                        <p className='text-secondary text-center'>You can visit us at our given office location. Feel free to call.</p>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-lg-8">
                        <form>
                        <div className="form-group">
                            
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Name" />
                            
                        </div>
                        <div className="form-group">
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Email" />
                        </div>
                        <div className="form-group">
                        <textarea class="form-control" id="exampleFormControlTextarea1" placeholder='Message' rows="3"></textarea>
                        </div>
                        <button type="submit" className="btn btn-warning">Send</button>
                        </form>
                        </div>

                        <div className="col-lg-4">
                        <div className="card text-center bg-secondary">
                            <div className="card-body">
                                    <h4 className='font-weight-bold text-warning'>Gulshan-02, Dhaka-1212</h4>
                                    <p className='text-light'>House:4/D (4th Floor), Road:98 <br /> Phone: 01711115263 <br />Tel:0371251 <br /> Email: info@artisan.com</p>
                                    
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
                   

 

         



        </>
    );
};

export default Contact;