import React , {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Search from './Search';


const FindCountries = (props) => {
    return(
      <div className="container">
      <Search value={props.value} handleChange={props.handleChange} />
      </div>
    )

}

export default FindCountries;