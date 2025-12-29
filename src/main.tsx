import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/global typography/index.css'
import Home from './pages/Home/Home.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
