import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import router from './Router/Router.jsx'
import { ToastContainer } from 'react-toastify'
import Context from './Context/Context.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Context>
          <RouterProvider router={router}></RouterProvider>
            <ToastContainer />
     </Context>
  </StrictMode>,
)
