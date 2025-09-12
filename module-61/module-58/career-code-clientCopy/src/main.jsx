import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Router from './Router/Router'
import { RouterProvider } from 'react-router'
import AuthProvider from './contexts/authcontext/AuthProvider'


createRoot(document.getElementById('root')).render(
  <StrictMode>
<AuthProvider>
  <RouterProvider router={Router} />
</AuthProvider>
  </StrictMode>,
)
