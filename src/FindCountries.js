import React , {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Search from './Search';


const FindCountries = ({value,handleAll,handleChange,handleAfrica,handleAsia,handleAmerica,handleEurope,handleOceania})=> {
    return(
      <div className="container">
      <Search value={value} 
      handleChange={handleChange}
      handleAfrica={handleAfrica}
      handleAsia={handleAsia}
      handleAmerica={handleAmerica}
      handleEurope={handleEurope}
      handleOceania={handleOceania}
      handleAll={handleAll}/>
      </div>
    )

}

export default FindCountries;