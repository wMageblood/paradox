import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Login from './components/Login/Login.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Login />
  </StrictMode>,
)
