import React,{useState} from 'react';
import Header  from './Header';
import Data from './data.json';
import FindCountries from './FindCountries'
import Countries from './Countries';
import 'bootstrap/dist/css/bootstrap.css';


const MainPAge = () => {
    const[searchcountry,setSearchCountry] = useState("");
    function handleChange (event){
    setSearchCountry(event.target.value);
    } 
    const filterCountries = (Data.filter((element) => {
        return (
           ((element.name.toLowerCase().includes(searchcountry.toLowerCase())) ||
            (element.capital.toLowerCase().includes(searchcountry.toLowerCase())) )
          )
    }))
    return (
        <div>
        <Header />
        <FindCountries value={searchcountry} handleChange={handleChange} />
        <Countries AllCountries={filterCountries} />
        </div>
    )
}

export default MainPAge;