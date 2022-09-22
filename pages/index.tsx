import type { NextPage } from 'next'
import ExpCard from '../components/ExpCard'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="m-8 text-3xl font-bold text-red-500 underline">
        Hello world!
      </h1>

      <ExpCard />
    </div>
  )
}

export default Home
