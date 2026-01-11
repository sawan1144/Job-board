import React from 'react'

const Jobcard = ({img, title, locate, time}) => {
  return (
    <div className='bg-white py-8 shadow-md rounded-lg px-5 flex divide-x-2 divide-gray-200 mb-5'>
        <div className='w-1/5 flex justify-center'>
            <img className='h-20' src={img}/>
        </div>
        <div className='px-5 flex-1 flex justify-between items-center'>
            <div>
                <div className='text-xl font-bold pb-3'>
                    {title}
                </div>
                <div className='text-sm'>
                    {locate}
                </div>
            </div>
            <div className='text-sm font-bold'>
                {time}
            </div>
        </div>
    </div>
  )
}

export default Jobcard