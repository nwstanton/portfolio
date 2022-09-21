import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import ExpCard from '../components/ExpCard'

const Home: NextPage = () => {
  return (
    <div className='flex items-center flex-col'>
      <h1 className="text-3xl font-bold underline text-red-500 m-8">
        Hello world!
      </h1>

      <ExpCard />

      
    </div>
  )

}

export default Home
