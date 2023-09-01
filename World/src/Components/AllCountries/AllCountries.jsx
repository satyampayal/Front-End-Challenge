import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
function AllCountries() {

    const [allCountries, setAllCountries] = useState([]);
    const downloadCountries = async () => {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        const finalData = response.data;
        // setAllCountries(...finalData);
        // console.log(allCountries);
        const d=finalData.map((item)=>{
            name:item.name

        })
        setAllCountries(d);
        console.log(allCountries)
        
        
       
    }
    useEffect(() => {
        downloadCountries();
    }, [])
    return (
        <div className='w-[100%] px-[40px] mt-[40px] grid justify-center'>
            <div className='border-[1px] rounded-b[10px] px-[10px]'>
                <Link to={`/country-id`} > <img src="" alt="" /></Link>
                <div>
                    <h1>Country:</h1>
                    <h1>Population:</h1>
                    <h1>Region:</h1>
                </div>
            </div>

        </div>
    )
}

export default AllCountries