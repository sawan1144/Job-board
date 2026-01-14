import React, { useState } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Searchbar from '../components/Searchbar'
import Joblist from '../components/Joblist'

const Home = () => {
  const [title, setTitle] = useState('')
  const [location, setLocation] = useState('')

  return (
    <div className='bg-[#d2d9e7] md:h-[75vh]'>
        <div className='xl:px-30 md:px-15 px-2'>
          <Header />
        </div>
        <div className='xl:px-70 md:px-25 px-4'>
          <Hero />
          <Searchbar setTitle={setTitle} setLocation={setLocation}/>
          <Joblist location={location} title={title}/>
        </div>
    </div>
  )
}

export default Home