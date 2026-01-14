import { IconMenu2 } from '@tabler/icons-react'
import React, { useState } from 'react'

const Header = React.memo(() => {
    const [Open, setOpen] = useState(false)

  return (
    <div className='md:py-10 py-5 flex justify-between items-center relative'>
        <div>
            <img className='h-12 w-12 rounded-full object-cover' src="https://m.media-amazon.com/images/I/519Hta3Km9L.png"/>
        </div>
        <div className='md:flex gap-10 items-center hidden'>
            <button>Jobs</button>
            <button>Companies</button>
            <button>Blog</button>
            <div className='flex gap-2'>
                <button className='border border-[#466c82] px-4 py-1 rounded-3xl cursor-pointer'>Sign In</button>
                <button className='bg-[#466c82] px-4 py-1 rounded-3xl font-bold text-[#d2d9e7] cursor-pointer'>Post Job</button>
            </div>
        </div>


        <button onClick={()=>setOpen(!Open)} className='md:hidden'>
            <IconMenu2 />
            {Open && <div className='absolute bg-white rounded-md top-15 right-0 max-w-[70%] flex flex-col p-5'>
                <a>Jobs</a>
                <a>Companies</a>
                <a>Blog</a>
                <div className='flex flex-col gap-2'>
                    <a className='border border-[#466c82] px-4 py-1 rounded-3xl cursor-pointer'>Sign In</a>
                    <a className='bg-[#466c82] px-4 py-1 rounded-3xl font-bold text-white cursor-pointer'>Post Job</a>
                </div>
            </div>}
        </button>
    </div>
  )
})

export default Header