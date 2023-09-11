import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-100px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df90] font-bold p-2'>GET PERSONALISED DATA</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 '>Super Duper Fast.</h1>
        <div className='flex justify-center items-center '>
            <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Fast, search for</p>
            <Typed className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['Resteraunts','Hotels','Malls','Cafe']} typeSpeed={120} backSpeed={140} loop/>
        </div>
        <p className='md:text-2xl text-xl font-bold  text-gray-500' 
        >Get personalised data and favourite places nearby you by just sharing your location</p>
        <button className='bg-[#00df90] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
        </div>
        </div>
  )
}

export default Hero