import { createBrowserRouter } from 'react-router-dom';
import { PAGES } from './routes';
import Home from '../pages/Home';
import AboutUS from '../pages/AboutUS';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import ProtectedRoutes from './ProtectedRoutes';
import Posts from '../pages/Posts';
import Profile from '../pages/Profile';
import AllPosts from '../pages/AllPosts';
export const router = createBrowserRouter([
  {
    path: PAGES.Home, 
    element:<Home/>
  },
  {
    path: PAGES.AboutUS,
    element: <AboutUS/>
  },
  {
    path: PAGES.Login, 
    element: <Login/>
  },
  {
    path: PAGES.Register, 
    element: <SignUp/>
  },
  {
    path:PAGES.Dashboard,
    element: (
      <ProtectedRoutes>
        <Dashboard/>
      </ProtectedRoutes>
    )
  },
  {
    path:PAGES.Posts,
    element:<Posts/>
  },
  {
    path:PAGES.Profile,
    element:<Profile/>
  },
  {
    path:PAGES.AllPost,
    element:<AllPosts/>
  }


]);