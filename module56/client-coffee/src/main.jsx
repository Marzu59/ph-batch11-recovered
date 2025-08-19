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
import './Users2.jsx'

import {
  
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Users2 from './Users2.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        Component: Home,
        loader: ()=> fetch('http://localhost:3000/coffees')
        
      },
      // https://server-site-ten-lime.vercel.app/
      {
        path: '/addcoffe',
        Component: Addcoffe
      },
      {
        path: '/coffedetails/:id',
        loader: ({params})=> fetch(`http://localhost:3000/coffees/${params.id}`),
        Component: Coffeedetails
      },
      {
        path: '/updatecoffe/:id',
        loader: ({params})=> fetch(`http://localhost:3000/coffees/${params.id}`),
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
        loader: ()=> fetch('http://localhost:3000/users'),
        Component: Users
      },
      {
        path: '/users2',
        Component: Users2
        
      }
    ]
  },
]);



// Create a client
const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <QueryClientProvider client={queryClient}>
      <AuthProvider>
      <RouterProvider router={router} />
     </AuthProvider>
    </QueryClientProvider>

     
  </StrictMode>,
)
