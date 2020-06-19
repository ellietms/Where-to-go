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
  const [showMainPage,setShowMainPage] = useState(true); // It feels like this is only set to true if countryName is null - in general we try to avoid having multiple variables that need to keep in sync - can you find a way to remove showMainPage?
  const [countryName,setCountryName] = useState(null);
  const [alphaCodes,setAlphaCodes] = useState();
  const [nameOfBorders,setNameOfBorders]= useState([]); // I think you can get this information from the countryName state - you don't need to repeat it here (again, avoids having to keep two separate variables in sync)


  function handleCountryName(eachcountry){ // Within this component, a better name for this may be setCountryName rather than handleCountryName - while we can use this function as an event handler from another component, there's nothing about this function which means it must be a handler, so handle is a slightly weird name.
    setCountryName(eachcountry); // It looks like eachcountry (maybe better named country?) is a country, not a name, so this state name is a little weird
    setAlphaCodes([{name: eachcountry.name, alphaCode: eachcountry.alpha3Code}])
    console.log(eachcountry);
    console.log(alphaCodes);
  }

  //This function is not complete and does not make buttons   
  function getNameOfCountryBorders(country){
      setNameOfBorders(country.borders);
      alphaCodes.forEach((country) => { // This works, but If you stored an object where each key was an alphCode, and each value was the associated country, you could avoid needing to look through the entire array of alphaCodes. Also, instead of forEach you probably want a filter (to find the right countries) and a map (to turn the country into some HTML) - forEach doesn't evaluate to anything, and the return value of the function we pass to forEach is ignored.
          if(nameOfBorders.includes(country.alphaCode.toUpperCase())){
            return(
            <button type="button" className="mr-1 btn btn-sm btn-outline-dark"> {/* Looks like you need an onclick here which will call setCountryName? */}
            <p class="content pt-1">{country.name}</p>
            </button>
            )
          }
        }
      )
    }   
  
  const filteredCountries = Data.filter((country) =>
    continentFilter === null ? true : country.region === continentFilter // Rather than a ternary operator, it can sometimes be clearer to say: `continentFilter === null || country.region === continentFilter` - it avoids us needing to say `? true :`. We also tend to try to make each filter fit on one line of possible.
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
