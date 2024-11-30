import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../context/auth";

const PrivateRoute = () => {
  const useAuth = () => {
    return useContext(AuthContext);
  };

  const { user } = useAuth();

  // If no user, redirect to login
  // If user exists, render child routes
  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
