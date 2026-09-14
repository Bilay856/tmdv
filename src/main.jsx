import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import RoodContext from './context/RoodContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <RoodContext>

    <App />
   </RoodContext>
  </BrowserRouter>,
)