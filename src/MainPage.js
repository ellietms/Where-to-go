import React from 'react';
import Header  from './Header';
import Data from './data.json';
import Countries from './Countries';
import 'bootstrap/dist/css/bootstrap.css';


const MainPAge = () => {
    return (
        <div>
        <Header />
        <Countries AllCountries={Data} />
        </div>
    )
}

export default MainPAge;