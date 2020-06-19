import React, { useState } from "react";
import Header from "./Header";
import Data from "./data.json";
import Countries from "./Countries";
import "bootstrap/dist/css/bootstrap.css";
import Search from "./Search";

const MainPAge = () => {
  const [searchcountry, setSearchCountry] = useState("");
  const [continentFilter, setContinentFilter] = useState(null);

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
      <Header />
      <Search
        value={searchcountry}
        handleChange={(event) => {
          setSearchCountry(event.target.value);
        }}
        handleRegion={(region) => setContinentFilter(region)}
        handleAll={() => setContinentFilter(null)}
      />
      <Countries countries={filteredCountries} />
    </div>
  );
};

export default MainPAge;
