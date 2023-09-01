import React from 'react'

function Filter() {
  return (
    <div className='lg:ml-[60%] mx-auto py-2  '>
      <select name="Filter by Region" className=' border-[1px] px-[30px] py-3 rounded-[10px]'>
        <option  >Filter by Region</option>
        <option value="Africa" id="Africa">Africa</option>
        <option value="America" id="America">America</option>
        <option value="Asia" id="Asia">Asia</option>
        <option value="Europe" id="Europe">Europe</option>
        <option value="Oceania" id="Oceania">Oceania</option>

      </select>
    </div>
  )
}

export default Filter