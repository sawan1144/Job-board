import React from 'react'

const Header = () => {
  return (
    <div className='py-10 flex justify-between items-center'>
        <div>
            <img className='h-12 w-12 rounded-full object-cover' src="https://e7.pngegg.com/pngimages/373/665/png-clipart-naukri-com-employment-website-job-hunting-online-job-search-india-employment.png"/>
        </div>
        <div className='flex gap-10 items-center'>
            <button>Jobs</button>
            <button>Companies</button>
            <button>Blog</button>
            <div className='flex gap-2'>
                <button className='border border-[#466c82] px-4 py-1 rounded-3xl'>Sign In</button>
                <button className='bg-[#466c82] px-4 py-1 rounded-3xl font-bold text-[#d2d9e7]'>Post Job</button>
            </div>
        </div>
    </div>
  )
}

export default Header