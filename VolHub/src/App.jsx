import { Route, Routes } from "react-router-dom"
import LandingPage from "./Components/Pages/LandingPage"

function App() {

  return (
    <>
    <Routes>
       <Route path="/" element={<LandingPage />} />
    </Routes>

     {/* <LandingPage /> */}
    
    </>
  )
}

export default App
