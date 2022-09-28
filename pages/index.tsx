import type { NextPage } from 'next'
import Image from 'next/image'
import profilePic from '../public/images/portfolio picture.jpg'
import ExpCard from '../components/ExpCard'

const Home: NextPage = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="py-5">
          <Image
            src={profilePic}
            alt="NatePic"
            height={240}
            width={240}
            className="rounded-full"
          />
        </div>
        <h1 className="m-8 text-3xl font-bold text-black">
          Hi, I&apos;m Nathan Stanton. Lets{' '}
          <a
            href="https://www.linkedin.com/in/nathanwaynestanton/"
            target="_blank"
            className="text-cyan-500"
            rel="noreferrer"
          >
            Connect.
          </a>
        </h1>

        <div className="grid grid-cols-1 gap-8 pb-6">
        
          <ExpCard />
          
          <ExpCard />

          <ExpCard />

          <ExpCard />
        </div>
      </div>
    </>
  )
}

export default Home
