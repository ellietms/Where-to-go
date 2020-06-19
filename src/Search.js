import React from "react";
import DropDown from "./DropDown";
import "bootstrap/dist/css/bootstrap.css";


const Search = ({ value, handleChange, handleAll, handleRegion }) => {
  return (
    <div className="container">
      <nav className="row">
        <div className="inputWithIcon">
          <i className="fas fa-search-location"></i>
          <input
            type="text"
            value={value}
            onChange={(event) => handleChange(event)}
            id="searchInput"
            className="form-control  border border-dark mr-auto"
            placeholder="search for a country..."
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <DropDown handleRegion={handleRegion} handleAll={() => handleAll()} />
      </nav>
      <div></div>
    </div>
  );
};

export default Search;
