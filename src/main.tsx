import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ApplyForm from './components/ApplyForm/ApplyForm.tsx'
import Login from './components/Login/Login.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApplyForm />
  </StrictMode>,
)
