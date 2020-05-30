import React from "react";
import 'bootstrap/dist/css/bootstrap.css';


const Search = () => {
return( 
    <div className="mt-5 col-7 col-sm-9  col-md-6 col-lg-3 col-xl-3 mb-sm-2 mb-md-2 mb-lg-3 mt-lg-3 p-2 ">
        <nav class="navbar d-flex col-12 col-sm-12">
            <form >
                    <div class="inputWithIcon">
                    <i class="fas fa-search-location"></i>
                    <input type="text" id="searchInput" class="form-control" placeholder="search for a country..." aria-label="Username" aria-describedby="basic-addon1"/>
                    </div>
            </form>
            </nav>
    </div>    
)
}

export default Search;