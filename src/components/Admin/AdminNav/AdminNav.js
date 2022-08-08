import React from 'react';
import { Link } from 'react-router-dom';

const AdminNav = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/#">Artisan Trip Admin Panel</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">

    <li className="nav-item">
        <Link className="nav-link" to="/tours">Visit Site</Link>
      </li>
    <li className="nav-item">
        <Link className="nav-link" to="/adminhome">Dashboard</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/addPackage">Add New Package</Link>
      </li>

    
    </ul>

  </div>
</nav>
        </>
    );
};

export default AdminNav;