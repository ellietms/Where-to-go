import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

const CountryInfo = ({
  country,
  borderCountries,
  showAllCountries,
  showBorderCountry,
}) => {
  return (
    <div className="container">
      <div className="info-page">
        <div className="mx-5 mb-5">
          <button
            type="button"
            className="border border-secondary"
            onClick={() => showAllCountries()}
          >
            Back
          </button>
        </div>
        <div className="image-container mt-5">
          <img className="countryImg" src={country.flag}  alt="country"/>
        </div>
        <div className="information-country">
          <h5 className="mt-xs-4 pt-sm-4 mt-sm-4 mt-md-3 mt-lg-3 m-auto">
            {country.name}
          </h5>
          <div className="mt-sm-5 d-flex justify-content-between">
            <div className="ml-sm-0 mr-sm-4 mr-md-1 col-sm-4 country-details">
              <p>
                <strong>Native Name:</strong>
                {country.nativeName}
              </p>
              <p>
                <strong>Population:</strong>
                {country.population}
              </p>
              <p>
                <strong>Region:</strong>
                {country.region}
              </p>
              <p>
                <strong>Sub Region:</strong>
                {country.subregion}
              </p>
              <p>
                <strong>Capital:</strong>
                {country.capital}
              </p>
            </div>
            <div class=" d-flex flex-column  col-sm-6 country-details">
              <p class="d-flex">
                <strong id="details-right" class="mr-1">
                  Top Level Domain:
                </strong>
                {country.topLevelDomain[0]}
              </p>
              <p class=" d-flex">
                <strong id="details-right">Currencies:</strong>
                {country.currencies.map((currency) => currency.code)}
              </p>
              <div class="d-flex">
                <strong id="details-right">Languages:</strong>
                <p class="flex-sm-column">
                  {country.languages.map((language) => language.name)}
                </p>
              </div>
            </div>
            <div class="col-12">
              <p
                class="d-flex d-lg-inline-flex mr-lg-0 col-lg-4
                     mt-sm-2 mr-sm-2 mb-sm-0"
              >
                <strong class="borders">Border Countries:</strong>{" "}
              </p>
              <span
                class="col-lg-6 mt-sm-1 mt-md-0 d-sm-flex 
                    flex-md-column flex-lg-row d-lg-inline-flex"
              >
                {borderCountries.map((country) => (
                  <button onClick={() => showBorderCountry(country)}>
                    {country.name}
                  </button>
                ))}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryInfo;
