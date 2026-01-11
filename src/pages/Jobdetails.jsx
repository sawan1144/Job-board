import React from 'react'
import Header from '../components/Header'

const Jobdetails = () => {
  return (
    <div className='bg-[#d2d9e7] h-screen'>
        <div className='px-30'>
          <Header />
        </div>
        <div className='px-70'>
            <div className='my-5 py-10 px-15 bg-white rounded-lg space-y-10'>
                <div className='text-3xl font-extrabold text-[#466c82]'>JOB DETAILS</div>
                <div className='flex gap-12 items-center'>
                    <div className='border border-gray-200 rounded-lg'><img src="https://www.logo.wine/a/logo/Netflix/Netflix-Logo.wine.svg" className='h-20'/></div>
                    <div className='text-2xl font-bold'>Senior Frontend Developer</div>
                </div>
                <div>
                    <div className='text-[#466c82] font-bold flex'>
                        <div className='w-1/4'>Company</div>
                        <div className='w-1/4'>Location</div>
                        <div className='w-1/4'>Job Type</div>
                        <div className='w-1/4'>Salary</div>
                    </div>
                    <div className='flex justify-between py-2'>
                        <div className='w-1/4'>Netflix corp.</div>
                        <div className='w-1/4'>San Francisco, United States</div>
                        <div className='w-1/4'>On-Site</div>
                        <div className='w-1/4'>$70,000 to $100,000 Yearly</div>
                    </div>
                </div>
                <div className='space-y-5'>
                    <div className='text-2xl font-bold text-[#466c82]'>DESCRIPTION</div>
                    <div className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, nesciunt totam perferendis, eum quisquam dolores nostrum voluptatem eos optio obcaecati fuga maxime distinctio quod beatae libero a ipsa inventore ipsum soluta. Placeat quis iure qui nisi laudantium aut! Ad, eaque amet sit ipsa molestias nihil voluptatum enim fugiat nam sed?</div>
                </div>
                <div className='flex justify-center'>
                    <button className='py-3 px-8 rounded-xl text-white font-bold text-lg bg-[#466c82] cursor-pointer'>Apply Now</button></div>
                </div>
        </div>
    </div>
  )
}

export default Jobdetails