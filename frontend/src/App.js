import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoutes';
import { PAGES } from './Routes/routes'; 
import Home from './pages/Home';
import AboutUS from './pages/AboutUS';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

const router = createBrowserRouter([
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
    path:"/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    )
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
