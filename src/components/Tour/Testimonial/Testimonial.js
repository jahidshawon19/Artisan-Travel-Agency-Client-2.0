import React from 'react';

const Testimonial = () => {
    return (
        <section className='testimonial bg-light py-5'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                    <h4 className='text-success'>TESTIMONIALS</h4>
                        <h1 className='display-4 font-weight-bold'>What Our Client Says</h1>
                        <p className='lead text-secondary'>The quality of customer care is important for our company and not just for its reputation, but also for its bottom line. We try to collect our customer’s opinion and experience with Flamingo tours & travels. We offer customer care service. Offering customer care that not only meets all the criteria but that also available 24 hours a day. Clients can direct rate our services in the webpage and can share their thoughts and experience through comment section.</p>
                    </div>
                </div>

             <div className="row">
                <div className="col-lg-12">
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
       <div className="card-body">
    <blockquote className="blockquote mb-0">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <footer className="blockquote-footer"><cite title="Source Title">Aman Masum</cite></footer>
    </blockquote>
  </div>
    </div>
    <div className="carousel-item">
    <div className="card-body">
    <blockquote className="blockquote mb-0">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <footer className="blockquote-footer"><cite title="Source Title">Sadrul Tanim</cite></footer>
    </blockquote>
  </div>
    </div>
    <div className="carousel-item">
    <div className="card-body">
    <blockquote className="blockquote mb-0">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <footer className="blockquote-footer"><cite title="Source Title">Emaz Uddin</cite></footer>
    </blockquote>
  </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
                </div>
             </div>
            </div>
        </section>
    );
};

export default Testimonial;