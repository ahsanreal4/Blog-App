import './App.css';
import Home from "../src/pages/Home"
import AboutUS from "../src/pages/AboutUS"
import Login from "../src/pages/Login"
import SignUp from "../src/pages/SignUp"
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoutes';
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
  },
  {
    path:"/dashboard",

    element:
    <ProtectedRoute>
    <Dashboard/>
    </ProtectedRoute>
  }

])

function App() {

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App;
