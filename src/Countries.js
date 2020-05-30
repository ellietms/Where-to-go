import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const Countries = (props) => {
  return (
    <div className="container">
      <div className="row">
          {props.AllCountries.map((eachcountry,index) => {
            return (
            <div className="col-7  mx-auto col-sm-9  col-md-6 col-lg-3 col-xl-3 mb-sm-2 mb-md-2 mt-md-3 mb-lg-3 mt-lg-3 p-2 page">    
            <div key={index} className="card mt-4 mx-auto">
            <div className="card-img">    
            <img className="card-img-top" src={eachcountry.flag} alt="" />
            </div>  
            <div class="card-body">
            <h5 class=" card-text-container">{eachcountry.name}</h5>
                <div class="card-text-container">
                    <p className="card-text">Population :{eachcountry.population.toString().replace(/(.)(?=(\d{3})+$)/g,'$1,')}</p>
                    <p className="card-text">Region :{eachcountry.region}</p>
                    <p className="card-text">Capital :{eachcountry.capital}</p>
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

// function formatNumber (num){
// return(
//     let str = num.toString().split('.');
//     if (str[0].length >= 3) {
//         str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
//     }
//     if (str[1] && str[1].length >= 3) {
//         str[1] = str[1].replace(/(\d{3})/g, '$1 ');
//     }
//      str.join('.');
//     )
// }

export default Countries;
