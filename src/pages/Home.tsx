import React from 'react';
import Nav from '../components/Nav'

const Home: React.FC = () => {
  return (
    <div className='bg-gradient-to-br from-blue-500 to-purple-500 h-screen w-full'>
      <h2 className='text-center p-5 text-white text-xl font-bold'>Welcom to Skill Sync</h2>
      <Nav />
    </div>
  )
}

export default Home