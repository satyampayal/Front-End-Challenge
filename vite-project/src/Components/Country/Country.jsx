import React from 'react'
import { useState, useEffect } from 'react'

// redux
import { useDispatch, useSelector } from 'react-redux'
import { reset } from '../../feature/countries/countriesSlice'
import { showAllCountries } from '../../feature/countries/countriesAction';
function Country() {
  const { countriesData, loading, success, error } = useSelector((state) => 
  state.country
  );

  const dispatch = useDispatch();

  const [countryData, setCountryData] = useState([]);
  useEffect(() => {
    dispatch(showAllCountries());
    if (success) {
      setCountryData(countriesData);
    }

    if (error) {
      console.log(error)
    }
  }, [dispatch, error, success]);
  return (
    <section className='mt-[50px] px-[30px] w-[100%] grid justify-center items-center'>
      {loading ? (<h1>Loading...</h1>) : (
        countriesData.length > 0 && countryData.map((item) => {
          return (
            <div className='border-[1px]'>

              <img src={item.flags.png} alt={item.flags.alt} />

              <div>
                <p>Population:</p>
                <h1>Regoion:</h1>
                <h1>Capital:</h1>
              </div>
            </div>
          )
        })
      )}


    </section>
  )
}

export default Country