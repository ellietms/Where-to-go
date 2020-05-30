import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const DropDown = () => {
    return(
    <div className="navbar  navbar-expand-lg  col-4 pb-5 col-md-3 py-md-auto px-md-auto   pl-4  col-lg-2 pb-lg-5 p-lg-2 col-xl-2 pl-xl- navbar-light">
    <div className="dropdown pt-5">
    <button className="btn dropdown-toggle dropdown-color" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Filter by Region
    </button>
    <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
    <button className="dropdown-item" type="button">Africa</button>
    <button className="dropdown-item" type="button">America</button>
    <button className="dropdown-item" type="button">Asia</button>
    <button className="dropdown-item" type="button">Europe</button>
    <button className="dropdown-item" type="button">Oceania</button>
  </div>
</div>         
        </div>  
    )
}

export default DropDown;