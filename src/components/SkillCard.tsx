import React from 'react'
import ProgressBar from './ProgressBar';
import { useSkill } from '../context/SkillContext';
import type { Skills } from '../type/skill';
import { useNavigate } from 'react-router-dom';

type Props = {
    skillprop: Skills;
}

const SkillCard: React.FC<Props> = ({ skillprop }) => {
    const { deleteSkill } = useSkill();
    const navigate = useNavigate();


    const handleClick = () => {
        const data = {
            id: skillprop.id,
            skillname: skillprop.skillname,
            level: skillprop.level,
            priority: skillprop.priority,
            progress: skillprop.progress,
            plannedDate: skillprop.plannedDate,
            completed: skillprop.completed,
        }
        navigate('/updateskill', { state: data });
    }

    return (
        <div>
            <ul className='p-5 bg-blue-100 rounded-2xl m-5'>
                <li>Skill Name: {skillprop.skillname}</li>
                <li>Level: {skillprop.level} </li>
                <li>Priority: {skillprop.priority}</li>
                <li>Progress</li>
                <li><ProgressBar percentage={skillprop.progress} /></li>
                <li>PlannedDate: {skillprop.plannedDate}</li>
                <li>Status: {skillprop.completed === true ? 'Completed' : "Not Completed"}</li>
                <li className="w-full flex justify-between pt-2">
                    {/* <Link to='/updateskill' key={skillprop.id} state={skillprop} className={`${skillprop.completed ? 'bg-green-500' : 'bg-gray-400'} text-white rounded px-3 py-1`}>Edit</Link> */}
                    <button onClick={handleClick} className={`${skillprop.completed ? 'bg-green-500' : 'bg-gray-400'} text-white rounded px-3 py-1`}>Edit</button>
                    <button onClick={() => deleteSkill(skillprop.id)} className="bg-red-500 text-white rounded px-3 py-1">Delete</button>
                </li>
            </ul>
        </div>
    )
}

export default SkillCard;