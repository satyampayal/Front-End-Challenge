import React from 'react'
import Search from '../Search/Search'
import Filter from '../Filter/Filter'
import AllCountries from '../AllCountries/AllCountries'
function Home() {
  return (
    <>
    <section className='w-[100%] grid lg:grid-cols-2  md:grid-cols-2 sm:grid-cols-2 grid-cols-1 justify-evenly   mt-[30px] px-3 mx-auto'>
           <Search/>
          <Filter/> 
 
    </section>
    <AllCountries/>
    </>
  )
}

export default Home