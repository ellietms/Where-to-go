import React from "react";
import DropDown from './DropDown'
import 'bootstrap/dist/css/bootstrap.css';


const Search = () => {
return( 
    <div className="d-flex">
        <nav class="navbar d-flex col-12 col-sm-12">
                    <div class="inputWithIcon">
                    <i class="fas fa-search-location"></i>
                    <input type="text" id="searchInput" class="form-control  border border-dark" placeholder="search for a country..." aria-label="Username" aria-describedby="basic-addon1"/>
                    </div>
                    <DropDown />
        </nav>
    <div>
    </div>   
    </div>  
)
}

export default Search;