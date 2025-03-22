import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col items-center mt-10'>
        <div className='w-[320px] sm:w-[450px] '>
            <img src="Golding_hero.png" alt="" className='w-full object-cover'/>
        </div>
        <div className='text-center'>
            <h1 className='font-bold text-2xl'>Welcome To Golding LLC</h1>
            <p className='text-xl'>Your Trusted Legal Services Partner! ⚖️</p>
        </div>
    </div>
  )
}

export default Hero