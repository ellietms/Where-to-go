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
  const [selectedCountry, setselectedCountry] = useState(null);
  console.log(selectedCountry)

  const filteredCountries = Data.filter(
    (country) => continentFilter === null || country.region === continentFilter
  ).filter((country) =>
    searchcountry === ""
      ? true
      : country.name.toLowerCase().includes(searchcountry) ||
        country.capital.toLowerCase().includes(searchcountry)
  );
    const allAlpha3codes =
     Data.map(country => setselectedCountry[{name:country.name,alpha3Code:country.alpha3Code}]);
    console.log(allAlpha3codes);

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
          setselectedCountry={setselectedCountry}
        />
      </div>
    );
  } else {

    const borderCountries = Data.filter(possibleBorderCountry => selectedCountry.borders.includes(possibleBorderCountry.alpha3Code))
    //  Data.map(country => country.borders)
    mainContent = (
      <CountryInfo
        country={selectedCountry}
        borderCountries = {borderCountries}
        showAllCountries={() => setselectedCountry(null)}
        showBorderCountry = {setselectedCountry}
      />
    );
  }
  return <div>{mainContent}</div>;
};
export default MainPAge;
