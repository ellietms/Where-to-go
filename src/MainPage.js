import React, { useState } from "react";
import Header from "./Header";
import Data from "./data.json";
import Countries from "./Countries";
import CountryInfo from "./CountryInfo";
import "bootstrap/dist/css/bootstrap.css";
import Search from "./Search";

const MainPAge = () => {
  const [searchcountry, setSearchCountry] = useState("");
  const [continentFilter, setContinentFilter] = useState(null);
  const [showMainPage,setShowMainPage] = useState(true);
  const [countryName,setCountryName] = useState(null);
  
  function handleCountryName(eachcountry){
    setCountryName(eachcountry);
    console.log(eachcountry);
  }

  const filteredCountries = Data.filter((country) =>
    continentFilter === null ? true : country.region === continentFilter
  ).filter((country) =>
    searchcountry === ""
      ? true
      : country.name.toLowerCase().includes(searchcountry) ||
        country.capital.toLowerCase().includes(searchcountry)
  );

  return (
    <div>
    {(showMainPage) ?  
    (
    <div>     
    <Header/>
    <Search
        value={searchcountry}
        handleChange={(event) => {setSearchCountry(event.target.value)}}
        handleRegion={(region) => setContinentFilter(region)}
        handleAll={() => setContinentFilter(null)}
    />
    <Countries countries={filteredCountries} 
    handlePage = {() => setShowMainPage(!showMainPage)}
    handleCountryName = {(eachcountry) => handleCountryName(eachcountry)}
    />
    </div>)
     : 
    (< CountryInfo country={countryName}/>)
    }
    </div>
  );
};

export default MainPAge;
