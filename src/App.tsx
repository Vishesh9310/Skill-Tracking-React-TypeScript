import Home from "./pages/Home"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ViewSkill from "./pages/ViewSkill"
import AddSkill from "./pages/AddSkill"
import PlanSkill from "./pages/PlanSkill"
import { SkillProvider } from "./context/SkillContext"
import UpdateSkill from "./components/UpdateSkill"

const router = createBrowserRouter(
  [
    {path: '/', element: <Home/>},
    {path: '/addskill', element: <AddSkill/>},
    {path: '/viewskill', element: <ViewSkill/>},
    {path: '/planskill', element: <PlanSkill/>},
    {path: '/updateskill', element: <UpdateSkill/>},
  ]
)
function App() {

  return (
    <>
    <SkillProvider>
    <RouterProvider router={router}/>
    </SkillProvider>
    </>
  )
}

export default App
