import type { NextPage } from 'next'
import ExpCard from '../components/ExpCard'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center bg-gradient-to-t from-slate-200 to-white">
      <img src="../portfolio_picture.jpg"></img>
      <h1 className="m-8 text-3xl font-bold text-black ">
        I'm Nathan Stanton, lets{' '}
        <a
          href="https://www.linkedin.com/in/nathanwaynestanton/"
          target="_blank"
          className="text-slate-500"
        >
          connect!
        </a>
      </h1>

      <ExpCard />
    </div>
  )
}

export default Home
