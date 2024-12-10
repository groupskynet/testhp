import { Navigate, Outlet } from "react-router-dom"
import { PublicRoutes } from "../models/routes.model";
import { useAuthContext } from "../providers/AuthProvider";

export const AuthGuard = () => {
  const {status} = useAuthContext();
  return status === 'authenticated' ?   <Outlet /> : <Navigate to={PublicRoutes.LOGIN} />
}
