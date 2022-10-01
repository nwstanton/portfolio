import { Image } from './types'
import { MouseEvent, useState } from 'react'

function ExpCard({
  name,
  position,
  experience,
  icon,
  summary,
}:{
name : string
position : string
experience : string[] 
icon? : Image
summary : string

}) {

  const [front, setFront] = useState(true)

  function flip() {
    setFront(!front)
  }

  function handleClick(e: MouseEvent) {
    e.stopPropagation()
  }

  const content = front ? (
    <>
    <div className="max-w-[210px] rounded border border-slate-500 from-green-300 to-blue-400 p-4 relative hover:border-white hover:bg-gradient-to-r hover:shadow-lg">
      <div className="absolute right-1 top-1">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
        </svg>
      </div>
      <h2 className="text-lg font-bold text-black pr-4">{name}</h2>
      <h3>{position}</h3>
      <ul className="list-disc list-outside mx-6 mb-4">
        {experience.map((value: string, index: number) => (
              <li key={index}>{value}</li>
            ))}
      </ul>
    </div>
    </>
  ) :
  (
    <>
    <div className="max-w-prose rounded border border-slate-500 from-green-300 to-blue-400 p-4 relative hover:border-white hover:bg-gradient-to-r hover:shadow-lg">
    {icon && (<img className="rounded-full mb-6 h-10 w-10" src={icon.src} alt={icon.alt} />)}
    <div className="absolute right-1 top-1">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
      <path stroke-Linecap="round" strokeLinejoin="round" d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25" />
      </svg>
    </div>
    <h2 className="text-lg font-bold text-black">{name}</h2>
    <p className='text-left max-w-lg'>{summary}</p>
    </div>
    </>
  )
  return  (
    <div onClick={flip}>
      {content}
   </div>
  )
}

export default ExpCard
