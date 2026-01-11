import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Searchbar from '../components/Searchbar'
import Joblist from '../components/Joblist'

const Home = () => {
  return (
    <div className='bg-[#d2d9e7] h-[75vh]'>
        <div className='px-30'>
          <Header />
        </div>
        <div className='px-70'>
          <Hero />
          <Searchbar />
          <Joblist />
        </div>
    </div>
  )
}

export default Home