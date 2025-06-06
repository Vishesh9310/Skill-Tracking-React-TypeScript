import React from 'react'
import { useState } from 'react';
import { useSkill } from '../context/SkillContext';

const AddSkill: React.FC = () => {
  const { addSkill } = useSkill();
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
      id: Date.now(),
      ...skill,
      progress: 0,
      completed: false,
    };
    addSkill(newSkill);
    resetForm();
  }

  return (
    <div className='w-full h-fit p-20'>
      <h3 className='text-center font-bold text-blue-600 p-5 text-xl'>Add New Skill</h3>
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

        <input type="submit" className='bg-blue-700 text-white rounded-md py-1 px-3 cursor-pointer' value="ADD SKILL" />
      </form>
    </div>
  );
};

export default AddSkill