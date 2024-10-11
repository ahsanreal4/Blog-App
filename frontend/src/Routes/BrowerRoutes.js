import { createBrowserRouter } from 'react-router-dom';
import { PAGES } from './routes';
import Home from '../pages/Home';
import AboutUS from '../pages/AboutUS';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import Posts from '../pages/Posts';
import Profile from '../pages/Profile';
import AllPosts from '../pages/AllPosts';
import PostByCategories from '../pages/PostByCategories';
import SinglePost from '../pages/SinglePost';
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
        <Dashboard/>
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
  },
  {
    path:PAGES.PostsByCategories,
    element:<PostByCategories/>
  },
  {
    path:PAGES.SinglePost,
    element:<SinglePost/>
  }


]);