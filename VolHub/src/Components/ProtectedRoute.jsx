import { UsedbContext } from "../Services/UseContext";
import LandingPage from "../Pages/LandingPage";
import Layout from "./Layout";

function ProtectedRoute() {

    // ----------------------firebase setup----------------
    const {user}=UsedbContext();
    console.log(user)
  

    return user?<Layout/>:<LandingPage/>
}


export default ProtectedRoute;