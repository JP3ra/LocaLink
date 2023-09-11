import React from 'react'
import Direction from '../assets/direction.png'
import Gmap from '../assets/gmap.png'
import Info from '../assets/info.png'

const People = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid grid-cols-3 gap-8'>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
        <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Direction}/>
        <h2 className='tect-2xl font-bold text-center py-8'> Get Directions</h2>
        <p className='text-center text-4xl font-bold'>To places nearby</p>
        <div className='text-center font-medium'> 
            <p className='py-2 border-b mx-8'>resteraunts</p>
            <p className='py-2 border-b mx-8'>cafes</p>
            <p className='py-2 border-b mx-8'>Hospitals</p>
        </div>
        <button className='bg-[#00df9a] text-black  text-center w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>
        Try it Now</button>
        </div>
        <div className='w-full shadow-xl bg-gray-50 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
        <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Gmap}/>
        <h2 className='tect-2xl font-bold text-center py-8'>Google Maps</h2>
        <p className='text-center text-4xl font-bold'>Get realtime updates</p>
        <div className='text-center font-medium'> 
            <p className='py-2 border-b mx-8'>Traffic</p>
            <p className='py-2 border-b mx-8'>Time</p>
            <p className='py-2 border-b mx-8'>Distance</p>
        </div>
        <button className='text-[#00df9a] bg-black  text-center w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>
        Try it Now</button>
        </div>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
        <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Info}/>
        <h2 className='tect-2xl font-bold text-center py-8'> Get Information</h2>
        <p className='text-center text-4xl font-bold'>About any place</p>
        <div className='text-center font-medium'> 
            <p className='py-2 border-b mx-8'>Reviews</p>
            <p className='py-2 border-b mx-8'>Photos</p>
            <p className='py-2 border-b mx-8'>Timings</p>
        </div>
        <button className='bg-[#00df90] text-black  text-center w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>
        Try it Now</button>
        </div>
        </div>

    </div>
  )
}

export default People