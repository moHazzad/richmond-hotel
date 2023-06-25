import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Pages/Home/Home.jsx';
import AllRooms from './Components/Pages/AllRooms/AllRooms.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: '',
    children:[{
      path: '/',
      element: <Home />
    },
    {
      path:"allRooms",
      element: <AllRooms />
    }
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
