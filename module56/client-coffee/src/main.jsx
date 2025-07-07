import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from './Layout/MainLayout.jsx';
import Home from './Components/Home.jsx';
import Addcoffe from './Components/Addcoffe.jsx';
import UpdateCoffee from './Components/UpdateCoffee.jsx';
import Coffeedetails from './Components/Coffeedetails.jsx';
import Signin from './Components/Signin.jsx';
import Signup from './Components/Signup.jsx';
import AuthProvider from './Components/Provider/AuthProvider.jsx';
import Users from './Components/Users.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        Component: Home,
        loader: ()=> fetch('https://server-site-ten-lime.vercel.app/coffees')
        
      },
      {
        path: '/addcoffe',
        Component: Addcoffe
      },
      {
        path: '/coffedetails/:id',
        loader: ({params})=> fetch(`https://server-site-ten-lime.vercel.app/coffees/${params.id}`),
        Component: Coffeedetails
      },
      {
        path: '/updatecoffe/:id',
        loader: ({params})=> fetch(`https://server-site-ten-lime.vercel.app/coffees/${params.id}`),
        Component: UpdateCoffee
      },
      {
        path: '/signin',
        Component: Signin
      },
      {
        path: 'signup',
        Component: Signup
      },
      {
        path: '/users',
        loader: ()=> fetch('https://server-site-ten-lime.vercel.app/users'),
        Component: Users
      }
    ]
  },
]);





createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthProvider>
      <RouterProvider router={router} />
     </AuthProvider>
  </StrictMode>,
)
