import React, { useState } from 'react'

const Searchbar = ({setLocation, setTitle}) => {
  const [search, setSearch] = useState('')
  const [city, setCity] = useState('')

  function filter(e){
    e.preventDefault();
    setLocation(city)
    setTitle(search)
  }

  return (
    <div className='py-5'>
        <form  className='bg-white md:py-10 md:px-8 rounded-lg shadow-lg'>
          <div className='flex items-center divide-x-2 divide-gray-300 h-10 w-full'>
            <div className='md:w-1/2 w-[35%] flex md:gap-3 gap-1 items-center'>
              <img src="/svgs/search.svg" className='h-5'/>  
              <input type="text" placeholder='Search by title' 
              className='outline-none flex-1'
              value={search} onChange={(e)=>setSearch(e.target.value)}/>
            </div>
            <div className='flex flex-1 justify-between items-center pl-2'>
              <input type="text" placeholder='Search by city'
              className='md:flex-1 outline-none w-30'
              value={city} onChange={(e)=>setCity(e.target.value)}/>
              <button onClick={filter} className='px-3 py-2 rounded-3xl bg-[#466c82] text-white font-bold text-sm cursor-pointer'>Filter Jobs</button>
            </div>
          </div>
        </form>
    </div>
  )
}

export default Searchbar