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
  const [selectedCountry, setSelectedCountry] = useState(null);
  

  const filteredCountries = Data.filter(
    (country) => continentFilter === null || country.region === continentFilter
  ).filter((country) =>
    searchcountry === "" || 
    country.name.toLowerCase().includes(searchcountry.toLowerCase()) ||
    country.capital.toLowerCase().includes(searchcountry.toLowerCase())
  );

  let mainContent;
  if (selectedCountry === null) {
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
          setSelectedCountry={setSelectedCountry}
        />
      </div>
    );
  } else {

    const borderCountries = Data.filter(possibleBorderCountry => selectedCountry.borders.includes(possibleBorderCountry.alpha3Code))
    mainContent = (
      <CountryInfo
        country={selectedCountry}
        borderCountries = {borderCountries}
        showAllCountries={() => setSelectedCountry(null)}
        showBorderCountry = {setSelectedCountry}
      />
    );
  }
  return <div>{mainContent}</div>;
};
export default MainPAge;
