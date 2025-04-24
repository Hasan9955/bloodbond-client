import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { ReactNode } from "react";

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const auth = useAuth();
  const location = useLocation();

  if (!auth) {
    return;
  }

  const { user, loading } = auth;

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-infinity loading-lg text-white"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;
