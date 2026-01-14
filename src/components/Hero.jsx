import React from 'react'

const Hero = () => {
  return (
    <div className='py-5'>
        <h1 className='text-[3rem] leading-tight font-extrabold xl:w-[38vw] md:w-[80%]'>
            Find top jobs for web designers and developers
        </h1>
        <h3 className='md:w-[40vw] py-5 w-full'>
            Hiring? Connect with more than +10,000 talented web designer and developers across the globe, available for full-time, intern and freelance opportunities.
        </h3>
        <div className='md:flex py-5 gap-6'>
            <div className='bg-[#bec5d5] p-2 rounded-lg flex items-center gap-2 md:w-auto w-1/2 md:mb-0 mb-3'>
                <img className='h-10' src='./public/svgs/design.svg'/>
                <h4 className='font-bold'>Web Design</h4>
            </div>
            <div className='bg-[#bec5d5] p-2 rounded-lg flex items-center gap-3 md:w-auto w-1/2 md:mb-0 mb-3'>
                <img className='h-10' src='./public/svgs/develop.svg'/>
                <h4 className='font-bold'>Web Development</h4>
            </div>
            <div className='bg-[#bec5d5] p-2 rounded-lg flex items-center gap-2 md:w-auto w-1/2 md:mb-0'>
                <img className='h-10' src='./public/svgs/entry.svg'/>
                <h4 className='font-bold'>Web Entry</h4>
            </div>
        </div>
    </div>
  )
}

export default Hero