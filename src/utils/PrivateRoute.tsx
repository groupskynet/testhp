import { Navigate } from "react-router-dom";
import { useAuthContext } from "../providers/AuthProvider"
import { PublicRoutes } from "../models/routes.model";

const PrivateRoute = ({ children }: { children: JSX.Element | JSX.Element[] }) => {

  const { status, user} = useAuthContext()

  if(status === 'checking') {
    return <div>Loading...</div>
  }

  if(user){
    return children;
  }

  return <Navigate to={`/${PublicRoutes.LOGIN}`} />
}

export default PrivateRoute;
