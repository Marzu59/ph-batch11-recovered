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
      }
    ]
  },
]);





createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
