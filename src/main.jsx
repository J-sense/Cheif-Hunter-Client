import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header/Header.jsx';
import Main from './components/Layout/Main.jsx';
import Home from './components/Pages/Home.jsx';
import Blog from './components/Pages/Blog.jsx';
import Login from './components/Pages/Login/Login.jsx';
import Singup from './components/Pages/Login/Singup.jsx';
import AuthProvider from './components/AuthProvider.jsx';
import Loginlayout from './components/Pages/Login/Loginlayout.jsx';
import Cheif from './components/Pages/Cheif.jsx';
import Private from './components/routs/Private.jsx';

const router = createBrowserRouter([
  {
    path :'/',
    element : <Loginlayout></Loginlayout>,
    children :[
      {
        path :'/',
        element :<Home></Home>
      },
      {
        path :'/login',
        element :<Login></Login>
      },
      {
        path :"/signup",
        element :<Singup></Singup>
      }
    ]
  },
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },

      {
        path: '/blog',
        element: <Blog></Blog>
      },
 
   
   


    ]
  },
  {
    path: '/alldata/:id',
    element: <Private><Cheif></Cheif></Private>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>

  </React.StrictMode>,
)
