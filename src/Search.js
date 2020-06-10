import React from "react";
import DropDown from './DropDown';
import 'bootstrap/dist/css/bootstrap.css';


const Search = ({value,handleChange,handleAll,handleAfrica,handleAsia,handleAmerica,handleEurope,handleOceania}) => {
return( 
    <div className="d-flex">
        <nav class="navbar d-flex col-12 col-sm-12">
                    <div class="inputWithIcon">
                    <i class="fas fa-search-location"></i>
                    <input type="text" value={value} onChange={handleChange} id="searchInput" class="form-control  border border-dark" placeholder="search for a country..." aria-label="Username" aria-describedby="basic-addon1"/>
                    </div>
                    <DropDown handleAfrica={handleAfrica}
                    handleAsia={handleAsia}
                    handleAmerica={handleAmerica}
                    handleEurope={handleEurope}
                    handleOceania={handleOceania}
                    handleAll={handleAll}/>
        </nav>
    <div>
    </div>   
    </div>  
)
}

export default Search;