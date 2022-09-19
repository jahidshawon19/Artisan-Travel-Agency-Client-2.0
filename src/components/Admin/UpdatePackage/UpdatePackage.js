import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AdminNav from '../AdminNav/AdminNav';

const UpdatePackage = () => {
    const [tourPackage, setTourPackage] = useState({})
    const { id } = useParams()

    useEffect(()=>{
        const url = `http://localhost:5000/tourPackages/${id}`
        fetch(url)
            .then(res =>res.json())
            .then(data => setTourPackage(data))
    }, [])

    const handleOnChangeName = e =>{
        const updateName = e.target.value 
        const updatedPacakge = {packageName:updateName, packageDuration:tourPackage.packageDuration, price: tourPackage.price, photo:tourPackage.photo, details:tourPackage.details}
        setTourPackage(updatedPacakge)
    }

    const handleOnChangePackage = e =>{
        const updatePackageDuration = e.target.value 
        const updatedPacakge = {packageName:tourPackage.packageName, packageDuration:updatePackageDuration, price: tourPackage.price, photo:tourPackage.photo, details:tourPackage.details}
        setTourPackage(updatedPacakge)
    }

    const handleOnChangePrice = e =>{
        const updatePrice = e.target.value 
        const updatedPacakge = {packageName:tourPackage.packageName, packageDuration:tourPackage.packageDuration, price: updatePrice, photo:tourPackage.photo, details:tourPackage.details}
        setTourPackage(updatedPacakge)
    }

    const handleOnChangePhoto = e =>{
        const updatePhoto = e.target.value 
        const updatedPacakge = {packageName:tourPackage.packageName, packageDuration:tourPackage.packageDuration, price: tourPackage.price, photo:updatePhoto, details:tourPackage.details}
        setTourPackage(updatedPacakge)
    }


    const handleOnChangeDetails = e =>{
        const updateDetails = e.target.value 
        const updatedPacakge = {packageName:tourPackage.packageName, packageDuration:tourPackage.packageDuration, price: tourPackage.price, photo:tourPackage.photo, details:updateDetails}
        setTourPackage(updatedPacakge)
    }



    const handleUpdateTourPackage = e =>{
        const url = `http://localhost:5000/tourPackages/${id}`
        fetch(url, {
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(tourPackage)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount > 0){
                alert('Updated Tour Package')
                setTourPackage({})
            }
        })
        e.preventDefault();
        
    }
    return (
        <>
            <AdminNav></AdminNav>
            <section className='py-5 mt-5'>
            <div className="container">
                <div className="row">
                        
                    <div className="col-lg-5">
                        <h5 className='text-dark'>Update <span className='text-warning'>{tourPackage.packageName || ''}</span></h5>
                        <hr />
                        <div className="card">
                            <div className="card-body">


                            <form onSubmit={handleUpdateTourPackage}>
                                <div className="row">
                                    <div className="col-lg-6">
                                            <div className="form-group">
                                                <label>Package Name</label>
                                                <input type="text" className="form-control" value={tourPackage.packageName || ''}  onChange={handleOnChangeName} />
                                                
                                            </div>

                                            <div className="form-group">
                                                <label>Package</label>
                                                <input type="text" className="form-control"   value={tourPackage.packageDuration || ''} onChange={handleOnChangePackage} />
                                                
                                            </div>


                                    </div>

                                    <div className="col-lg-6">
                                                                         
                                        <div className="form-group">
                                            <label>Price</label>
                                            <input type="number" className="form-control" value={tourPackage.price || ''} onChange={handleOnChangePrice} />
                                            
                                        </div>

                                        <div className="form-group">
                                            <label>Photo URL</label>
                                            <input type="text" className="form-control" value={tourPackage.photo || ''} onChange={handleOnChangePhoto} />
                                            
                                        </div>
                            
                                
                                        
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-12">
                                        
                                            <div className="form-group">
                                                <label>Package Details</label>
                                                <textarea class="form-control" rows="3"  value={tourPackage.details || ''}  onChange={handleOnChangeDetails}></textarea>
                                                
                                            </div>
                                    <button type="submit" className="btn btn-info btn-sm">Update Package</button>
                                    <button type="reset" className="btn btn-danger btn-sm">Cancel</button>
                                    </div>
                                    
                                </div>
                
                            </form> 
                            </div>
                        </div>
                    </div>



                  
                </div>
            </div>
            </section>
        </>
    );
};

export default UpdatePackage;