import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoutes';
import { PAGES } from './Routes/routes'; 
import Home from './pages/Home';
import AboutUS from './pages/AboutUS';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { createBrowserRouter } from 'react-router-dom';
import { PAGES } from './routes';

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
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    )
  }
]);