import type { NextPage } from 'next'
import ExpCard from '../components/ExpCard'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center">
      <div className='py-5'>
        <img
          src="/images/portfolio picture.jpg"
          className="h-60 w-60 rounded-full"
        ></img>
      </div>
      <h1 className="m-8 text-3xl font-bold text-black">
        Hi, I'm Nathan Stanton. Lets{' '}
        <a
          href="https://www.linkedin.com/in/nathanwaynestanton/"
          target="_blank"
          className="text-cyan-500"
        >
          Connect.
        </a>
      </h1>

      <div className='grid grid-cols-2 gap-8'>
        <ExpCard />
      
        <ExpCard />
      
        <ExpCard />
     
        <ExpCard />
      </div>
    </div>
  )
}

export default Home
