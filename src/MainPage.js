import React,{useState} from 'react';
import Header  from './Header';
import Data from './data.json';
import FindCountries from './FindCountries'
import Countries from './Countries';
import 'bootstrap/dist/css/bootstrap.css';


const MainPAge = () => {
    const[searchcountry,setSearchCountry] = useState("");
    const[filteredCountry, setFilteredCountries] = useState(Data);

    const Africa =  Data.filter((element) => element.region === "Africa");
    const Asia = Data.filter((element) => element.region === "Asia");
    const America = Data.filter((element) => element.region === "Americas");
    const Europe = Data.filter((element) => element.region === "Europe");
    const Oceania = Data.filter((element) => element.region === "Oceania");


    function handleChange (event){
    setSearchCountry(event.target.value);
    } 
    function handleAll(){
       setFilteredCountries(Data);
    }
    function handleAfrica(){
        setFilteredCountries(Africa);
    }
    function handleAsia () {
        setFilteredCountries(Asia);
    }
    function handleAmerica(){
        setFilteredCountries(America);
    }
    function handleEurope(){
        setFilteredCountries(Europe);
    }
    function handleOceania(){
        setFilteredCountries(Oceania);
    }
    filteredCountry.filter((element) => {
        return (
           ((element.name.toLowerCase().includes(searchcountry.toLowerCase())) ||
            (element.capital.toLowerCase().includes(searchcountry.toLowerCase())) )
          )
      })
    return (
        <div>
        <Header />
        <FindCountries value={searchcountry}
         handleChange={handleChange}
         handleAfrica={handleAfrica}
         handleAsia={handleAsia}
         handleAmerica={handleAmerica}
         handleEurope={handleEurope}
         handleOceania={handleOceania}
         handleAll={handleAll}/>

        <Countries filteredCountry={filteredCountry} />
        </div>
    )
}

export default MainPAge;