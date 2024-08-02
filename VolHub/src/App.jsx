import { Route, Routes } from "react-router-dom"

import Layout from "./Components/Layout"
import { UsedbContextProvider } from "./Services/UseContext"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import LandingPage from "./Pages/LandingPage"
import Auth from "./Pages/Auth";
// import ProtectedRoute from "./Components/ProtectedRoute";


function App() {

  return (
    <>
    <UsedbContextProvider>
       {/* <ProtectedRoute> */}
    <Routes>
       <Route exact path="/" element={<LandingPage />} />  
       <Route exact path="/auth" element={<Auth/>} />  
       <Route path="/dashboard" element={<Layout />} />
    </Routes>
       {/* </ProtectedRoute> */}
    </UsedbContextProvider>
    </>
  )
}

export default App
