import React from 'react'
import type { Skills } from '../type/skill';

interface Props {
    skills: Skills[];
    toggleComplete: (id: number) => void;
}

const SkillChecklist: React.FC<Props> = ({ skills, toggleComplete }) => {
    return (
        <div className="space-y-3 mt-4">
            {skills.map((skill) => (
                <div key={skill.id} className="flex items-center gap-3">
                    <input type="checkbox" checked={skill.completed} onChange={() => toggleComplete(skill.id)} className="w-5 h-5"/>
                    <span className={`text-lg ${skill.completed ? 'line-through text-gray-500' : ''}`}> {skill.skillname}</span>
                    <span className="text-sm text-gray-400 ml-auto"> {new Date(skill.plannedDate).toLocaleDateString()}</span>
                </div>
            ))}
        </div>
    )
}

export default SkillChecklist