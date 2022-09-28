import type { NextPage } from 'next'
import Image from 'next/image'
import profilePic from '../public/images/portfolio picture.jpg'
import ExpCard from '../components/ExpCard'

const Home: NextPage = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="pt-8">
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

        <div className="grid grid-cols-1 gap-8 place-items-center pb-6">
        
          <ExpCard 
            name="TalentGuard"
            position="Full-Stack Engineer"
            experience={[
              "C#",
              "ASP NET",
              "Blazor",
              "SQL Server",
              "Azure Dev Ops",
            ]}
            summary="This will have a summary of what i did and used at the respective company and the impacts i had on it"

          />

          <ExpCard
            name="Stealth Retainers"
            position="Full-Stack Engineer"
            experience={[
              "Python",
              "Django",
              "Bootstrap",
              "Livesession",
              "Git",
            ]}
            summary="This will have a summary of what i did and used at the respective company and the impacts i had on it "
          />
          
        </div>
      </div>
    </>
  )
}

export default Home
