import React, {useState} from 'react';
import AddSkill from './AddSkill';
import ViewSkill from './ViewSkill';
import PlanSkill from './PlanSkill';

const Home: React.FC = () => {
  const [value, setValue] = useState("AddSkill");

  const renderComponent = () => {
    switch(value){
      case "addskill":
        return <AddSkill/>;
      case "viewskill":
        return <ViewSkill/>;
      case "planweek":
        return <PlanSkill/>;
      default:
        return <AddSkill/>;
    }
  }

  return (
    <div className='bg-gradient-to-br from-blue-500 to-purple-500 h-screen w-full'>
      <h2 className='text-center p-5 text-white text-xl font-bold'>Welcom to Skill Sync</h2>
      
      <ul className='flex p-5 bg-cyan-300 justify-evenly text-xl'>
        <button onClick={() => setValue('addskill')}>Add Skill</button>
        <button onClick={() => setValue('viewskill')}>View Skill</button>
        <button onClick={() => setValue('planweek')}>Plan of Week</button>
      </ul>
       {renderComponent()}
    </div>
  )
}

export default Home