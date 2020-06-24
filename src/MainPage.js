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
  const [countryName, setCountryName] = useState(null);

  function setMyCountryName(country) {
    setCountryName(country);
  }

  //This function is not complete and does not make buttons
  function getNameOfCountryBorders() {
    return Data.filter((country) =>
      countryName.borders.includes(country.alphaCode.toUpperCase())
    ).map((country) => (
      <button type="button" className="mr-1 btn btn-sm btn-outline-dark">
        <p class="content pt-1">{country.name}</p>
      </button>
    ));
  }

  const filteredCountries = Data.filter((country) =>
    continentFilter === null ? true : country.region === continentFilter
  ).filter((country) =>
    searchcountry === ""
      ? true
      : country.name.toLowerCase().includes(searchcountry) ||
        country.capital.toLowerCase().includes(searchcountry)
  );
  let mainContent;
  if (countryName === null) {
    mainContent = (
      <div>
        <Header />
        <Search
          value={searchcountry}
          handleChange={(event) => {
            setSearchCountry(event.target.value);
          }}
          handleRegion={(region) => setContinentFilter(region)}
          handleAll={() => setContinentFilter(null)}
        />

        <Countries
          countries={filteredCountries}
          setMyCountryName={(eachcountry) => setMyCountryName(eachcountry)}
        />
      </div>
    );
  } else {
    mainContent = (
      <CountryInfo
        country={countryName}
        getNameOfCountryBorders={() => getNameOfCountryBorders()}
        handlePage={() => setCountryName(null)}
      />
    );
  }
  return <div>{mainContent}</div>;
};
export default MainPAge;
