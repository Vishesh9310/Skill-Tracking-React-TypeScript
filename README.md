# 🚀 SkillSync

A **React + TypeScript** skill management app that allows users to **add**, **view**, **update**, and **filter** their skills. This project is designed to practice and showcase **React core concepts** like state management, routing, and component communication, all wrapped in a clean structure with a responsive UI using **Tailwind CSS**.

---

## 🧠 Key Features

- ✅ Add new skills with details like name, level, priority, and planned date  
- 🔄 View and update skills in a centralized skill list  
- 🗓️ Filter skills based on the current day of the week  
- 🔁 Global state management using **Context API + useReducer**  
- 🌐 Client-side routing via **React Router DOM**  
- 🎨 Clean, responsive UI built with **Tailwind CSS**  
- 🔹 Dynamic rendering of components using buttons  
- 🔹 Form handling with controlled components  
- 🔹 Skill progress tracking and planned date integration  

---

## 🧠 React Concepts Practiced

This project was built to solidify knowledge of the following concepts:

- ✅ `useState` for managing local component state  
- ✅ `props` to pass data between components  
- ✅ Dynamic rendering using `useState` and conditionals  
- ✅ Controlled components for form inputs  
- ✅ Lists for rendering dynamic skill data  
- ✅ `useEffect` for side-effects like derived state  
- ✅ Derived state filtering based on day of the week  
- ✅ Filtering using conditions and `.filter()`  
- ✅ Conditional rendering for UI logic  
- ✅ `react-router-dom` for navigation  
- ✅ `Link`, `useNavigate` for routing  
- ✅ `useContext` + `useReducer` for global state management  

---

## ⚙️ Tech Stack

- React 18  
- TypeScript  
- Tailwind CSS  
- React Router DOM  
- Context API + useReducer for state management  

---

## 📁 Project Structure

/skillsync
├── public/
├── src/
│ ├── assets/
│ ├── components/
│ │ ├── MiniCalendar.tsx
│ │ ├── ProgressBar.tsx
│ │ ├── SkillCard.tsx
│ │ ├── SkillChecklist.tsx
│ │ └── UpdateSkill.tsx
│ ├── context/
│ │ └── SkillContext.tsx
│ ├── pages/
│ │ ├── Home.tsx
│ │ ├── ViewSkill.tsx
│ │ ├── AddSkill.tsx
│ │ └── PlanSkill.tsx
│ ├── types/
│ │ └── skill.ts
│ ├── App.tsx
│ ├── index.css
│ ├── main.tsx
│ ├── vite-env.d.ts
├── .gitignore
├── eslint.config.js
├── index.html
├── LICENSE
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts


---

## 🧪 How to Run

```bash
git clone https://github.com/Vishesh9310/Skill-Tracking-React-TypeScript.git
cd SkillSync
npm install
npm run dev
⚠️ Make sure you have Node.js and Vite installed. TailwindCSS is already configured.



🔮 Future Enhancements
🌐 API or backend storage (Firebase / Express + MySQL)

📅 Skill reminder calendar

📊 Graph-based skill progress visualization

🌙 Dark/Light Theme toggle

📃 License
Licensed under the MIT License. Feel free to use or modify this project for your own learning or personal use.

🙌 Special Note
This project was created for learning purposes and to implement concepts like useReducer, useContext, useNavigate, Link, props, filtering, form handling, and component switching.
