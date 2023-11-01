import React from 'react'
import { CgBrowser } from 'react-icons/cg';
import { GiSmartphone } from 'react-icons/gi';
const Service = () => {
  return (
    <>
       <main className=' p-3 grid md:py-6 grid-cols-2'>
        <div className=' py-5 px-3 mx-1  bg-white grid-cols-2 drop-shadow-md rounded-lg  '>
          <div className=' flex justify-center text-6xl md:text-9xl text-center  text-amber-300'>
          <CgBrowser/>
          </div>
          <h1 className='text-center text-xs md:text-lg font-medium'> PC Software</h1>  
        </div>


        <div className=' py-5 px-3 bg-white xs-6 drop-shadow-md rounded-lg  '>
        <div className=' flex justify-center text-6xl md:text-9xl text-center  text-amber-300'>
        <GiSmartphone/>
        </div>
        <h1 className='text-center text-xs md:text-lg font-medium'> Mobile Software </h1>  
        </div>
       </main>
    </>
  )
}

export default Service
