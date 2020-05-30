import React from "react";
import 'bootstrap/dist/css/bootstrap.css';


const Search = () => {
return( 
    <div className="mt-5 col-7 col-sm-9  col-md-6 col-lg-3 col-xl-3 mb-sm-2 mb-md-2 mb-lg-3 mt-lg-3 p-2 ">
    <form className="form-inline">
    <div className="input-group">
    <input type="text" className="form-control" placeholder="Search"/>
    </div>
    </form>
    </div>    
)
}

export default Search;