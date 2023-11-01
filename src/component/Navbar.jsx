import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';



const Navbar = () => {
    // const [isOpen,setisOpen] = useState(false);
    // const toggleDropdown = () =>{
    //     setisOpen(!isOpen);
    // }
  return (
    <>
           

    <header className=' shadow-md bg-yellow-400 fixed top-0 right-0 left-0 '>
            <div className='max-w-screen-xl md:p-2 md:pr-0 flex flex-wrap items-center justify-between mx-auto  '>
                             {/* logo */}
                 <div>
                        
                        <a href=''>
                        <img  src="./image/atlogoforlogin.png" className="h-5 pl-5 drop-shadow-md md:h-8" alt="Alphatech" />    
                        </a>
                 </div>
              
           
             
                  {/* pc Nav */}
                  <nav className=' hidden lg:block'>
                        <div className="items-center justify-center w-full flex" id="navbar-cta">
                                <ul className="flex flex-row text-xs p-0 md:p-2 md:text-sm border-gray-100   md:space-x-8 md:border-0 gray-700">
                                    <li>
                                        <NavLink to="/" className="block h-full pt-2 hover: pl-3 pr-4 text-slate-900 md:p-0  " aria-current="page"><p>Home</p></NavLink>
                                    </li>
                                    <li>
                                    <NavLink to="/" className="block h-full pt-2 hover: pl-3 pr-4 text-slate-900 md:p-0  " aria-current="page"><p>IT News</p></NavLink>
                                    </li>
                                                {/* dropdown */}
                                    <li>
                                        {/* <button onClick={toggleDropdown} className=''>
                                            Tutorial
                                        </button>
                                    { isOpen && (
                                        <div id="dropdown" className=" z-10 absolute top-14  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 ">
                                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                            <li>
                                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                            </li>
                                            <li>
                                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                            </li>
                                            <li>
                                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                            </li>
                                            <li>
                                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                                            </li>
                                        </ul>
                                    </div>
                                    )

                                    } */}

                                        <NavLink to="/tutorial" className="block h-full pt-2 hover: pl-3 pr-4 text-slate-900 md:p-0  " aria-current="page"><p>Tutorial</p></NavLink>


                                    </li>
                                    <li>
                                        <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                                    </li>
                                </ul>
                            </div>
                  </nav>   
                     {/* pc Nav end */}
                                      {/* search */}
                 <div>
                        {/* search Mobile */}
                        <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="lg:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1" >
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                            <span className="sr-only">Search</span>
                        </button>
                            {/* pc search */}
                        <div className="relative hidden lg:block">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                                <span className="sr-only">Search icon</span>
                            </div>
                                <input type="text" id="search-navbar" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
                        </div>
                    
                 </div>

           </div>
                {/* mobile Nav */}
                <nav className=' lg:hidden '>
                    <div className="items-center justify-center w-full flex" id="navbar-cta">
                        <ul className="flex flex-row text-xs p-0 md:p-2 md:text-sm border-gray-100   md:space-x-8 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="#" className="block h-full pt-2 hover:border-b-4 hover:border-amber-500 pl-3 pr-4 text-black md:p-0 md:dark:text-blue-500 " aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            
             
        </header>
 
    </>
  )
}

export default Navbar
