import './App.css';

import { router } from './Routes/BrowerRoutes';

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
