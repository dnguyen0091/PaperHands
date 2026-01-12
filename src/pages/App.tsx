import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import { AuthProvider } from '../context/AuthContext.tsx'
import MainLayout from '../layouts/MainLayout.tsx'
import NoLayout from '../layouts/NoLayout.tsx'
import HomePage from './Home/Home.tsx'
import LandingPage from './Landing Page/LandingPage.tsx'
import ErrorPage from "./Page Down/error.tsx"
import UnderConstruction from "./Page Down/underConstruction.tsx"
import UnderMaintenance from "./Page Down/underMaintenance.tsx"


export default function App() {

  return (
    // <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<NoLayout/>}>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/under-construction" element={<UnderConstruction/>}/>
            <Route path="/error" element={<ErrorPage/>}/>
            <Route path="/under-maintenance" element={<UnderMaintenance/>}/>
          </Route>

          <Route element={<MainLayout/>}>
            <Route path="/home" element={<HomePage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    // </AuthProvider>
  )
}

