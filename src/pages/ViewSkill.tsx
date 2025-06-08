import React from 'react'
import SkillCard from '../components/SkillCard'
import { useSkill } from '../context/SkillContext'

const ViewSkill: React.FC = () => {
  const { state } = useSkill();

  return (
    <div className='h-screen w-screen bg-gradient-to-br from-blue-500 to-purple-500'>
      <h2 className='text-center p-5 text-xl text-white font-bold'>View Skills</h2>
      <div className='opacity-80'>
        {state.skills.length === 0
        ? (<p className='content-center text-center text-white animate-pulse'>No skill added yet.</p>)
        : (<div className='grid grid-cols-4 gap-4 p-4'>
            {state.skills.map((skill) => (
              <SkillCard key={skill.id} skillprop={skill} />
            ))}
          </div>)
      }
      </div>
    </div>
  );
};

export default ViewSkill;