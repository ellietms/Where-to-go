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
  const [alphaCodes,setAlphaCodes] = useState();
  const [nameOfBorders,setNameOfBorders]= useState([]);
  
  
  function handleCountryName(eachcountry){
    setCountryName(eachcountry);
    setAlphaCodes([{name: eachcountry.name, alphaCode: eachcountry.alpha3Code}])
    console.log(eachcountry);
  }

//   function getAlphaCodes(country){
//     ;
//   }

  function getNameOfCountryBorders(country){
      setNameOfBorders(country.borders);
      alphaCodes.forEach((country) => {
          if(nameOfBorders.includes(country.alphaCode.toUpperCase())){
            return(
             <button type="button" class="mr-1 btn btn-sm btn-outline-dark"> 
            <p class="content pt-1">{country.name}</p></button>
            )
          }
        }
      )
    }   
  

  const filteredCountries = Data.filter((country) =>
    continentFilter === null ? true : country.region === continentFilter
    ).filter((country) =>
    searchcountry === ""
      ? true
      : country.name.toLowerCase().includes(searchcountry) ||
        country.capital.toLowerCase().includes(searchcountry)
    )

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

    </div>
    )
     : 
    (  
    < CountryInfo country={countryName}
    getNameOfCountryBorders={(country) => getNameOfCountryBorders(country)}
    handlePage = {() => setShowMainPage(!showMainPage)}/>
    )
    }
    </div>
  );
}
export default MainPAge;
