import React from 'react'
import ProgressBar from './ProgressBar';
import { useSkill } from '../context/SkillContext';

interface Skills{
    id: number;
    skillname: string;
    level: string;
    priority: string;
    progress: number;
    plannedDate: string;
    completed: boolean;
}

type Props = {
    skillprop: Skills;
}

const SkillCard: React.FC<Props> = ({skillprop}) => {
    const {deleteSkill, updateSkill} = useSkill();
    return (
        <div>
            <ul className='p-5 bg-blue-100 rounded-2xl m-5'>
                <li>Skill Name: {skillprop.skillname}</li>
                <li>Level: {skillprop.level} </li>
                <li>Priority: {skillprop.priority}</li>
                <li>Progress bar</li>
                <li><ProgressBar percentage={skillprop.progress} /></li>
                <li>PlannedDate: {skillprop.plannedDate}</li>
                <li>Status: {skillprop.completed === true ? 'Completed' : "Not Completed"}</li>
                <li className="w-full flex justify-between pt-2">
                    <button onClick={() => updateSkill(skillprop.id)} className={`${skillprop.completed ? 'bg-green-500' : 'bg-gray-400'} text-white rounded px-3 py-1`}>Edit</button>
                    <button onClick={() => deleteSkill(skillprop.id)} className="bg-red-500 text-white rounded px-3 py-1">Delete</button>
                </li>
            </ul>
        </div>
    )
}

export default SkillCard;