import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/global typography/index.css'
import App from './pages/App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
