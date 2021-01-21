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
            className="back-button"
            onClick={() => showAllCountries()}
          >
            Back
          </button>
        </div>
        <div className="image-container mt-5">
          <img className="countryImg" src={country.flag} alt="country" />
        </div>
        <div>
          <div className="country-name">
            <h5>
              {country.name}
            </h5>
          </div>
          <div className="d-flex">
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
            <div class=" d-flex flex-column  col-sm-6 country-details ml-5">
              <p class="d-flex">
                <strong id="details-right" class="mr-1">
                  Top Level Domain:
                </strong>
                {country.topLevelDomain[0]}
              </p>
              <p class=" d-flex">
                <strong id="details-right"> Currencies:</strong>
                {country.currencies.map((currency) => currency.code)}
              </p>
              <div class="d-flex">
                <strong id="details-right"> Languages:</strong>
                <p class="flex-sm-column">
                  {country.languages.map((language) => language.name)}
                </p>
              </div>
              <div class="d-flex flex-column">
                <p class="d-flex">
                  <strong>Border Countries:</strong>
                </p>
                <div
                  class="mt-sm-1 mt-md-0 d-sm-flex 
                    flex-md-column flex-lg-row d-lg-inline-flex"
                >
                  {borderCountries.map((country) => (
                    <button
                      className="border-buttons"
                      onClick={() => showBorderCountry(country)}
                    >
                      {country.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryInfo;
