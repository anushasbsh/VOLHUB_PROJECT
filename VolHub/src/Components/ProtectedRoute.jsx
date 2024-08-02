import { Navigate } from "react-router-dom";
import PropType from "prop-types"
import { UsedbContext } from "../Services/UseContext";

function ProtectedRoute({children}) {

    // ----------------------firebase setup----------------
    const {user}=UsedbContext();
    console.log(user)
    if (location.pathname === '/auth'||location.pathname === '/test'||location.pathname === '/') {
      // setIsLogin(true);
        return children;
      }
  return user?(
    children
  ): <Navigate to={"/"}/>
}


ProtectedRoute.propTypes=
{
    children:PropType.node.isRequired
}

export default ProtectedRoute