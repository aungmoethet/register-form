import React from 'react';
import Slider from './Slider';
import Service from './Service';
import Tutorial from '../component/Tutorial';

const Home = () => {
  return (
    <>
        <main className='mt-12'>
        <Slider/>
        <Service/>
        <Tutorial/>
        </main>
      
      
     
    </>
  )
}

export default Home
