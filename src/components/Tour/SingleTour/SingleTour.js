import React from 'react';
import { NavLink } from 'react-router-dom';

const SingleTour = (props) => {
    const {_id,packageName,packageDuration,price,photo} = props.tpData
    return (
        <>
                 <div className="col-lg-3">
                    <div class="card">
                    <img src={photo} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title font-weight-bold">{packageName}</h5>
                        <p class="card-text">{packageDuration}</p>
                        <small className='text-secondary font-weight-bold'>{price} BDT</small> <br />
                        <NavLink to={`/tour/order/${_id}`} class="btn btn-danger btn-sm btn-block">Book Now</NavLink>
                    </div>
                    </div>
                    </div>
        </>
    );
};

export default SingleTour;