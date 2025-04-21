import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col items-center py-10  bg-[#193451] text-white'>
        <div className='w-[320px] sm:w-[450px] '>
            <img src="Golding.jpg" alt="" className='w-full object-cover'/>
        </div>
        <div className='text-center mx-2.5'>
            <h1 className='font-bold text-xl md:text-4xl'>Welcome To Golding LLC</h1>
            <p className='text-lg'>Your Trusted Legal Services Partner! ⚖️</p>
        </div>
    </div>
    // bg-[#111C4E]
  )
}

export default Hero