import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import profilePic from '../public/images/portfolio picture.jpg'
import ExpCard from '../components/ExpCard'

const Home: NextPage = () => {
  const {systemTheme, theme, setTheme} = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const renderThemeChanger = () => {
    if(!mounted) return null
    
    const currentTheme = theme === 'system' ? systemTheme : theme

    if(currentTheme === 'dark') {
      return (
        <SunIcon className = "w-7 h-7" role="button" onClick={() => setTheme('light')} />
      )
    }
    else{
      return (
        <MoonIcon className = "w-7 h-7" role="button" onClick={() => setTheme('dark')} />
      )
    }
  }

  return (
    <>
    
      <div className="flex flex-col items-center ">
        <div className="pt-8">
          {renderThemeChanger()}
          <Image
            src={profilePic}
            alt="NatePic"
            height={240}
            width={240}
            className="rounded-full"
          />
        </div>
        <h1 className="m-8 text-5xl font-bold text-black">
          Hi, I&apos;m Nathan Stanton. Lets{' '}
          <a
            href="https://www.linkedin.com/in/nathanwaynestanton/"
            target="_blank"
            className="text-cyan-500 underline"
            rel="noreferrer"
          >
            Connect.
          </a>
        </h1>

        
        <h2 className="mb-8 text-3xl font-bold text-black underline underline-offset-8">Work Experience</h2>
       

        <div className="grid grid-cols-1 gap-8 place-items-center pb-6">
        
          <ExpCard 
            name="TalentGuard"
            icon={{src:"/images/TalentGuardIcon.PNG" ,alt:"TalentGuard"}}
            position="Full-Stack Engineer"
            experience={[
              "C#",
              "ASP NET",
              "Blazor",
              "SQL Server",
              "Azure Dev Ops",
            ]}
            summary="At TalentGuard I worked on a high throughput team focused mainly on High and critical priority work items.
            Working with C#, Blazor and SQL Server I was able to produce well tested and scalable software used by enterprise level clients.
            I was able to Leverage my soft skills in tandem with my technical ability to maintain cross department functionality and meet the needs of the company and clients"

          />

          <ExpCard
            name="Stealth Retainers"
            icon={{src:"/images/SRIcon.PNG" ,alt:"Stealth Retainers"}}
            position="Full-Stack Engineer"
            experience={[
              "Python",
              "Django",
              "Bootstrap",
              "Livesession",
              "Git",
            ]}
            summary="At Stealth Retainers I was both A full-stack engineer and the head of sales. Working on an e-commerce site I was 
            able to design, impliment and iterate on web flow and advertizment landing pages in order to boost conversion rates and product 
            cohesion. I used Python, django and Google Analytics to create data driven, high conversion sales flow and software."
          />
          
        </div>
        
        <h2 className="mb-8 text-3xl font-bold text-black underline underline-offset-8">Personal Projects</h2>
        
        <div className="grid grid-cols-1 gap-8 place-items-center pb-6">
            
            <ExpCard
              name="Portfolio WebSite"
              icon={{src:"/vercel.svg" ,alt:"vercel"}}
              position='Web Application'
              experience={[
                "Typescript",
                "Next.js",
                "Tailwind CSS",
                "Vercel",
            ]}
            summary="I chose Next.js so that I could leverage the React framework, Vercel hosting and build 
            experience with the different rendering methods available to me by Next.js that alleviate the SEO issues modern web developers face when
            building a SPA. As I am a Full-Stack Developer I chose Tailwind CSS as it allows rapid iteration and friendly syntax  in the design process."
            />

            <ExpCard
              name="BlazorShop"
              icon={{src:"/images/blazor.svg" ,alt:"blazor"}}
              position="Web Application"
              experience={[
                "C#",
                "Blazor Server",
                "Blazor WASM",
                "Stripe",
              ]}
              summary="In order to experiment with building both Blazor Server and Blazor WASM
              applications from the ground up, I decided to create a mock e-commerce site that has both 
              End User functionality with Stripe payment support and Admin Interface 
              to manage available products."
            />

            <ExpCard
              name="100 Days of code"
              icon={{src:"https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/files/python-logo-only.svg" ,alt:"python"}}
              position="Udemy Course"
              experience={[
                "Python",
                "Flask",
                "Automation",
                "Web Scraping",
              ]}
              summary="As a Developer being multilingual is incredibly important to me. So while i currently use C# in industry,
              I love building new skills in automation and scripting with Python. I decided to start the Udemy course, 100 Days of Code, 
              because it has given me a wide array of over 100 projects to hone my skills as a developer and learn many modern packages."
            />

        </div>
      </div>
     
    </>
  )
}

export default Home
