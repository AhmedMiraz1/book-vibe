import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Home from './Components/Pages/Home';
import ListedBooks from './Components/Pages/ListedBooks';
import PagesToRead from './Components/Pages/PagesToRead';
import ErrorPage from './Components/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:'/',
        element:<Home/>,
       
      },
      {
        path:'/listedBooks',
        element:<ListedBooks/>,
      },
      {
        path:'pageToRead',
        element:<PagesToRead/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
