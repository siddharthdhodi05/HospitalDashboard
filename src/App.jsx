import React, { Children } from 'react';
import InputForm from './Components/InputForm';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import { useSelector } from 'react-redux';
import Home from './Components/Home';
import Layout from './Components/Layout';
import About from './Components/About';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
       {
        path:"/dash",
        element:<Dashboard/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/home",
        element:<Home/>
      },
     
    ]
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
