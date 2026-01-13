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
        <form  className='bg-white py-10 px-8 rounded-lg shadow-lg'>
          <div className='flex items-center divide-x-2 divide-gray-300 h-10'>
            <div className='w-1/2 flex gap-3 items-center'>
              <img src="./public/svgs/search.svg" className='h-5'/>  
              <input type="text" placeholder='Search by title' 
              className='outline-none flex-1'
              value={search} onChange={(e)=>setSearch(e.target.value)}/>
            </div>
            <div className='w-1/2 flex justify-between items-center pl-2'>
              <input type="text" placeholder='Search by city'
              className='flex-1 outline-none'
              value={city} onChange={(e)=>setCity(e.target.value)}/>
              <button onClick={filter} className='px-3 py-2 rounded-3xl bg-[#466c82] text-white font-bold text-sm cursor-pointer'>Filter Jobs</button>
            </div>
          </div>
        </form>
    </div>
  )
}

export default Searchbar