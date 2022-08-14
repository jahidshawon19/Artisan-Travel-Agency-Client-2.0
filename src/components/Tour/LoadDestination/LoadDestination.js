import React, {useState, useEffect} from 'react';

import SingleTour from '../SingleTour/SingleTour';


const LoadDestination = () => {
    const [tourPackage, setTourPackage] = useState([])
    const[displayPackages, setDisplayPackages] = useState([])

    useEffect(()=>{
        fetch('https://intense-citadel-58521.herokuapp.com/tourPackages')
        .then(res => res.json())
        .then(data=>{
            setTourPackage(data)
            setDisplayPackages(data)
        })
    },[])

    const handleSearch=e=>{
        const searchPackage = e.target.value
        const matchPackage = tourPackage.filter(tp => tp.packageName.toLowerCase().includes(searchPackage.toLowerCase()))
        setDisplayPackages(matchPackage)
    }
    return (
        <>
          <section id="tour-section">
          <div className="container py-5">
                <div className="row">
                    <div className="col-lg-12">
                        <h4 className='text-success'>OUR FEATURED TOURS</h4>
                        <h1 className='display-4 font-weight-bold'>Tour Packages</h1>
                        <p className='lead text-secondary'>You will get the most convenient & affordable tour plan from here. Just plan your tour & pack your bag. We provide you all kinds of service whatever you need for a beautiful journey.</p>
                    </div>
                </div>

                <div className="row">

                    <div className="col-lg-4"></div>
                    <div className="col-lg-4">
                        <form action="">
                        <div class="form-group">
                            <input type="text" onChange={handleSearch} class="form-control" placeholder="Search Destination" />
                        </div>
                        </form>
                    </div>
                    <div className="col-lg-4"></div>
                </div>


                <div className="row mt-3">
                        {
                            displayPackages.map(tp => <SingleTour
                                key={tp._id}
                                tpData = {tp}
                            ></SingleTour>)
                        }
                </div>
            </div>
          </section>
        </>
    );
};

export default LoadDestination;