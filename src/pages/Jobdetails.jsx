import { Link, useParams } from 'react-router-dom'
import Header from '../components/Header'

const Jobdetails = () => {

    const list = [
    {
    img: 'https://1000logos.net/wp-content/uploads/2021/04/Adobe-logo.png',
    title: 'Senior Backend Engineer',
    location: 'California, United States',
    time: '10h ago',
    id: '1',
    company: 'Adobe',
    salary: '$140,000 - $180,000',
    jobType: 'Full-time',
    description: 'Lead backend development for Adobe\'s creative software, focusing on scalable server-side solutions and API integrations.'
    },
    {
    img: 'https://www.logo.wine/a/logo/GitLab/GitLab-Logo.wine.svg',
    title: 'Full Stack Engineer(Ruby on Rails)',
    location: 'San Francisco, United States',
    time: '12h ago',
    id: '2',
    company: 'GitLab',
    salary: '$130,000 - $160,000',
    jobType: 'Full-time',
    description: 'Develop and maintain full-stack applications using Ruby on Rails, ensuring seamless integration between frontend and backend systems.'
    },
    {
    img: 'https://www.logo.wine/a/logo/TikTok/TikTok-Logomark%26Wordmark-Vertical-Logo.wine.svg',
    title: 'Creative Frontend Engineer',
    location: 'New York, United States',
    time: '17h ago',
    id: '3',
    company: 'TikTok',
    salary: '$120,000 - $150,000',
    jobType: 'Full-time',
    description: 'Design and implement creative, user-friendly frontend interfaces for TikTok\'s social media platform.'
    },
    {
    img: 'https://www.logo.wine/a/logo/Google/Google-Logo.wine.svg',
    title: 'Senior Frontend Engineer',
    location: 'New York, United States',
    time: '1d ago',
    id: '4',
    company: 'Google',
    salary: '$150,000 - $200,000',
    jobType: 'Full-time',
    description: 'Build high-performance frontend components for Google\'s web services, emphasizing accessibility and modern web standards.'
    },
    {
    img: 'https://www.logo.wine/a/logo/Meta_Platforms/Meta_Platforms-Logo.wine.svg',
    title: 'Junior Full Stack Engineer',
    location: 'San Francisco, United States',
    time: '1d ago',
    id: '5',
    company: 'Meta',
    salary: '$100,000 - $130,000',
    jobType: 'Full-time',
    description: 'Assist in developing full-stack features for Meta\'s platforms, gaining experience in both frontend and backend technologies.'
    },
    {
    img: 'https://www.logo.wine/a/logo/Nasdaq/Nasdaq-Logo.wine.svg',
    title: 'Full Stack Engineer',
    location: 'Washington, United States',
    time: '2d ago',
    id: '6',
    company: 'Nasdaq',
    salary: '$110,000 - $140,000',
    jobType: 'Full-time',
    description: 'Work on full-stack development for financial trading platforms, ensuring robust and secure applications.'
    },
    {
    img: 'https://www.logo.wine/a/logo/PayPal/PayPal-Logo.wine.svg',
    title: 'Backend Engineer',
    location: 'Washington, United States',
    time: '2d ago',
    id: '7',
    company: 'PayPal',
    salary: '$120,000 - $150,000',
    jobType: 'Full-time',
    description: 'Develop backend services for PayPal\'s payment processing systems, focusing on security and scalability.'
    },
    {
    img: 'https://www.logo.wine/a/logo/Netflix/Netflix-Logo.wine.svg',
    title: 'frontend Engineer',
    location: 'San Francisco, United States',
    time: '3d ago',
    id: '8',
    company: 'Netflix',
    salary: '$130,000 - $170,000',
    jobType: 'Full-time',
    description: 'Create engaging frontend experiences for Netflix\'s streaming platform, optimizing for performance and user engagement.'
    }
    ]

    const {id} = useParams();
    const job = list.find((d) => d.id === id);

    if(!job){ return <p>Job not Found</p>}

  return (
    <div className='bg-[#d2d9e7] h-screen'>
        <div className='xl:px-30 md:px-15'>
          <Header />
        </div>
        <div className='xl:px-70 md:px-20 px-5'>
            <div className='my-5 py-10 xl:px-15 md:px-7 px-4 bg-white rounded-lg space-y-10'>
                <div className='flex justify-between items-center'>
                    <div className='text-3xl font-extrabold text-[#466c82]'>JOB DETAILS</div>
                    <Link to="/" ><img className='h-8' src='/public/svgs/back.svg'/></Link>
                </div>
                <div className='flex gap-12 items-center'>
                    <div className='border border-gray-200 rounded-lg'><img src={job.img} className='h-20'/></div>
                    <div className='text-2xl font-bold'>{job.title}</div>
                </div>
                <div>
                    <div className='text-[#466c82] font-bold flex'>
                        <div className='w-1/4'>Company</div>
                        <div className='w-1/4'>Location</div>
                        <div className='w-1/4'>Job Type</div>
                        <div className='w-1/4'>Salary</div>
                    </div>
                    <div className='flex justify-between py-2'>
                        <div className='w-1/4'>{job.company}</div>
                        <div className='w-1/4'>{job.location}</div>
                        <div className='w-1/4'>{job.jobType}</div>
                        <div className='w-1/4'>{job.salary}</div>
                    </div>
                </div>
                <div className='space-y-5'>
                    <div className='text-2xl font-bold text-[#466c82]'>DESCRIPTION</div>
                    <div className='text-gray-500'>{job.description}</div>
                </div>
                <div className='flex justify-center'>
                    <button className='py-3 px-8 rounded-xl text-white font-bold text-lg bg-[#466c82] cursor-pointer'>Apply Now</button></div>
                </div>
        </div>
    </div>
  )
}

export default Jobdetails