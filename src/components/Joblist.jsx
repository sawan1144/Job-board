import React from 'react'
import Jobcard from './Jobcard'

const Joblist = () => {

    const list = [
    {
    img: 'https://1000logos.net/wp-content/uploads/2021/04/Adobe-logo.png',
    title: 'Senior Backend Engineer',
    location: 'California, United States',
    time: '10h ago',
    id: '1'
    },
    {
    img: 'https://www.logo.wine/a/logo/GitLab/GitLab-Logo.wine.svg',
    title: 'Full Stack Engineer(Ruby on Rails)',
    location: 'San Francisco, United States',
    time: '12h ago',
    id: '2'
    },
    {
    img: 'https://www.logo.wine/a/logo/TikTok/TikTok-Logomark%26Wordmark-Vertical-Logo.wine.svg',
    title: 'Creative Frontend Engineer',
    location: 'New York, United States',
    time: '17h ago',
    id: '3'
    },
    {
    img: 'https://www.logo.wine/a/logo/Google/Google-Logo.wine.svg',
    title: 'Senior Frontend Engineer',
    location: 'New York, United States',
    time: '1d ago',
    id: '4'
    },
    {
    img: 'https://www.logo.wine/a/logo/Meta_Platforms/Meta_Platforms-Logo.wine.svg',
    title: 'Junior Full Stack Engineer',
    location: 'San Francisco, United States',
    time: '1d ago',
    id: '5'
    },
    {
    img: 'https://www.logo.wine/a/logo/Nasdaq/Nasdaq-Logo.wine.svg',
    title: 'Full Stack Engineer',
    location: 'Washington, United States',
    time: '2d ago',
    id: '6'
    },
    {
    img: 'https://www.logo.wine/a/logo/PayPal/PayPal-Logo.wine.svg',
    title: 'Backend Engineer',
    location: 'Washington, United States',
    time: '2d ago',
    id: '7'
    },
    {
    img: 'https://www.logo.wine/a/logo/Netflix/Netflix-Logo.wine.svg',
    title: 'frontend Engineer',
    location: 'San Francisco, United States',
    time: '3d ago',
    id: '8'
    }
    ]

  return (
    <div className='py-8'>
        {list.map((d)=><Jobcard key={d.id} id={d.id} img={d.img} title={d.title} locate={d.location} time={d.time} />)}
    </div>
  )
}

export default Joblist