import { createContext, useContext, useReducer, type ReactNode } from "react";

export type Skill = {
    id: number;
    skillname: string;
    level: string;
    priority: string;
    progress: number;
    plannedDate: string;
    completed: boolean;
};

type SkillState = {
    skills: Skill[];
};

type Action =
    | { type: 'ADD_SKILL'; payload: Skill }
    | { type: 'UPDATE_SKILL', payload: number }
    | { type: 'DELETE_SKILL', payload: number }
    | { type: 'UPDATE_SKILL_DATA', payload: Skill};

const initialState: SkillState = {
    skills: [],
};

type SkillContextType = {
    state: SkillState;
    addSkill: (skill: Skill) => void;
    updateSkill: (id: number) => void;
    deleteSkill: (id: number) => void;
    updateSkillData: (skill: Skill) => void;
}

const SkillContext = createContext<SkillContextType | undefined>(undefined);

//const SkillContext = createContext<{state: SkillState; dispatch: React.Dispatch<Action>}>({state: initialState, dispatch: () => {},});

function skillReducer(state: SkillState, action: Action): SkillState {
    switch (action.type) {
        case 'ADD_SKILL':
            return { skills: [...state.skills, action.payload] };
        case 'UPDATE_SKILL':
            return {
                skills: state.skills.map((s) => s.id === action.payload ? { ...s, completed: !s.completed } : s),
            };
        case 'DELETE_SKILL':
            return {
                skills: state.skills.filter((s) => s.id !== action.payload),
            };
        case 'UPDATE_SKILL_DATA':
            return {
                skills: state.skills.map((s)=>s.id === action.payload.id ? {...s,skillname: action.payload.skillname, level: action.payload.level, priority: action.payload.priority, plannedDate: action.payload.plannedDate ,completed: action.payload.completed } : s),
            };
        default:
            return state;
    }
};

export const SkillProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(skillReducer, initialState);
    const addSkill = (skill: Skill) => dispatch({ type: 'ADD_SKILL', payload: skill });
    const updateSkill = (id: number) => dispatch({ type: 'UPDATE_SKILL', payload: id });
    const deleteSkill = (id: number) => dispatch({ type: 'DELETE_SKILL', payload: id });
    const updateSkillData = (skill: Skill) => dispatch({type: 'UPDATE_SKILL_DATA', payload: skill});

    return (
        <SkillContext.Provider value={{ state, addSkill, updateSkill, deleteSkill, updateSkillData }}>
            {children}
        </SkillContext.Provider>
    );
};

export const useSkill = () => {
    const context = useContext(SkillContext);
    if (!context) throw new Error('useSkill must be used within the Skill Provider');
    return context;
}