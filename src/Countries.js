import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const Countries = (props) => {
  return (
    <div className="container">
      <div className="row">
          {props.AllCountries.map((eachcountry,index) => {
            return (
            <div key={index} className="card d-flex col-lg-4  my-2">
                <img className="card-img-top" src={eachcountry.flag} alt="" />
              <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
