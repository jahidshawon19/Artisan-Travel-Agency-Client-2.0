
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import AdminNav from '../AdminNav/AdminNav';

const AddPacakge = () => {
    const [tourPackage, setTourPackage] = useState([])

    const packageNameRef = useRef();
    const packageRef = useRef();
    const priceRef = useRef();
    const photoRef = useRef();
    const detailsRef = useRef();



    const handleAddTourPackage = e =>{
        const packageName = packageNameRef.current.value; 
        const packageDuration = packageRef.current.value ;
        const price = priceRef.current.value;
        const photo = photoRef.current.value;
        const details = detailsRef.current.value; 

        const newTourPackage = {'packageName':packageName, 'packageDuration':packageDuration,'price':price,'photo':photo,'details':details}
        
   



 
        fetch('http://localhost:5000/tourPackage', {
            method: 'POST',
            headers: {
              'content-type' : 'application/json',
            },
            body: JSON.stringify(newTourPackage)
          })
            .then(res => res.json())
            .then(data =>{
                if(data.insertedId){
                    alert('New Tour Package Added Successfully')
                    e.target.reset()
                }
            })
            
       
        
        e.preventDefault()
        
    }



    
    useEffect(()=>{
        fetch('http://localhost:5000/tourPackages')
        .then(res => res.json())
        .then(data=>setTourPackage(data))
    },[])



    const handleDeletePackage = (id)=>{
        const url = `http://localhost:5000/tourPackages/${id}`
        fetch(url, {
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount){
                const remainingTourPackage = tourPackage.filter(tp=>tp._id !== id)
                setTourPackage(remainingTourPackage)
            }

        })
    }

    return (
        <>
            <AdminNav></AdminNav>
            <section className='py-5 mt-5'>
            <div className="container">
                <div className="row">

                    <div className="col-lg-5">
                        <h5 className='text-primary'>Add New Tour Package</h5>
                        <hr />
                        <div className="card">
                            <div className="card-body">


                            <form onSubmit={handleAddTourPackage}>
                                <div className="row">
                                    <div className="col-lg-6">
                                            <div className="form-group">
                                                <label>Package Name</label>
                                                <input type="text" className="form-control"  placeholder="Saitmartin tour" ref={packageNameRef} />
                                                
                                            </div>

                                            <div className="form-group">
                                                <label>Package</label>
                                                <input type="text" className="form-control"  placeholder="2 Days-2 Nights" ref={packageRef} />
                                                
                                            </div>


                                    </div>

                                    <div className="col-lg-6">
                                                                         
                                        <div className="form-group">
                                            <label>Price</label>
                                            <input type="number" className="form-control" ref={priceRef} />
                                            
                                        </div>

                                        <div className="form-group">
                                            <label>Photo URL</label>
                                            <input type="text" className="form-control" ref={photoRef} placeholder="300 X 300" />
                                            
                                        </div>
                            
                                
                                        
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-12">
                                        
                                            <div className="form-group">
                                                <label>Package Details</label>
                                                <textarea class="form-control" rows="3"  ref={detailsRef}></textarea>
                                                
                                            </div>
                                    <button type="submit" className="btn btn-info btn-sm">Add Now</button>
                                    <button type="reset" className="btn btn-danger btn-sm">Cancel</button>
                                    </div>
                                    
                                </div>
                
                            </form>
                            </div>
                        </div>
                    </div>



                    <div className="col-lg-7 mt-5">
                    <h5 className='text-warning'>Total: {tourPackage.length}</h5>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                            <th scope="col">Package Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Duration</th>
                            <th scope="col">Action</th>
                           
                            </tr>
                        </thead>
                            <tbody>
                                {
                                    tourPackage.map((tp)=>(
                                        <tr>
                                        
                                        <td>{tp.packageName}</td>
                                        <td>{tp.price}</td>
                                        <td>{tp.packageDuration}</td>
                                      
                                       
                                        
                                        <td>  
                                            <Link to={`/updatePackage/${tp._id}`} className='btn btn-warning btn-sm'>Edit</Link>||<button  className='btn btn-outline-warning btn-sm' onClick={()=>handleDeletePackage(tp._id)}>Delete</button> </td>
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

export default AddPacakge;