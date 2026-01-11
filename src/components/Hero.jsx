import React from 'react'

const Hero = () => {
  return (
    <div className='py-5'>
        <h1 className='text-5xl font-extrabold w-[38vw]'>
            Find top jobs for web designers and developers
        </h1>
        <h3 className='w-[40vw] py-5'>
            Hiring? Connect with more than +10,000 talented web designer and developers across the globe, available for full-time, intern and freelance opportunities.
        </h3>
        <div className='flex py-5 gap-6'>
            <div className='bg-[#bec5d5] p-2 rounded-lg flex items-center gap-2'>
                <img className='h-10' src='./public/svgs/design.svg'/>
                <h4 className='font-bold'>Web Design</h4>
            </div>
            <div className='bg-[#bec5d5] p-2 rounded-lg flex items-center gap-3'>
                <img className='h-10' src='./public/svgs/develop.svg'/>
                <h4 className='font-bold'>Web Development</h4>
            </div>
            <div className='bg-[#bec5d5] p-2 rounded-lg flex items-center gap-2'>
                <img className='h-10' src='./public/svgs/entry.svg'/>
                <h4 className='font-bold'>Web Entry</h4>
            </div>
        </div>
    </div>
  )
}

export default Hero