import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AboutPage from './pages/AboutPage.jsx'

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import GalleryPage from './pages/GalleryPage.jsx'
import ContactPage from './pages/ContactPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: 'about',
    element: <AboutPage />
  },
  {
    path: 'gallery',
    element: <GalleryPage />
  },
  {
    path: 'contact',
    element: <ContactPage />
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
