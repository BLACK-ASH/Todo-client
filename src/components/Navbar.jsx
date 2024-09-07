import React, { useState } from 'react'
import {  NavLink} from 'react-router-dom'

const Navbar = () => {
  const [display, setDisplay] = useState(true)

  return (


    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="./src/img/favicon.ico" className="h-8" alt="Flowbite Logo"></img>
          <img src="./src/img/logo.png" className="h-8" alt="Flowbite Logo"></img>
        </div>
        <button onClick={()=>setDisplay(!display)} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          {display ?
            <img src="./src/img/open.svg" alt="" />
            :
            <img src="./src/img/close.svg" alt="" />
          }
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavLink to="/" className={`block py-2 px-3 text-gray-900 rounded md:bg-transparent  md:p-0 dark:text-white md:dark:text-blue-500 ${(e)=> {return e.isActive ? " bg-blue-700":""}} `} aria-current="page">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white ${e=> {return e.isActive?" bg-blue-700":""}}`}>About</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard" className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white ${e=> {return e.isActive?" bg-blue-700":""}}`}>Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/profile" className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white ${e=> {return e.isActive?" bg-blue-700":""}}`}>Profile</NavLink>
            </li>

          </ul>
        </div>
        <div  className={`${display ? "hidden" : "block"} w-full md:hidden md:w-auto" id="navbar-default`}>
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavLink to="/" className={`block py-2 px-3 text-gray-900 rounded md:bg-transparent  md:p-0 dark:text-white md:dark:text-blue-500 ${e=> {return e.isActive?" bg-blue-700":""}}  `} aria-current="page">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white ${e=> {return e.isActive?" bg-blue-700":""}}`}>About</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard" className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white ${e=> {return e.isActive?" bg-blue-700":""}}`}>Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/profile" className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white ${e=> {return e.isActive?" bg-blue-700":""}}`}>Profile</NavLink>
            </li>

          </ul>
        </div>


      </div>

    </nav>


  )
}

export default Navbar