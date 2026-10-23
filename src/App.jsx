import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import PomodoroTimer from "./components/PomodoroTimer"
import Landing from "./components/Landing"
import SideBar from "./components/SideBar"
import Dashboard from "./components/Dashboard"

const router = createBrowserRouter([
  {
    path:'/',
    element:
      <>
        <div className="flex justify-between">
          <SideBar />
          <Landing />
        </div>
      </>
  },
  {
    path:'/dashboard',
    element:
      <>
        <div className="flex justify-between">
          <SideBar />
          <Dashboard />
        </div>
      </>
  },
  {
    path:'/pomodoro',
    element:
      <>
        <div className="flex ">
          <SideBar />
          <PomodoroTimer />
        </div>
      </>
  },
  {
      path:"*",
      element: <h1>Page Not found</h1>
  }
])

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;