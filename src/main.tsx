import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import UserForm from './components/UserForm/UserForm.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserForm />
  </StrictMode>,
)
