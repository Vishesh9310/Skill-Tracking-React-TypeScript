# 🚀 SkillSync – Your Personal Skill Planner

**Track, plan, and progress your technical skills the smart way.**  
A deployable, resume-ready React + TypeScript project to organize, prioritize, and visually track your skill development journey.

## 📌 Why SkillSync?

✅ Covers **all major React concepts**  
✅ Unique & **interview-friendly** (not another TODO/Blog clone)  
✅ Clean, scalable project structure  
✅ Deployable on Netlify/Vercel  
✅ Perfect for portfolios, LinkedIn & resumes

---

## 🛠️ Tech Stack

- ⚛️ React + TypeScript  
- 🎨 Tailwind CSS  
- 🔀 React Router v6  
- 🌗 Context API (Theme support)  
- 💾 Custom Hooks + LocalStorage  
- 🧩 Modular Component Architecture

---

## ✨ Features

| Feature                                  | React Concepts Covered                           |
| ---------------------------------------- | ------------------------------------------------ |
| 🎯 Skill Tracker                         | `useState`, props, dynamic rendering             |
| ➕ Add / ✏️ Edit / ❌ Delete Skills       | Forms, controlled components, list operations   |
| 📊 Progress Bar & % Calculation          | `useEffect`, derived state                       |
| 🔍 Real-time Search                      | Controlled inputs, filter logic                  |
| 📅 Weekly Skill Planner                  | Filtering, conditional rendering                 |
| 📚 Skill Detail View                     | `React Router`, `useParams`                      |
| 💾 LocalStorage Persistence              | Custom `useLocalStorage` Hook                    |
| 🧭 Navigation                            | `Link`, `useNavigate`, nested routing            |

---

## 📁 Project Structure

/skillsync
├── public/
├── src/
│ ├── assets/
│ ├── components/
│ │ ├── MiniCalendar.tsx
│ │ ├── Nav.tsx
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

## 🖼️ UI Preview

### 🏠 Home Page  
- Welcome message  
- Action buttons: View Skills | Add Skill | Plan Week  

### 📋 Skill Tracker  
- Grid of skill cards  
- Priority, Level, Progress bar, Edit/Delete actions

### ➕ Add Skill  
- Form with inputs: name, category, level, priority, date  
- Adds skill to tracker

### 📅 Weekly Planner  
- Mini calendar UI  
- Checklist with filter by week/date  
- Progress status

---

## 💡 Bonus Ideas (Optional Enhancements)

- 🔃 Drag & drop reorder (`react-beautiful-dnd`)
- 📊 Visual charts (Recharts)
- 🧪 Unit testing (React Testing Library)
- 🔐 Mock login with token-based auth

---

## 📦 How to Run Locally

```bash
git clone https://github.com/Vishesh9310/Skill-Sync.git
cd skillsync
npm install
npm run dev   # or npm start

🤝 Contributing
Pull requests are welcome! For major changes, open an issue first to discuss what you’d like to change.

📄 License
MIT

🙋‍♂️ Need Help Getting Started?
Want a starter repo with pre-configured setup and components?
Message me or open an issue — I’ll be happy to help you launch!

Made with ❤️ by Vishesh

Let me know if you want this in Hindi or bilingual (for class presentation or personal branding), or if you'd like the starter repo with boilerplate code" too.
