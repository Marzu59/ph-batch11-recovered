import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './layout/Root.jsx'
import Home from './assets/components/Home.jsx'
import Login from './assets/components/Login.jsx'
import Register from './assets/components/Register.jsx'
import AuthProvider from './contex/AuthProvider.jsx'
import Orders from './orders/Orders.jsx'
import PrivatesRoutes from './routes/PrivatesRoutes.jsx'
import Profile from './profile/Profile.jsx'
import Dashboard from './dashboard/Dashboard.jsx'

const router = createBrowserRouter([
     {
      path:'/',
      Component: Root,
      children: [
        {
          index: true,
          Component: Home
        },
        {
          path: '/login',
          Component: Login
        },
        {
          path: '/register',
          Component: Register
        },
        {
          path: '/orders',
          element: <PrivatesRoutes> <Orders></Orders> </PrivatesRoutes>
        },
        {
          path:'/profile',
          element:<PrivatesRoutes> <Profile></Profile> </PrivatesRoutes>
        },
        {
          path: '/dashboard',
          element: <PrivatesRoutes> <Dashboard></Dashboard> </PrivatesRoutes>
        }

      ]





     }

])






createRoot(document.getElementById('root')).render(
  <StrictMode>
    
 <AuthProvider>
  <RouterProvider router={router} />
 </AuthProvider>


  </StrictMode>,
)
