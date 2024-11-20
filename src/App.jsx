import React, { Children } from 'react';
import InputForm from './Components/InputForm';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import { useSelector } from 'react-redux';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard/>,
  },
  
]);

const App = () => {
  // Move the useSelector inside the component
  const { input } = useSelector((store) => store.user);

  return (
    <>
      {!input ? (
        <InputForm />
      ) : (<>
        
        <RouterProvider router={router} />
      </>
        
      )}
    </>
  );
};

export default App;
