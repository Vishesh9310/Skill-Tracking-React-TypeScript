import React from 'react'
import { useLocation } from 'react-router-dom'
import { useSkill } from '../context/SkillContext';
import { useState } from 'react';

const UpdateSkill: React.FC = () => {
    const location = useLocation();
    const data = location.state;

    const { updateSkillData } = useSkill();
    const [skill, setSkill] = useState({
        skillname: '',
        level: '',
        priority: '',
        plannedDate: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setSkill((prevformDATA) => ({ ...prevformDATA, [name]: value }));
    }

    const resetForm = () => {
        setSkill({
            skillname: '',
            level: '',
            priority: '',
            plannedDate: ''
        });
    };
    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(skill);
        const newSkill = {
            id: data.id,
            ...skill,
            progress: 0,
            completed: data.completed,
        };
        updateSkillData(newSkill);
        resetForm();
    }


    return (
        <div className='flex justify-evenly item-center py-30 bg-gradient-to-br from-blue-500 to-purple-500 h-screen w-screen'>
            <div className='space-y-5 text-white opacity-80'>
                <h2 className=' text-center p-3 bg-cyan-400 rounded-2xl text-white font-bold'>old data</h2>
                <div>
                    <ul>
                        <li>Id: {data.id}</li>
                        <li>Skillname: {data.skillname}</li>
                        <li>Level: {data.level}</li>
                        <li>Priority: {data.priority}</li>
                        <li>Progress: {data.progress}</li>
                        <li>PlannedDate: {data.plannedDate}</li>
                        <li>Completed: {data.completed == true ? "Complete" : "Not Complete"}</li>
                    </ul>
                </div>
            </div>
            <div className='space-y-5 opacity-80'>
                <h2 className='text-center p-3 bg-cyan-400 rounded-2xl text-white font-bold'>Update data here</h2>
                <div>
                    <form onSubmit={handleFormSubmit} className='bg-blue-200 p-5 rounded-lg w-200 space-y-4 m-auto'>
                        <input
                            type="text"
                            name='skillname'
                            value={skill.skillname}
                            onChange={handleChange}
                            placeholder='Enter Skill Name'
                            className='w-full outline-none p-2 rounded'
                            required
                        />

                        <br />

                        <label htmlFor="level">Enter Level:</label>
                        <select name="level" id="level" value={skill.level} onChange={handleChange} required>
                            <option value="">Select level</option>
                            <option value="beginner">Beginner</option>
                            <option value="intermediate">Intermediate</option>
                            <option value="advanced">Advanced</option>
                        </select>

                        <br />

                        <label htmlFor="priority">Enter Priority:</label>
                        <select name="priority" id="priority" value={skill.priority} onChange={handleChange} required>
                            <option value="">Select priority</option>
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </select>

                        <br />

                        <label htmlFor="plannedDate">Enter Target Date:</label>
                        <input
                            type="date"
                            id='plannedDate'
                            name='plannedDate'
                            value={skill.plannedDate}
                            onChange={handleChange}
                            required
                        />

                        <br />

                        <input type="submit" className='bg-blue-700 text-white rounded-md py-1 px-3 cursor-pointer' value="Update Skill" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UpdateSkill