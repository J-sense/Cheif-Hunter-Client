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
import { Toaster } from 'react-hot-toast';
import Errorpage from './components/Pages/Erorpage.jsx';

const router = createBrowserRouter([
  {
    path :'/',
    element : <Loginlayout></Loginlayout>,
    errorElement:<Errorpage></Errorpage>,
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
    errorElement:<Errorpage></Errorpage>,
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
    element: <Private><Cheif></Cheif></Private>,
    louder: ({params}) => fetch(`http://localhost:5000/alldata/${params.id}`)
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster />
    </AuthProvider>

  </React.StrictMode>,
)
