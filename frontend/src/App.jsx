import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import AboutUS from "./pages/AboutUS"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/about-us",
    element:<AboutUS/>

  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/sign-up",
    element:<SignUp/>
  }
])

function App() {

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
