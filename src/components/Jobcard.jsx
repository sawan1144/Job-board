import React from 'react'
import { useNavigate } from 'react-router-dom'

const Jobcard = ({id, img, title, locate, time}) => {

    const navigate = useNavigate();

    function clickHandler(){
        navigate(`/details/${id}`)
    }

  return (
    <div onClick={clickHandler} className='bg-white xl:py-8 md:py-5 shadow-md rounded-lg md:px-5 flex divide-x-2 divide-gray-200 mb-5'>
        <div className='w-1/5 flex justify-center'>
            <img className='h-20' src={img}/>
        </div>
        <div className='px-5 flex-1 flex justify-between items-center'>
            <div>
                <div className='md:text-[1.25rem] text-lg font-bold pb-3'>
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