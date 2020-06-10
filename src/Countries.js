import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const Countries = ({filteredCountry}) => {

  return (
    <div className="container">
      <div className="row">
          {
        filteredCountry.map((eachcountry,index) => {
            return (
            <div key={index} className="col-7  mx-auto col-sm-9  col-md-6 col-lg-3 col-xl-3 mb-sm-2 mb-md-2 mt-md-3 mb-lg-3 mt-lg-3 p-2">    
            <div key={index} className="card mt-4 mx-auto">
            <div className="card-img">    
            <img className="card-img-top" src={eachcountry.flag} alt="" />
            </div>  
            <div key={index} class="card-body">
            <span class="card-title card-text-container">{eachcountry.name}</span>
                <div class="card-text-container">
                    <p className="card-text">Population: <span className="text-muted">{eachcountry.population.toString().replace(/(.)(?=(\d{3})+$)/g,'$1,')}</span></p>
                    <p className="card-text">Region: <span className="text-muted">{eachcountry.region}</span></p>
                    <p className="card-text">Capital: <span className="text-muted">{eachcountry.capital}</span></p>
                </div>
               </div>
            </div>
            </div>
            );
          })}
        </div>
      </div>
  );
};


export default Countries;
