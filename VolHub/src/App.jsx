import { Route, Routes } from "react-router-dom"
import VolLogin from "./Components/Volunteer/Login"
import LandingPage from "./Components/Pages/LandingPage"
import OrgLogin from "./Components/Organisation/Login"
import VolSignup from "./Components/Volunteer/Signup"
import OrgSignup from "./Components/Organisation/Signup"


function App() {

  return (
    <>
    <Routes>
       <Route path="/" element={<LandingPage />} />
       <Route path="/vollogin" element={<VolLogin />} />
       <Route path="/orglogin" element={<OrgLogin />} />
       <Route path="/volsignup" element={<VolSignup />} />
       <Route path="/orgsignup" element={<OrgSignup />} />
    </Routes>
    
    </>
  )
}

export default App
