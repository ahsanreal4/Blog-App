import './App.css';
import Home from "../src/pages/Home";
import AboutUS from "../src/pages/AboutUS";
import Login from "../src/pages/Login";
import SignUp from "../src/pages/SignUp";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoutes';
import { PAGES } from './Routes/routes'; 

const router = createBrowserRouter([
  {
    path: PAGES.Home, 
    element: <Home />
  },
  {
    path: PAGES.AboutUS,
    element: <AboutUS />
  },
  {
    path: PAGES.Login, 
    element: <Login />
  },
  {
    path: PAGES.Register, 
    element: <SignUp />
  },
  {
    path: PAGES.Dashboard,
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
