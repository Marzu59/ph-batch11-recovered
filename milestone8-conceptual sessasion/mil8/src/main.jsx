import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router'
import Mainlayout from './layout/Mainlayout.jsx'
import Home from './pages/home.jsx'
import Favorites from './pages/Favorites.jsx'
import About from './pages/About.jsx'
import PhoneDetails from './pages/PhoneDetails.jsx'
import Errorpage from './pages/Errorpage.jsx'
import CardProvider from './providers/CardProvider.jsx'
import { Toaster } from 'react-hot-toast'



const routerr = createBrowserRouter([
  {
    path: '/',
    Component: Mainlayout,
    errorElement: <Errorpage />,
    children: [
      {
        path:'/',
        element: <Home />,
        hydrateFallbackElement: <p>loading</p>,
        loader: ()=> {
          return fetch('/phones.json')}
      },
      {
        path:'/favorites',
        Component: Favorites,

      },
      {
        path:'/about',
        element: <About />

      },
      
      {
        path: '/phone-details/:md',
        element: <PhoneDetails />,
        loader: ()=> {
          return fetch('/phones.json')}
        
      }
    ]
  },
  
])




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CardProvider>
    <RouterProvider router={routerr} />
      <Toaster position='top-right' />
    </CardProvider>
  </StrictMode>,
)
