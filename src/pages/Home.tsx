import React from 'react';
import Nav from '../components/Nav'

const Home: React.FC = () => {
  const theme = 'light';
  return (
    <div>
        <h2 className='text-center p-5 text-xl text-blue-700 font-bold'>Welcom to Skill Sync</h2>
        <Nav/>
        <div className='fixed top-20 right-4 z-50'>
          <button>
            {theme === 'light'?'dark':'light'}
          </button>
        </div>
    </div>
  )
}

export default Home