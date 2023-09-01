import React, { useState } from 'react'
import {MdNightlightRound} from 'react-icons/md'
import './HeaderCss.css'
import { Outlet } from 'react-router';
function Header() {
    const [darkMode ,setDarkMode]=useState(false);
  return (
    <>
   <div className={`lg:max-w-[100vw]    darkMode${darkMode}   border-b-[1px]   `}>
     <div className='h-[10vh] grid grid-cols-2  justify-between items-center   max-w-[1240px] mx-auto   '>
        <h1 className='lg:text-[24px] sm:text-[14px] font-bold font-sans px-3'>Where in the world?</h1>
        <div className='lg:pl-[70%] md:pl-[40%] pl-[30%]'>
        <i   onClick={()=>setDarkMode(!darkMode)} className="fa-solid fa-moon inline-block cursor-pointer lg:text-[17px] md:text-[14px]"></i>
             <span onClick={()=>setDarkMode(!darkMode)} className='lg:text-[19px] md:text-[14px] lg:px-4 px-3 cursor-pointer'>{darkMode?'Dark Mode':'Day Mode'}</span>
        </div>

    </div>
   </div>
   <Outlet/>
   </>

  )
}

export default Header