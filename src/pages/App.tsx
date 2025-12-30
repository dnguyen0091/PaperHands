import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import { AuthProvider } from '../context/AuthContext.tsx'
import './App.css'
import LandingPage from './Landing Page/landingPage.tsx'
import UnderConstruction from "./Page Down/underConstruction.tsx"
function App() {

  return (
    // <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/under-construction" element={<UnderConstruction/>}/>
        </Routes>
      </BrowserRouter>
    // </AuthProvider>
  )
}

export default App
