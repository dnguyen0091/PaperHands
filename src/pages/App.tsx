import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import { AuthProvider } from '../context/AuthContext.tsx'
import './App.css'
import LandingPage from './Landing Page/landingPage.tsx'
import ErrorPage from "./Page Down/error.tsx"
import UnderConstruction from "./Page Down/underConstruction.tsx"
import UnderMaintenance from "./Page Down/underMaintenance.tsx"
function App() {

  return (
    // <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/under-construction" element={<UnderConstruction/>}/>
          <Route path="/error" element={<ErrorPage/>}/>
          <Route path="/under-maintenance" element={<UnderMaintenance/>}/>
        </Routes>
      </BrowserRouter>
    // </AuthProvider>
  )
}

export default App
