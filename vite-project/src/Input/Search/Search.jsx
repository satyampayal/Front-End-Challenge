import React from 'react'
import {BsSearch} from 'react-icons/bs'
function Search() {
  return (
    <div className='  mx-auto '>
      <i className="fa-solid fa-magnifying-glass inline-block  border-[1px] border-black px-2 py-2 bg-black rounded-r-[50%] text-white  "></i>
         <input type="text" name="search" id="search" 
             placeholder='Search for a country...'
             className='border-b-[1px]  px-6 py-2'
         />
    </div>
  )
}

export default Search