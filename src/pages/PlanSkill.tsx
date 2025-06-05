import React, { useEffect, useState } from 'react';
import MiniCalendar from '../components/MiniCalendar';
import SkillChecklist from '../components/SkillChecklist';
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

const getCurrentWeekDates = (): string[] => {
  const today = new Date();
  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - today.getDay());

  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(startOfWeek);
    d.setDate(d.getDate() + i);
    return d.toISOString().split('T')[0];
  });
};


const PlanSkill: React.FC = () => {
  const {state, updateSkill}= useSkill();
  const [skills, setSkills] = useState<Skills[]>(state.skills);
  const [filterThisWeek, setFilterThisWeek] = useState<boolean>(false);
  const weekDates = getCurrentWeekDates();

  //sync local state with global state if it changes
  useEffect(()=>{
    setSkills(state.skills);
  },[state.skills]);

  const toggleComplete = (id: number) => {
    setSkills((prev) =>
      prev.map((skill) => (skill.id === id ? { ...skill, completed: !skill.completed } : skill))
    );
    
    const skillToUpdate = state.skills.find(skill => skill.id === id) ;
    if(skillToUpdate != undefined){
      const updated = {...skillToUpdate, completed: !skillToUpdate.completed};
      updateSkill(id, updated);
    }
  };

  const filteredSkills = filterThisWeek
    ? skills.filter((s) => weekDates.includes(s.plannedDate))
    : skills;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Skill Tracker</h1>

      <div className="mb-4 flex items-center gap-3">
        <input type="checkbox" checked={filterThisWeek} onChange={() => setFilterThisWeek(!filterThisWeek)} className="w-5 h-5"/>
        <label className="text-lg font-medium">Show only this week's skills</label>
      </div>

      <MiniCalendar currentWeekDates={weekDates} />
      <SkillChecklist skills={filteredSkills} toggleComplete={toggleComplete} />
    </div>
  );
};

export default PlanSkill;