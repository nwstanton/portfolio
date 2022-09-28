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
    <div className="max-w-[210px] rounded border border-slate-500 from-green-300 to-blue-400 p-4 hover:border-white hover:bg-gradient-to-r hover:shadow-lg">
    <h2 className="text-lg font-bold text-black">{name} &rarr;</h2>
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
    <div className="max-w-prose rounded border border-slate-500 from-green-300 to-blue-400 p-4 hover:border-white hover:bg-gradient-to-r hover:shadow-lg">
    {icon && (<img className="rounded-full mb-6 h-10 w-10" src={icon.src} alt={icon.alt} />)}
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
