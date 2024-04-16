import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './routes/Router';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import AuthProvider from './pages/providers/AuthProvider';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
          <RouterProvider router={router}></RouterProvider>
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)
