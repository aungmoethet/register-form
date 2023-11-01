import React, { useState,useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const Slider =()=> {
  const slides = [
    {
      url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
    },

    {
      url: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
    },
  ];
  const delay = 4000;

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  useEffect(() => {
    const interval = setInterval(() => {
        nextSlide();
    }, delay);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);
 
  return (
    <div className=' w-full px-1'>
        <div className=' flex justify-center h-[300px] sm:h-[400px] md:h-[500px] lg:h-[683px] 2xl:h-[800px] 2xl:px-10 w-full py-2 px-0.5 relative group'>
          <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className='w-full h-full rounded-2xl bg-center bg-cover duration-500'>

          </div>
            <div className=' absolute top-[30%] flex justify-center w-full  '>
              <div className=''>
                 <h1 className=' mb-2 text-lg md:text-2xl text-slate-100 drop-shadow-md underline'>
                    Join Us
                  </h1>
                
                  <p className=' text-xs md:text-lg text-slate-300'>
                      To develope your Business
                  </p>
                  <button type="button" class="px-2 py-1 text-xs mt-2 lg:px-4 lg:py-2 font-medium text-center text-white bg-amber-400 rounded-lg hover:bg-amber-600   ">Contact Now</button>    
              </div>
       
            </div>
              {/* Left Arrow */}
            <div className='  absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 2xl:left-20 text-xs hidden md:block  p-2 text-white cursor-pointer'>
              <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            {/* Right Arrow */}
            <div className='  absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 2xl:right-20 hidden md:block text-sm p-2 text-white cursor-pointer'>
              <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
            <div className=' w-full  flex justify-center absolute top-[80%] lg:top-[90%]  text-xs  text-white cursor-pointer'>
              {slides.map((slide, slideIndex) => (
                <div
                  key={slideIndex}
                  onClick={() => goToSlide(slideIndex)}
                  className='text-md sm:text-lg lg:text-xl cursor-pointer'>
                  <RxDotFilled />
                </div>
          ))}
        </div>
    </div>
    </div>
  );
}

export default Slider;